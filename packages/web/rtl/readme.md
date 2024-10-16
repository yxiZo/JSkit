## handle rtl

关于Unicode 编码 控制文本方向的逻辑

## 备注


```js
let originalString = "شعر مستعار-بشري-طويل-للغاية";
let newString = originalString.replace(/-/g, ' '); // success
// let newString = originalString.replace('-', ' ') // error
console.log(newString);
```

## about
https://juejin.cn/post/7314921235925565490
https://juejin.cn/post/7124887769796591653