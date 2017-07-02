import html from "rollup-plugin-fill-html";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
	entry: "src/main.js",
	format: "umd",
	moduleName: "compsci101-visualised",
	dest: "dist/bundle.js",
	sourceMap: true,
	plugins: [
		html({
			template: "src/index.html",
			filename: "index.html"
		}),
		serve("dist"),
		livereload("dist")
	]
};
