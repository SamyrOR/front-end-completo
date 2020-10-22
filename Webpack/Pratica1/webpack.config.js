const path = require('path'); //Variavel para adquirir o path para o arquivo de output

module.exports = { //É um module exports
    //Entry para adicionar os arquivos de entrada caso seja mais deu um, usar objeto literal
    entry: {
        home: './src/js/index.js',
        component: './src/js/component.js'
    },
    //Output, ou saida dos arquivos, colocamos filename: que define o nome e pasta dos arquivos
    //e o path: que define a pasta principal de saida dos arquivos
    output: {
        filename:'assets/js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    //mode: development ou production para cada tipo de situação, se estamos em desenvolvimento e ou se é direto para produção
    mode:'development',
    //module: Nativamente o webpack trabalha apenas com js, para outros tipos de arquivos devemos adicionar os respectivos modulos, o regex para localizar os arquivos em test:, e use: para carregar os loaders
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(sass|scss)$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}