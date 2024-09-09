/**
 * 邻接矩阵
 * @description 用于计算sku的库存和价格
 */
class AdjoinMatrix {
    constructor(vertex) {
        this.vertex = vertex; // 顶点数组
        this.quantity = this.vertex.length; // 矩阵长度
        this.adjoinArray = []; // 矩阵数组
        this.init();
    }

    // 初始化数组
    init() {
        this.adjoinArray = Array(this.quantity * this.quantity).fill(0);
    }

    /*
     * @param id string
     * @param sides Array<string>
     * 传入一个顶点，和当前顶点可达的顶点数组，将对应位置设置权值
     */
    setAdjoinVertexs(id, sides, weight) {
        const pIndex = this.vertex.indexOf(id);
        sides.forEach((item) => {
            const index = this.vertex.indexOf(item);
            const cur = this.adjoinArray[pIndex * this.quantity + index];
            if (typeof cur !== 'number') {
                // specList.length > 3时，存在单边多权的情况
                this.adjoinArray[pIndex * this.quantity + index].push(weight);
            } else if (cur > 1) {
                this.adjoinArray[pIndex * this.quantity + index] = [cur, weight];
            } else {
                this.adjoinArray[pIndex * this.quantity + index] = weight;
            }
        });
    }

    /*
     * @param id string
     * 传入顶点的值，获取该顶点的列
     */
    getVertexCol(id) {
        const index = this.vertex.indexOf(id);
        const col = [];
        this.vertex.forEach((item, pIndex) => {
            col.push(this.adjoinArray[index + this.quantity * pIndex]);
        });
        return col;
    }

    /*
     * @param params Array<string>
     * 传入一个顶点数组，求出并集
     */
    getCollection(params) {
        const paramsVertex = params.map((id) => this.getVertexCol(id));
        let collections = [];
        paramsVertex.forEach((col, index) => {
            if (col.some((item) => item !== 0)) {
                collections.push(params[index]);
            }
        });
        return collections;
    }

    /*
     * @param params Array<string>
     * 传入一个顶点数组，求出交集
     */
    getUnions(params) {
        const paramsVertex = params.map((id) => this.getVertexCol(id));
        let unions = [];
        this.vertex.forEach((type, index) => {
            const row = paramsVertex.map((col) => col[index]).filter((t) => t !== 1);
            if (this.isItemEqual(row)) {
                unions.push(type);
            }
        });
        return unions;
    }

    /*
     * @param params
     * 传入一个交集行，判断内部是否互相相等
     */
    isItemEqual(params) {
        if (params.includes(0)) return false;

        let weight = -1;

        // 找出权值
        if (params.length) {
            params.some((t) => {
                if (typeof t === 'number') weight = t;
                return typeof t === 'number';
            });
            if (weight === -1) {
                // 都是多权边数组的情况
                return this.isArrayUnions(params);
            }
        }

        return params.every((t) => {
            if (typeof t === 'number') {
                return t === weight;
            } else {
                return t.includes(weight);
            }
        });
    }

    /*
     * @param params
     * 传入多个数组，判断是否有交集
     */
    isArrayUnions(params) {
        if (!params.length) return false;
        return params[0].some((t) => {
            return params.every((_t) => _t.includes(t));
        });
    }
}


/**
 * 规格邻接矩阵
 * @description 用于计算sku的库存和价格
 */
class SpecAdjoinMatrix extends AdjoinMatrix {
    constructor(specList, specCombinationList, saleInfoData) {
        // 根据新的 specList 数据结构初始化顶点数组
        const vertex = specList.reduce(
            (total, current) => [...total, ...current.attributeList.map(attr => attr.value)],
            []
        );

        super(vertex);
        this.specList = specList;
        this.specCombinationList = specCombinationList;
        this.stockMatrix = Array(this.quantity).fill(0).map(() => Array(this.quantity).fill(0)); // 初始化库存矩阵
        this.priceMatrix = Array(this.quantity).fill(0).map(() => Array(this.quantity).fill(0)); // 初始化价格矩阵
        this.productSaleInfo = saleInfoData
        // 根据可选规格列表矩阵创建
        this.initSpec();
        // 同级顶点创建
        this.initSameLevel();
    }

