# [剑指 Offer 17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

### 示例 1:

> 输入: n = 1
> 输出: [1,2,3,4,5,6,7,8,9]

### 说明：

- 用返回一个整数列表来代替打印
- n 为正整数

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    const ans = [];
    const length = maxPositionNumber(n);
    for (let i = 1; i <= length; i++) {
        ans.push(i);
    }
    
    return ans;
};

const maxPositionNumber = (n) => {
    let num = 0;
    for (let i = 0; i < n; i++) {
        num = num * 10 + 9
    }

    return num;
}
```

