/**
 * This file contains utility functions for web, involving the use of browser BOM (e.g., history, navigator, window, location, document, etc.).
 * Therefore, please ensure the code is running in a browser environment before using it!
 */

/**
 * @description Get URL parameters
 * @param {*} field 
 * @returns 
 */
export function getQueryParam(field) {
    const queryParams = new URLSearchParams(window.location.search);
    if (field) {
        return queryParams.get(field) || "";
    } else {
        const params = {};
        queryParams.forEach((value, key) => {
            if (params[key]) {
                if (Array.isArray(params[key])) {
                    params[key].push(value);
                } else {
                    params[key] = [params[key], value];
                }
            } else {
                params[key] = value;
            }
        });
        return params;
    }
}


/**
 * @description 禁止浏览器自动滚动到浏览位置
 * https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration
 * @returns history.scrollRestoration
 */
export function forbidAutoScroll() {
    // 禁止浏览器自动滚动到浏览位置
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    return history.scrollRestoration
}


/**
 * @description 放大图片
 * @param {*} e 
 */
export function zoom(e){
    var zoomer = e?.currentTarget;
    if(!zoomer) return;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

/**
 * @description 平滑滚动到顶部
 */
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
}


/**
 * @description 获取当前hostname顶级域名
 * @returns 
 */
export function getTopLevelDomain() {
      // 获取当前主机名
      const currentHost = window.location.hostname;

      // 获取顶级域名，增加容错处理
      let topLevelDomain = '';
      const hostParts = currentHost.split('.');

      if (hostParts.length >= 2) {
          topLevelDomain = hostParts.slice(-2).join('.');
      } else {
          // 当主机名不符合预期格式时，回退为当前主机名
          topLevelDomain = currentHost;
      }
      return topLevelDomain
}


/**
 * @description 设置Cookie
 * @param {*} cookieName 
 * @param {*} cookieValue 
 * @param {*} cookieExpiresDays 默认7天
 * @param {*} domain 默认顶级域名
 */
export function setCookie({
    cookieName = 'currentHost',
    cookieValue = currentHost,
    cookieExpiresDays = 7,
    domain
}) {
       const topLevelDomain = domain ?? getTopLevelDomain()
       // 创建过期时间
       const date = new Date();
       date.setTime(date.getTime() + (cookieExpiresDays * 24 * 60 * 60 * 1000)); // 转换为毫秒
       const expires = `; expires=${date.toUTCString()}`;
       // 将Cookie设置为顶级域名
       document.cookie = `${cookieName}=${cookieValue}; domain=${topLevelDomain}; path=/${expires}`;
}