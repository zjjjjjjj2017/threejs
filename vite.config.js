import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
// vite.config.js
import ViteComponents, {
  AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";

export default {
  publicPath: './',
  plugins: [
    /* ... */
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  //代理跨域
  server: {
    proxy: {
      '/api': {
        //获取数据的服务器地址设置
        target: 'http://api.cpengx.cn/metashop/api',
        secure: false,// 如果是不是https接口，可以不配置这个参数
        //需要代理跨域
        changeOrigin: true,
        //路径重写
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
};
