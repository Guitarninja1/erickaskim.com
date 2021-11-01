module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
			options: { mode: ['react-component'] },
		});

		return config;
	},
};
