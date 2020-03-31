const mix = require('laravel-mix');
// var BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/resources/js'
        },
        // plugins: [
        //     new BrotliPlugin({
        //         asset: '[path].br[query]',
        //         test: /\.(js|css|html|svg)$/,
        //             threshold: 10240,
        //             minRatio: 0.8
        //         })
        // ]
    },
});

// mix.webpackConfig(webpack => {
//     return {
//         plugins: [
//             new BrotliGzipPlugin({
//                 asset: '[path].gz[query]',
//                 algorithm: 'gzip',
//                 test: /\.(js|css|html|svg)$/,
//                 threshold: 10240,
//                 minRatio: 0.8
//             })
//         ]
//     };
// });

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
