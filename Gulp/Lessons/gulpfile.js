const {series, parallel, src, dest} = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const minifyImage = require('gulp-image');
const babel = require('gulp-babel');

function javaScript(){
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyJs())
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('dist/assets/js/'))
}
function css(){
    return src('src/style/*.css')
    .pipe(minifyCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dist/assets/style/'))
}
function images(){
    return src('src/images/*')
    .pipe(minifyImage())
    .pipe(dest('dist/assets/images/'))
}
exports.js = javaScript;
exports.css = css;
exports.images =  images;
exports.minify = parallel(javaScript, css, images)