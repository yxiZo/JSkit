/* 基于邻接矩阵实现的无向图类 */
class GraphAdjMat {
    // 顶点列表
    vertices: number[]; // 顶点列表，元素代表“顶点值”，索引代表“顶点索引”
    // 
    adjMat: number[][]; // 邻接矩阵，行列索引对应“顶点索引”

    /**
     * @param vertices 
     * @param edges 
     * @example vertices: [1, 2, 3, 4, 5]  
     * @example 描述链接关系  例如下例 代表有 (1, 2) (4, 5) 两条边  
     *           edges: [[0, 1], [3, 4]]
     *              会产出这样的邻接矩阵
     *           [
     *              [0, 1, 0, 0, 0], 
     *              [1, 0, 0, 0, 0],
     *              [0, 0, 0, 0, 0],
     *              [0, 0, 0, 0, 1],
     *              [0, 0, 0, 1, 0], 
     *          ]  
     *  无权图值只有 0 ,1  , 如果是加权图 可能会有数字上的不同
     *  无向图 矩阵随着对角线对称
     *  有向图 则没有
     */
    constructor(vertices: number[], edges: number[][]) {
        this.vertices = []; 
        this.adjMat = []; 
        
        // 初始化顶点
        for(const val of vertices){
            this.addVertex(val)
        }

        // 初始化边
        // 添加边
        // 请注意，edges 元素代表顶点索引，即对应 vertices 元素索引
        for (const e of edges) {
            this.addEdge(e[0], e[1]);
        }
    }


    size(): number{
        return this.vertices.length;
    }
    /**
     * @description 添加顶点
     * @param val
     * @example 
     */
    addVertex(val: number): void{
        const n: number = this.size();
        // 向顶点列表中添加新顶点的值
        this.vertices.push(val);
        
        const newRow: number[] = []
        for(let j = 0 ; j < n; j++){
            newRow.push(0)
        }

        // 往邻接矩阵中增加 新的一行
        this.adjMat.push(newRow)
        // 在邻接矩阵中添加新的一列, 因为上面的newRow 没有新顶点的位置
        for(const row of this.adjMat){
            row.push(0)
        }
    }

    /**
     * @description 添加边  参数 i, j 对应 vertices 元素索引 
     * @param i
     * @param j
     * @example  
     * 例如 vertices 数组 [22, 33, 44, 55, 66] , 
     * 这里的 i 可以是 0 , j 可以是 4,  代表 建立(22, 66)这条边 
     */
    addEdge(i: number, j: number){
        // 索引越界与相等处理
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        // 在无向图中，邻接矩阵关于主对角线对称，即满足 (i, j) === (j, i)
        this.adjMat[i][j] = 1;
        this.adjMat[j][i] = 1;
    }

    /**
     * @description 移除顶点
     * 
     */
    removeVertex(index: number): void{
        if (index >= this.size()) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        // 1. 移除顶点数组
        this.vertices.splice(index, 1);
        // 2. 移除顶点 在 邻接矩阵中相关行列
        // 在邻接矩阵中删除索引 index 的行
        this.adjMat.splice(index, 1);
        // 在邻接矩阵中删除索引 index 的列
        for (const row of this.adjMat) {
            row.splice(index, 1);
        }
    }
    
    /**
     * @description 移除边  不代表删除节点, 只是移除关系
     * @param i
     * @param j
     * @example 同 addEdge 方法
     */
    removeEdge(i: number, j: number): void{
        // 索引越界与相等处理
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        this.adjMat[i][j] = 0;
        this.adjMat[j][i] = 0;
    }

    print(): void {
        console.log('顶点列表 = ', this.vertices);
        console.log('邻接矩阵 =', this.adjMat);
    }
}
