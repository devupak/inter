
import {src, dest, parallel} from 'gulp';
import cleanCss from 'gulp-clean-css';
import replace from 'gulp-replace';
import minify from 'gulp-minify';
import concat from 'gulp-concat'

import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();
 
function genHTML(cb) {
    src('src/**/*.html')
    .pipe(replace(/app.js/g, 'app-min.js'))
    .pipe(dest('docs'))
    cb();
}
 
function minifyJS(cb) {
  src([
    'src/tasks.js',
    'src/app.js', 
    'node_modules/bootstrap/dist/js/bootstrap.js'
  ])
    .pipe(replace(/import .*/g, ''))
    .pipe(replace(/export .*/g, ''))
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(dest('docs'));
  cb();
}

function minifyCSS(cb) {
  src([
    'src/**/*.css', 
    'node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(cleanCss())
    .pipe(dest('docs'));
  cb();
}

function build(cb) {
  parallel(genHTML, minifyJS, minifyCSS)(cb);
}

export default build

