const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
        builderOptions: {
            // 在这里的配置将会和默认配置合并，然后传递给electron-builder
            appId: 'com.zwanan.app', // 项目唯一标识
            productName: 'ikun-home', // 打包产物的前缀
            copyright: 'Copyright © 2023 Zwanan', // 可用使用${}引用package.json里面配置项，配置项不存在会报错
            directories: {
                output: 'dist' // 打包产物的位置
            },
            // ------- windows 相关配置
            win: {
                icon: 'public/icons/icon.ico', // 应用图标
                target: ['nsis'] // 打包的目标类型,支持很多类型，具体看文档
            },
            nsis: {
                "oneClick": false,
                "perMachine": true,
                "allowToChangeInstallationDirectory": true // 允许修改安装目录
            }
        }
    }
  },
  configureWebpack: {
    plugins:[
      AutoImport({
        resolvers:[ElementPlusResolver()],
      }),
      Components({
        resolvers:[ElementPlusResolver()],
      })
    ]
  },
  lintOnSave: false
})
