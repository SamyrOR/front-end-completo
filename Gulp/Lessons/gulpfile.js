const {series, parallel, src, dest} = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');

function javaScript(){
    return src('src/js/*.js')
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
exports.js = javaScript;
exports.css = css;
exports.minify = parallel(javaScript, css)