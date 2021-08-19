import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<title>☠️ErickAskim.com☠️</title>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
