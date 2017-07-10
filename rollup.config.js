import html from "rollup-plugin-fill-html";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
	entry: "src/main.js",
	format: "umd",
	moduleName: "compsci101",
	dest: "dist/bundle.js",
	sourceMap: true,
	plugins: [
		serve("dist"),
		livereload("dist")
	]
};