    /*
     * @param params
     * @param price number
     * 填写价格矩阵的值
     */
    setPrice(params, price) {
        params.forEach((param) => {
            const pIndex = this.vertex.indexOf(param);
            params.forEach((item) => {
                const index = this.vertex.indexOf(item);
                this.priceMatrix[pIndex][index] = price;
            });
        });
    }

    /*
         * @param id string
         * 获取顶点的价格
         */
    getPrice(id) {
        const index = this.vertex.indexOf(id);
        return this.priceMatrix[index].reduce((a, b) => a + b, 0);
    }

    /*
      * @param params
      * @param stock number
      * 填写库存矩阵的值
     */
    setStock(params, stock) {
        params.forEach((param) => {
            const pIndex = this.vertex.indexOf(param);
            params.forEach((item) => {
                const index = this.vertex.indexOf(item);
                this.stockMatrix[pIndex][index] = stock;
            });
        });
    }

    /*
      * @param id string
      * 获取顶点的库存
      */
    getStock(id) {
        const index = this.vertex.indexOf(id);
        return this.stockMatrix[index].reduce((a, b) => a + b, 0);
    }


    /**
     * 根据可选规格组合填写邻接矩阵的值
     */
    initSpec() {
        this.specCombinationList.forEach((item, index) => {
            const specs = item.skuAttributes.map(attr => attr.value);
            const stock = item.amountOnSale;
            this.fillInSpec(specs, index + 2); // 0用于互不相连，1用于同级，权级就从2开始
            this.setStock(specs, stock);

            // // 根据 productSaleInfo.quoteType
            // // 等于0或者2，商品是数量报价，价格从productSaleInfo里取，
            // // 等于1是sku报价，价格从productskuinfo里取
            // // 示例商品
            // // https://detail.1688.com/offer/658008428540.html (quoteType = 1)
            // // https://detail.1688.com/offer/810778507530.html (quoteType = 2)
            // // https://detail.1688.com/offer/750565167128.html (quoteType = 0)
            //
            // switch(this.productSaleInfo.quoteType){
            //     case 0:
            //         // this.setPrice(specs, this.productSaleInfo?.priceRangeList ?? []);
            //         this.setPrice(specs, item.price ?? 0);
            //         break;
            //     case 1:
            //         this.setPrice(specs, item.price ?? 0);
            //         break;
            //     case 2:
            //         // this.setPrice(specs, this.productSaleInfo?.priceRangeList ?? []);
            //         this.setPrice(specs, item.price ?? 0);
            //         break;
            //     default:
            //         break
            // }
        });
    }

    // 填写同级点
    initSameLevel() {
        // 获得初始所有可选项
        const specsOption = this.getCollection(this.vertex);
        this.specList.forEach((item) => {
            const params = [];
            // 获取同级别顶点
            item.attributeList.forEach((value) => {
                if (specsOption.includes(value.value)) params.push(value.value);
            });
            // 同级点位创建
            this.fillInSpec(params, 1);
        });
    }

    /*
     * @param params
     * 传入顶点数组，查询出可选规格
     */
    getSpecscOptions(params) {
        let specOptionCanchoose = [];
        if (params.some(Boolean)) {
            // 获取可选项（交集）
            specOptionCanchoose = this.getUnions(params.filter(Boolean));
        } else {
            // 所有可选项
            specOptionCanchoose = this.getCollection(this.vertex);
        }

        // 过滤掉库存为0的规格
        return specOptionCanchoose.filter(option => {
            return this.getStock(option) > 0
        });

        // return specOptionCanchoose;
    }

    /*
     * @param params
     * 填写邻接矩阵的值
     */
    fillInSpec(params, weight) {
        params.forEach((param) => {
            this.setAdjoinVertexs(param, params, weight);
        });
    }
}
