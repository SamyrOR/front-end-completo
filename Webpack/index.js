let example = document.createElement('p');
let text = document.createTextNode(`
const path = require('path');

module.exports = {
    entry: {
        home: './src/js/index.js',
        component: './src/js/component.js'
    },
    output: {
        filename:'assets/js/[name].js',
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
}`)
example.appendChild(text)
document.body.appendChild(example)