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
  - src/components/ui UI相关
  - src/components/business 业务相关
  - src/components/layout 布局相关
  - src/components/shared 共享，通用，可以被 business 或 layout 中的组件引用
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

## 路由

如果你想创建一个路由为 playground/counter 的页面，你需要：

1. 在 app 目录下，创建一个新的文件夹，命名为 playground。

1. 在 playground 文件夹下，创建一个新的文件夹，命名为 counter。

1. 在 counter 文件夹下，创建一个新的文件，命名为 page.tsx。

1. 在 page.tsx 文件中，你需要默认导出一个 React 组件，这个组件将被渲染在 playground/counter 这个路由上。一个最简单的例子可能看起来像这样：

```jsx
// app/playground/counter/page.tsx
import React from 'react';

export default function Counter() {
    return <h1>This is the counter page!</h1>;
}

```

## UI

这个模板使用了 [Tailwind CSS](https://tailwindcss.com/)，[Radix UI](https://www.radix-ui.com/) 和 [Shadcn UI](https://ui.shadcn.com/) 来处理样式和 UI 组件


### 如何使用

TODO:

### 主题 & 自定义样式

TODO:

### 响应式设计

TODO:

## 多语言

TODO:

## 项目状态和未来计划

TODO:

## 必读
- https://nextjs.org/docs/getting-started/react-essentials
- https://github.com/pmndrs/zustand

## Recommended VSCode plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
- https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

