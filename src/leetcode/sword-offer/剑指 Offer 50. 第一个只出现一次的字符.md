# [剑指 Offer 50. 第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

### 示例 1:

> 输入：s = "abaccdeff"
> 输出：'b'

### 示例 2:

> 输入：s = "" 
> 输出：' '

### 限制：

`0 <= s 的长度 <= 50000`

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (const key of map.keys()) {
        if (map.get(key) === 1) {
            return key;
        }
    }

    return ' ';
};
```

