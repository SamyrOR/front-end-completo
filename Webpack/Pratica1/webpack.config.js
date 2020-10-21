const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'../images/[name].[ext]'
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