module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
