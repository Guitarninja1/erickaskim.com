module.exports = {
	reactStrictMode: true,
	// images: {
	// 	loader: 'cloudinary',
	// 	path: 'https://res.cloudinary.com/dxurxdtth',
	// },
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
