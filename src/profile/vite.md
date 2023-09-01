# Vite 配置文件

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({}),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        {
          axios: [['default', 'axios']],
        },
        { from: 'vue-router', imports: ['RouteLocationRaw'], type: true },
      ],
      defaultExportByFilename: false,
      dirs: [],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      resolvers: [],
      injectAtEnd: true,
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
});
```

