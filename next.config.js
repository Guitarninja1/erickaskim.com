module.exports = {
	reactStrictMode: true,
	images: {
		loader: 'cloudinary',
		path: 'https://api.cloudinary.com/v1_1/dxurxdtth',
	},
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.md$/,
				loader: 'frontmatter-markdown-loader',
				options: { mode: ['react-component'] },
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		);
		return config;
	},
};
