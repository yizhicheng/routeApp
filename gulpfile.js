var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

//默认执行
gulp.task('default', function(){
    console.log("运行gulp!");
    gulp.start(['sass','html','css','js','data', 'image']);
});
//sass
gulp.task('sass', function(){
    return sass('scss/*.scss',{style: 'expanded'})
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('sass.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/scss'))
    .pipe(notify({ message: 'sass 编译完成' }));
});

//data文件拷贝
gulp.task('data', function() {
    gulp.src('data/*.json')
    .pipe(gulp.dest('dist/data'))
});

//css合并压缩
gulp.task('css', function() {
    gulp.src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

//html压缩
gulp.task('html', function(){
    gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
    // gulp.src('index.html')
    // .pipe(gulp.dest('dist'));
});

//js压缩合并
gulp.task('js', function() {
    gulp.src([
        'js/lib/jquery.js',
        'js/lib/bootstrap.js', 
        'js/lib/angular.js',
        'js/lib/angular-ui-router.js',
        'js/lib/ui-bootstrap-tpls.js'
    ])//原文件
    .pipe(concat('base.js'))//整合到base中
    .pipe(gulp.dest('dist/js'))//输出路径
    .pipe(uglify())//压缩
    .pipe(rename({suffix: '.min'}))//重命名
    .pipe(gulp.dest('dist/js'));//输出路径

    // gulp.src(['js/app.js'])
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    // .pipe(gulp.dest('dist/js'))
    // .pipe(notify({message: 'app.js 检查完成'}));

    gulp.src(['js/app.js','js/services.js','js/controller.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('page.js'))
    .pipe(gulp.dest('dist/js'))
    // .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    // .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'page js检查完成!' }));//提示成功
});
//图片压缩
gulp.task('image', function() {
    gulp.src('images/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: '图片压缩完成' }));
});
//开启监听文件
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['css/**','js/**','views/**','data/**']).on('change', livereload.changed);
});