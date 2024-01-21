# .eslintrc 配置文件

```json
{
  "extends": [
    "eslint-config-ali/typescript/vue",
    "prettier",
    ".eslintrc-auto-import.json"
  ],
  "parserOptions": {
    "project": ["tsconfig.json", "tsconfig.node.json"]
  }
}
```