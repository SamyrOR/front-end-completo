const {src, dest, parallel, series} = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssConcat = require('gulp-concat-css');

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
        .pipe(dest('./dist/assets/css'))
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

exports.default = parallel(html, series(concat, css), js)
exports.css = series(concat, css)