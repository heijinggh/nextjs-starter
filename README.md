## 创建

```
yarn create next-app -e https://github.com/heijinggh/nextjs-template
```

## 运行

```
yarn dev
```

## 工程结构

- src/app
- src/components 包含应用程序中的所有可复用组件
  - src/components/business 业务相关
  - src/components/layout 布局相关
  - src/components/shared 共享，可以被 business 或 layout 中的组件引用
- src/constants 用于存储应用中的常量，例如特定的字符串，配置值，或其他不变的值。
- src/hooks 存储自定义的hooks
- src/services 用于存储应用中的服务，这些服务可能与后端API交互，或者进行其他复杂的处理。
- src/store 进行状态管理
- src/utils 包含应用程序中的实用函数或库

## 命名规范

1. 使用小写字母：所有的文件和文件夹名都应该使用小写字母。这使得在大小写敏感和不敏感的文件系统之间移动文件更加容易。

2. 使用连字符(-)：为了提高可读性，可以使用连字符来分隔单词。例如，`user-profile`。

3. 避免使用空格：空格可能在不同的操作系统和工具中造成问题。而且，在URL中，空格需要被编码为 %20，这会使URL看起来不那么清晰。

4. 避免使用特殊字符：特殊字符，如 !, @, #, $, %, ^, &, *, (, ), +, =, {, }, [, ], |, \, :, ;, ', ", <, >, ,, ?, / 可能在不同的操作系统和工具中造成问题