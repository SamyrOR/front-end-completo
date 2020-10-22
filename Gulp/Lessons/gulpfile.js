const {series, parallel, src, dest} = require('gulp');
const rename = require('gulp-rename');

function javaScript(){
    return src('src/js/*.js')
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('dist/assets/js/'))
}
exports.js = javaScript;
exports.series = parallel(javaScript)