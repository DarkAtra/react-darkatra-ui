const postcss = require('rollup-plugin-postcss');
module.exports = {
	rollup(config) {
		config.plugins.push(
			postcss({
				modules: true,
				namedExports: (name) => name.replace(/-([a-z])/g, match => match[1].toUpperCase())
			})
		);
		return config;
	}
};
