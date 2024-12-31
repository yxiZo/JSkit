/**
 * @description 去除数字尾部的零
 * @param {*} number 
 * @returns 
 */
function removeTrailingZeros(number) {
            let str = number.toString();  // 将数字转换为字符串
            // 判断是否包含小数点
            if (str.includes('.')) {
                // 去除小数点后面的零
                str = str.replace(/(\.\d*?)0+$/, '$1');
                // 如果小数点后没有数字，删除小数点
                if (str[str.length - 1] === '.') {
                    str = str.slice(0, str.length - 1);
                }
            }
            return str;
}