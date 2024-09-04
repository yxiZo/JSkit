const toString = Object.prototype.toString;

const charsetRegExp = /^[\d\.]+$/;

const defaultOption = {
    thousandSeparator: ',', // 千分位分隔符
    decimalSeparator: '.', // 小数分隔符
    decimalDigits: false // 小数位数量, false表示不特殊处理
}

function isNumber(target) {
    return toString.call(target) === '[object Number]'
}

export function thousandify(amount, option) {
    const parsedAmount = amount + '';


    if (!charsetRegExp.test(parsedAmount)) {
        return amount
    }

    const {
        decimalSeparator,
        thousandSeparator,
        decimalDigits,
        splitDigit
    } = Object.assign({}, defaultOption, option);

    const amountParts = parsedAmount.split(decimalSeparator);
    const intPartStr = amountParts[0].replace(/(?!^)(?=(\d{3})+$)/g, thousandSeparator);

    // 处理小数部分
    let decimalStr = amountParts[1] || '';
    if (isNumber(decimalDigits)) {
        decimalStr = (decimalStr + Array(decimalDigits + 1).join(0)).substr(0, decimalDigits);
    }

    if (splitDigit) {
        return [intPartStr, decimalStr]
    }
    return !!decimalStr
        ? [intPartStr, decimalStr].join(decimalSeparator)
        : intPartStr;
}

export function generatePriceTemplate(price, target) {
    const [intPartStr, decimalStr] = thousandify(price)
    const templateText = `
        <div>
            <span class="intPartStrWrapper">{{intPartStr}}</span>
            <span class="intPoint">.</span>
            <span class="decimalStrWrapper">{{decimalStr}}</span>
        </div>
    `
    const compiled = _.template(templateText)

    if (target) {
        target.innerHtml = compiled({
            intPartStr,
            decimalStr
        })
    }

    return compiled({
        intPartStr,
        decimalStr
    })
}