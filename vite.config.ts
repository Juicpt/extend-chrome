import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import manifest from './src/manifest.json'
import {crx} from "rollup-plugin-chrome-extension";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        crx({manifest}),
        vitePluginImp({
                libList: [
                    {
                        libName: "antd",
                        style(name) {
                            // use less
                            return `antd/es/${name}/style/index.less`
                        }
                    },
                ],
            }
        )
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    }
})
