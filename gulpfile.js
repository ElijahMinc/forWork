let source_Files = '#src';
let build_Files = 'dist';
let fs = require('fs');


let path = {
   src: {
      html: [source_Files + '/*.html', '!' + source_Files + '/_*.html'],
      css: source_Files + '/scss/style.scss',
      js: source_Files + '/js/script.js',
      img: source_Files + '/img/**/*.+(jpeg|svg|jpg|ico|png|webp|gif)', //    "/**" - означает, что мы будем слушать все подпапки
      // "*." - означает, что мы конкретизируем, какие файлы нас интересуют
      infoFile: source_Files + '/cv/**/*.+(pdf|docx)',
      fonts: source_Files + '/fonts/*.ttf',
   },

   build: {
      html: build_Files + '/',
      css: build_Files + '/css/',
      js: build_Files + '/js/',
      img: build_Files + '/img/',
      infoFile: build_Files + '/CV/',
      fonts: build_Files + '/fonts/',

   },
   watch: {
      html: source_Files + '/**/*.html',
      css: source_Files + '/scss/**/*.scss',
      js: source_Files + '/js/**/*.js',
      img: source_Files + '/img/**/*.{jpeg,svg,jpg,ico,png.webp,gif}',

   },
   libsSrc: {
      css: source_Files + '/lib/css/**/*.min.css',
      js: source_Files + '/lib/js/**/*.min.js',
   },
   libsBuild: {
      css: build_Files + '/lib/css/',
      js: build_Files + '/lib/js/',
   },
   clean: build_Files + '/',  // " ./ " указывает на то,что данный файл лежит в относительной директории,то есть,в той которая указана в контексте.
   cleanAll: [build_Files + '/', 'node_modules', 'package-lock.json'],   // " ./ " указывает на то,что данный файл лежит в относительной директории,то есть,в той которая указана в контексте.
};

let { src, dest } = require('gulp'),

   gulp = require('gulp'),
   browser_sync = require('browser-sync').create(),
   file_include = require('gulp-file-include'),
   del = require('del'),
   scssToCss = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   cleancss = require('gulp-clean-css'),
   uglify = require('gulp-uglify-es').default,
   rename = require('gulp-rename'),
   group_media = require('gulp-group-css-media-queries'),
   webp = require('gulp-webp'),
   inject = require('gulp-inject'),
   ttf2woff = require('gulp-ttf2woff'),
   ttf2woff2 = require('gulp-ttf2woff2');


function browserSync() {
   browser_sync.init({
      server: {
         baseDir: build_Files + '/'
      },
      port: 3000,
      notify: false
   })
}

function html() {
   return src(path.src.html)
      .pipe(file_include())
      .pipe(dest(path.build.html))
      .pipe(browser_sync.stream())
}
function infoFile() {
   return src(path.src.infoFile)
      .pipe(file_include())
      .pipe(dest(path.build.infoFile))
      .pipe(browser_sync.stream())
}
function fonts() {
   // src(path.src.fonts)
   //    .pipe(ttf2woff())
   //    .pipe(dest(path.build.fonts))
   return src(path.src.fonts)
      .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts))
}
function css() {
   return src(path.src.css)
      .pipe(
         scssToCss({
            outputStyle: 'expanded' //'compressed'
         })
      )
      .pipe(
         autoprefixer({
            cascade: false,
            overrideBrowserslist: ['last 2 versions']
         })
      )
      .pipe(group_media())
      .pipe(dest(path.build.css))
      .pipe(cleancss())
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(dest(path.build.css))
      .pipe(browser_sync.stream())
}
function js() {
   return src(path.src.js)
      .pipe(file_include())
      .pipe(dest(path.build.js))
      .pipe(rename({
         extname: '.min.js'
      }))
      .pipe(uglify())
      .pipe(dest(path.build.js))
      .pipe(browser_sync.stream())
}

function image() {
   return src(path.src.img)
      .pipe(webp())
      .pipe(dest(path.build.img))
      .pipe(browser_sync.stream())
}

function libJS() {
   return src([path.libsSrc.js])
      .pipe(dest(path.libsBuild.js))
}

function watchFiles() {
   gulp.watch([path.watch.html], html);
   gulp.watch([path.watch.css], css);
   gulp.watch([path.watch.js], js);
   gulp.watch([path.watch.img], image);
}

function clean() {
   return del(path.clean);
}

gulp.task('inject', function () {
   var target = gulp.src(path.src.html);
   // It's not necessary to read the files (will speed up things), we're only after their paths:
   var sources = gulp.src([path.src.js], { read: false });

   return target.pipe(inject(sources))
      .pipe(gulp.dest(path.build.js));
})

gulp.task('clean_all', () => {
   return del(path.cleanAll)
})

let build = gulp.series(clean, libJS, image, js, css, html, fonts);
let watch = gulp.parallel(build, watchFiles, browserSync);



exports.default = watch;

 // при запуске выполняется эта перменная по умолчанию