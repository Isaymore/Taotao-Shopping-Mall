module.exports = {
    'plugins': {
        // CSS样式自动补齐webkit和moz等兼容前缀
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'not IE <= 11', // 不考虑IE浏览器
                'ff >= 30', // 火狐浏览器
                '> 1%', // 全球统计有超过1%的使用率
                'last 2 versions' // 所有主流浏览器最近2个版本
            ],
            grid: true // 开启grid布局的兼容（除了IE浏览器，其它浏览器都兼容grid）
        },
        // px像素单位转换成rem单位，需要结合依赖lib-flexible使用：yarn add lib-flexible
        // 并在main.ts中引入：import 'lib-flexible/flexible'
        // 'postcss-pxtorem': {
        //     rootValue: 75, // 75表示宽度为750px的设计稿，37.5表示宽度为375px的设计稿
        //     unitPrecision: 6, // 计算结果保留6位小数
        //     selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px
        //     propList: ['*'], // 可以从px转换为rem的属性，感叹号开头的不转换
        //     replace: true, // 转换成rem单位后，不保留原来的px单位
        //     mediaQuery: true, // 允许在媒体查询中转换px
        //     minPixelValue: 2, // 设置要替换的最小像素值
        //     exclude: /node_modules/i // 排除node_moduled文件（node_modules目录下的文件禁止转换）
        // }
    }
}