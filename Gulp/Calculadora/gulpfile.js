const {src, dest, parallel, series, watch} = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const cssConcat = require('gulp-concat-css');
const optImg = require('gulp-image');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function html(){
    return src('./src/html/*')
        .pipe(dest('./dist'))
}
function concat() {
    return src('./src/style/home.css')
        .pipe(cssConcat('bundle.css'))
        .pipe(dest('./src/style/bundle/'))
}
function css(){
    return src('./src/style/bundle/bundle.css')
        .pipe(minifyCss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(dest('./dist/assets/style/'))
}
function js(){
    return src('./src/js/*')
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(minifyJs())
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('./dist/assets/js'))
}
function otimizeImg(){
    return src('./src/images/*')
        .pipe(optImg())
        .pipe(dest('./dist/assets/image/'))
}



//exports.default = parallel(html, series(concat, css), js, otimizeImg)
exports.default = () => {
    watch('./src/html/*', html)
    watch('./src/style/*.css', series(concat, css))
    watch('./src/js/*', js)
    watch('./src/images/*', otimizeImg)
}