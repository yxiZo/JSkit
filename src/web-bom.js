/**
 * @description 获取url参数
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