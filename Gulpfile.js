const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');
const $concat = require('gulp-concat');
const $iife = require('gulp-iife');
const browserSync = require('browser-sync');
const log = require('fancy-log');
const del = require('del');
const { reload } = browserSync;

function clean() {
    return del([
        'dest'
    ]);
}

function js() {
    return src('./src/js/**/*.js')
        .pipe($iife({
            useStrict: false, // "useStrict" should be already written at the top in all *.js files
            trimCode: false,
            prependSemicolon: false
        }))
        .pipe($concat('app.js'))
        .pipe(dest('dest/js/'))
        .pipe(reload({
            stream: true
        }));
}

function jsVendors() {
    return src('./src/libs/**/*.js')
        .pipe($concat('vendors.js'))
        .pipe(dest('dest/js/'));
}

function css() {
    return src('./src/styles/index.css')
        .pipe(dest('dest/styles/'));
}

function html() {
    return src('./src/index.html')
        .pipe(dest('dest/'))
        .pipe(reload({
            stream: true
        }));
}

function livereload(cb) {
    browserSync({
        server: {
            baseDir: './dest',
            directory: true,
            serveStaticOptions: {
                extensions: [
                    'html'
                ]
            }
        },
        tunnel: false,
        open: true,
        host: 'localhost',
        port: 3030,
        logPrefix: 'qlik',
        logLevel: 'debug',
        notify: false,
        ui: false,
        files: [
            './dest/**/*.{html,css,js}'
        ],
        watchEvents: 'change',
        watch: true,
        ignore: [],
        single: true,
        logFileChanges: true,
        browser: [
            // 'Chrome' // tested on Windows
            'Google Chrome' // tested on MacOS
            // 'firefox'  // tested on MacOS
        ],
        reloadOnRestart: false,
        reloadDelay: 2000,
        reloadDebounce: 2000,
        injectChanges: true,
        minify: false,
        watchOptions: {
            ignored: 'node_modules'
        },
        middleware: {}
    });

    cb();
}

function watchFiles(cb) {
    watch('src/styles/**/*.css', css);
    watch('src/js/app/**/*.js', js);
    watch('src/js/libs/**/*.js', jsVendors);
    watch('src/index.html', html);

    cb();
}

exports.build = build = series(clean, parallel(js, jsVendors, css, html));
exports.default = series(build, parallel(livereload, watchFiles));
