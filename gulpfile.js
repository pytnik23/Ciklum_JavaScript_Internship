var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	imagemin 	 = require('gulp-imagemin'),
	del		 	 = require('del'),
	cache		 = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('imageMin', function() {
	gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		})))
		.pipe(gulp.dest('dist/images'))
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('clean', function() {
	return del.sync('dist/');
});

gulp.task('build', ['clean', 'sass', 'imageMin'], function() {
	gulp.src('app/css/main.css')
		.pipe(gulp.dest('dist/css'));
	gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('app/js/common.js')
		.pipe(gulp.dest('dist/js'));
	gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));	
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});