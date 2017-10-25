var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var bs = require('browser-sync');
var plumber = require('gulp-plumber');
var util = require('gulp-util');


function errorHandler(error){
	util.beep();
	console.log(error.toString());
	return true;
}

gulp.task('css', function(){
	gulp.src("./*.css")
	.pipe(bs.stream());
});

gulp.task('html', function(){
	gulp.src("./*.html")
	.pipe(bs.stream());
});

gulp.task('default', ['css', 'html', 'sass', 'pug', 'javascript'], function(){
	bs.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("./*.css", ['css']);
	gulp.watch("./sass/*.sass", ['sass']);
	gulp.watch("./templates/*.pug", ['pug-watch']);
	gulp.watch("./*.html").on("change", bs.reload);
	gulp.watch("./*.js").on("change", bs.reload);
});

gulp.task('sass', function(){
	gulp.src("./sass/*.sass")
	.pipe(plumber(errorHandler))
	.pipe(sass({
		includePaths:
			[
			"bower_components/bootstrap/scss/"
			] }
	))
	.pipe(plumber.stop())
	.pipe(gulp.dest("./"))
	.pipe(bs.stream());
});

gulp.task('pug', function(){
	gulp.src([
		"./templates/*.pug", 
		"!./templates/_*.pug"])
	.pipe(plumber(errorHandler))
	.pipe(pug({pretty: true}))
	.pipe(plumber.stop())
	.pipe(gulp.dest("./"))
	.pipe(bs.stream());
});


gulp.task('pug-watch', ['pug'] ,function(done){
	bs.reload();
	done();
});

gulp.task('javascript', function(){
	gulp.src("./*.js")
	.pipe(bs.stream());
});

gulp.task('package', function(){
	gulp.src([
		"*.html",
		"*.css"])
	.pipe(gulp.dest("./package"));
	gulp.src([
		"./csf/**/*"])
	.pipe(gulp.dest("./package/csf"));
	gulp.src([
		"./imagenes/**/*"])
	.pipe(gulp.dest("./package/imagenes"));
});










