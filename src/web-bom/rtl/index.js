/**
 * @description 判断是否为RTL   
 */
export function isRTL() {
    return document.documentElement.getAttribute('dir') === 'rtl'
}

/**
 * @description 设置RTL
 * @param {*} text 
 */
export function setRTL(currentLang) {
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', currentLang)
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang)
    }
}