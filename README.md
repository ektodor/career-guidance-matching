# 💼 職涯諮詢媒合

## 捲軸

```scss
.scrollbar-width-none {
  scrollbar-width: none;
}
```

```jsx
<div className="... d-flex overflow-x-scroll scrollbar-width-none">
  {cardStory.map((item) => {
    return <CardStoryComponent item={item} />;
  })}
</div>;

export function CardStoryComponent({ item }) {
  return <div className="... flex-shrink-0 ...">...</div>;
}
```

## 變更清單造型大小

```scss
ul li::marker {
  // 改變點的大小
  font-size: 0.75rem;
}
```

## gh-page

- 🎯 vite.config.js 設定

```js
export default defineConfig({
  ...
  base:
    process.env.NODE_ENV === "production" ? "你的repository名稱" : "/",
    ...
});
```

- 🎯 package.json 設定

```js
{
    "scripts": {
        ...
        "deploy": "vite build && gh-pages -d dist"
    },
    "devDependencies": {
        ...
        "gh-pages": "^6.3.0",
        ...
    }
}
```

## 圖片與文件匯入路徑設定

- 🎯 vite.config.js 設定

```js
import path from "path";
export default defineConfig({
...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
...
});
```

- 🎯 jscofig.json 設定

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "/images/*": ["src/assets/images/*"]
    }
  },
  "include": ["src/**/*", "src/**/*.jsx", "src/**/*.js"]
}
```

### 🎯 使用方法

```js
import hero4 from "@images/index/hero-4.png";
import { CardStoryComponent } from "@/components/CardStoryComponent";
```

## 安裝 Sass

```bash
npm install -D sass-embedded
```
