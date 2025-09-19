# 🐋 BlueWhale UI Monorepo

一个基于 **pnpm workspace** 的现代化 Vue 3 组件库开发环境，演示了如何使用 monorepo 架构来管理多个相关包。

## 📁 项目结构

```
bluewhale-ui-monorepo/
├── packages/                    # 可复用的包
│   └── vue-ui-lib/             # Vue 3 组件库
│       ├── src/
│       │   ├── components/
│       │   │   └── Button/
│       │   └── index.ts
│       ├── package.json
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── README.md
├── apps/                       # 应用程序
│   └── vite-project/          # 演示应用
│       ├── src/
│       │   └── App.vue
│       └── package.json
├── pnpm-workspace.yaml        # workspace 配置
├── package.json               # 根配置
└── README.md                  # 本文件
```

## ⚙️ PNPM Workspace 配置详解

### 1. Workspace 配置文件

**pnpm-workspace.yaml**
```yaml
packages:
  - "packages/*"    # 所有 packages 目录下的包
  - "apps/*"        # 所有 apps 目录下的应用
```

### 2. 根 package.json 配置

```json
{
  "name": "bluewhale-ui-monorepo",
  "private": true,
  "scripts": {
    "build": "pnpm -r build",                    # 递归构建所有包
    "build:lib": "pnpm --filter vue-ui-lib build", # 只构建组件库
    "dev:demo": "pnpm --filter vite-project dev",  # 启动演示应用
    "type-check": "pnpm -r type-check",         # 递归类型检查
    "clean": "pnpm -r exec rm -rf dist node_modules"
  },
  "packageManager": "pnpm@10.15.0"
}
```

### 3. 包间依赖配置

在应用中引用本地包时，使用 `workspace:*` 协议：

```json
{
  "dependencies": {
    "@bluewhale/vue-ui-lib": "workspace:*"
  }
}
```

## 🚀 常用命令

### 安装依赖

```bash
# 安装所有工作区的依赖
pnpm install

# 为特定包安装依赖
pnpm add vue --filter @bluewhale/vue-ui-lib
pnpm add -D typescript --filter vite-project

# 为根工作区安装依赖
pnpm add -w eslint
```

### 运行脚本

```bash
# 在所有包中递归运行脚本
pnpm -r build
pnpm -r test
pnpm -r lint

# 在特定包中运行脚本
pnpm --filter @bluewhale/vue-ui-lib build
pnpm --filter vite-project dev

# 使用通配符
pnpm --filter "*ui*" build
```

### 包管理

```bash
# 列出所有工作区包
pnpm -r list

# 查看包的依赖关系
pnpm -r list --depth=0

# 执行任意命令
pnpm -r exec rm -rf node_modules
pnpm --filter "*lib*" exec ls -la
```

## 📦 开发工作流

### 1. 开发组件库

```bash
# 启动组件库开发模式（监听文件变化）
pnpm run dev:lib

# 或者
pnpm --filter @bluewhale/vue-ui-lib dev
```

### 2. 测试组件库

```bash
# 启动演示应用
pnpm run dev:demo

# 构建组件库
pnpm run build:lib

# 构建演示应用
pnpm run build:demo
```

### 3. 添加新组件

1. 在 `packages/vue-ui-lib/src/components/` 创建新组件
2. 在 `packages/vue-ui-lib/src/index.ts` 中导出
3. 重新构建：`pnpm run build:lib`
4. 在演示应用中测试

### 4. 发布组件库

```bash
# 构建
pnpm run build:lib

# 发布（在组件库目录中）
cd packages/vue-ui-lib
npm publish
```

## 🎯 Workspace 的优势

### 1. 依赖管理
- **统一版本**：所有包共享相同版本的依赖
- **减少重复**：避免重复安装相同的包
- **快速安装**：利用 pnpm 的硬链接机制

### 2. 开发效率
- **本地链接**：包之间可以直接引用，无需发布
- **实时更新**：修改组件库后立即在演示应用中生效
- **统一脚本**：一个命令管理所有包

### 3. 代码组织
- **清晰结构**：packages 和 apps 分离
- **独立版本**：每个包可以独立发版
- **共享配置**：TypeScript、ESLint 等配置可以共享

## 💡 最佳实践

### 1. 包命名约定
- 使用 scoped packages：`@bluewhale/package-name`
- 组件库：`@bluewhale/vue-ui-lib`
- 工具包：`@bluewhale/utils`
- 应用：通常不需要 scope

### 2. 版本管理
- 使用 `workspace:*` 引用本地包
- 发布时自动替换为实际版本号
- 考虑使用 changesets 管理版本

### 3. 构建策略
- 组件库构建为 ES 模块和 CommonJS
- 应用构建为生产就绪的静态文件
- 使用 TypeScript 生成类型定义

### 4. 开发环境
- 使用 `--filter` 针对特定包操作
- 利用并行构建提高效率
- 设置合理的脚本快捷方式

## 🔧 故障排除

### 常见问题

**1. 包找不到**
```bash
# 重新安装依赖
pnpm install

# 检查 workspace 配置
pnpm -r list
```

**2. 类型定义问题**
```bash
# 重新构建组件库
pnpm run build:lib

# 检查 TypeScript 配置
pnpm run type-check
```

**3. 热重载不工作**
确保在开发模式下运行组件库：
```bash
pnpm run dev:lib
```

## 📚 扩展学习

- [pnpm Workspace 官方文档](https://pnpm.io/workspaces)
- [Monorepo 最佳实践](https://monorepo.tools/)

---

Made with ❤️ by the BlueWhale Team 🐋
