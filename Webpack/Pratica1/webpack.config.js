const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
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
                use:['file-loader']
            }
        ]
    }
}