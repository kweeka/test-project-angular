var gulp = require("gulp");
var prefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var inject = require("gulp-inject");
var embed_templates = require("gulp-angular-embed-templates");
var browser_sync = require("browser-sync");
var reload = browser_sync.reload;
var config = {
    server: {
        baseDir: "./www"
    },
    tunnel: false,
    port: 8080,
    single: true
};
var path = {
    build: {
        html: 'www/',
        js: 'www/js/',
        css: 'www/css/',
        img: 'www/img/',
        fonts: 'www/fonts/'
    },
    src: {
        html: 'src/index.html',
        js: ['src/modules/*.js', 'src/**/*.js'],
        style: 'src/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/index.html',
        js: ['src/**/*.js', 'src/**/*.html'],
        style: 'src/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};
gulp.task("html:build", function (done) {
    gulp.src(path.src.html)
        .pipe(inject(gulp.src([path.build.js + "main.js", path.build.css + "template.css"]), {
            transform: function (filepath) {
                arguments[0] = (filepath + "?v=" + Date.now()).replace('/www','');
                return inject.transform.apply(inject.transform, arguments);
            }
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream:true}));
    done();
});
gulp.task("css:build", function (done) {
   gulp.src(path.src.style)
       .pipe(prefixer())
       .pipe(concat("template.css"))
       .pipe(gulp.dest(path.build.css));
    done();
});
gulp.task("js:build", function (done) {
    gulp.src(path.src.js)
        .pipe(embed_templates())
        .pipe(concat("main.js"))
        //.pipe(uglify())
        .pipe(gulp.dest(path.build.js));
    done();
});

gulp.task("project:build", gulp.series(gulp.parallel("css:build", "js:build"), gulp.series("html:build")));

gulp.task("project:watch", function () {
    gulp.watch(path.watch.style, gulp.series("css:build", "html:build"));
    gulp.watch(path.watch.js, gulp.series("js:build", "html:build"));
    gulp.watch(path.watch.html, gulp.series("html:build"));
});

gulp.task("project:webserver", function () {
    browser_sync(config);
});

gulp.task("project:develop", gulp.parallel("project:watch", "project:webserver"));






