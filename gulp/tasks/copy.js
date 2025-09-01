export const copy = () => {
	return app.gulp.src(app.path.src.services)
		.pipe(app.gulp.dest(app.path.build.services))

		
}