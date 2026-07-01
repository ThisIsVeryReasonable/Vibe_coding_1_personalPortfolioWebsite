# 个人作品集网站

简洁现代的个人作品集网站，深色主题 + 渐变强调色，带滚动入场动画，支持移动端适配。

## 技术栈

- **React 19** + **TypeScript**
- **Vite 8** —— 构建工具
- **Tailwind CSS v4** —— 样式（通过 `@tailwindcss/vite` 插件接入）
- **Framer Motion** —— 滚动入场动画
- **oxlint** —— 代码检查

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 本地预览构建产物
npm run preview

# 代码检查
npm run lint
```

## 项目结构

```
src/
  components/
    Header.tsx      # 顶部导航栏（毛玻璃 + 锚点导航）
    Hero.tsx        # 首屏：头像 + 大标题 + 简介
    About.tsx       # 关于我：介绍卡片 + 技能分类卡片
    Projects.tsx    # 项目卡片网格（emoji 图标）
    Contact.tsx     # 联系方式（邮箱 / GitHub / Twitter）
    Footer.tsx      # 页脚：社交链接 + 版权
    FadeIn.tsx      # 可复用滚动入场动画（Framer Motion）
  data/
    projects.ts     # 项目数据（类型定义 + 数组）
    skills.ts       # 技能数据（按分类组织）
  App.tsx           # 应用入口，组合各区块
  main.tsx          # 渲染入口
  index.css         # Tailwind 引入 + 深色主题基底
```

## 设计规范

- 深色主题：背景 `#0a0a0a`，文字 `#ffffff`
- 渐变强调色：`purple` → `pink`
- 滚动入场动画（淡入上移）、响应式布局

## 数据维护

**项目** —— `src/data/projects.ts`，往 `projects` 数组追加：

```ts
{
  title: '项目名称',
  description: '简短描述',
  icon: '🚀',           // emoji 图标，代替截图
  tech: ['Java', 'Spring Boot'],
  link: 'https://...',
}
```

**技能** —— `src/data/skills.ts`，往 `skills` 数组追加分类：

```ts
{ name: '分类名称', items: ['技能A', '技能B'] }
```

**联系方式** —— `src/components/Contact.tsx` 中的 `contacts` 数组（当前为占位符，替换为真实信息即可）。
