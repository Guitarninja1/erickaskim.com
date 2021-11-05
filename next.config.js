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
				loader: 'gray-matter',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		);
		return config;
	},
};
