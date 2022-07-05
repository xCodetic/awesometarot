import Document, { Head, Html, Main, NextScript } from "next/document";

import { generateUrl } from 'utils'

const THEME_COLOR = process.env.NEXT_PUBLIC_THEME_COLOR;
const MANIEFST_PATH = process.env.NEXT_PUBLIC_MANIEFST_PATH;
const ICON_192_PATH = process.env.NEXT_PUBLIC_ICON_192_PATH;
const FAV_ICON_PATH = process.env.NEXT_PUBLIC_FAV_ICON_PATH;

class MyDocument extends Document {
	render() {
		const description = '',
			charset = 'utf-8',
			hrefManifest = MANIEFST_PATH,
			themeColor = THEME_COLOR,
			favIconPath = FAV_ICON_PATH,
			keywords = '',
			appleIconPath = ICON_192_PATH,
			appleIconSize = '192x192';

		return (
			<Html>
				<Head>
					<meta charSet={charset} key="charSet" />
					<meta name="description" key="description" content={description} />
					{themeColor && (
						<meta name="theme-color" key="theme-color" content={themeColor} />
					)}
					<meta name="keywords" key="keywords" content={keywords} />
					<meta httpEquiv="X-UA-Compatible" key="ua-compatible" content="ie=edge" />
					{hrefManifest && (
						<link rel="manifest" href={generateUrl(hrefManifest)} />
					)}
					{favIconPath && (
						<link rel="shortcut icon" href={generateUrl(favIconPath)} />
					)}

					{/* for safari */}
					<meta
						name="apple-mobile-web-app-capable"
						key="apple-mobile-web-app-capable"
						content="yes"
					/>
					<meta
						name="apple-mobile-web-app-status-bar-style"
						key="apple-mobile-web-app-status-bar-style"
						content="blue"
					/>
					<meta
						name="apple-mobile-web-app-title"
						key="apple-mobile-web-app-title"
						content="With Manifest"
					/>
					{appleIconPath && appleIconSize && (
						<link
							rel="apple-touch-icon"
							sizes={appleIconSize}
							href={generateUrl(appleIconPath)}
						/>
					)}

					{/* for IE */}
					{appleIconPath && (
						<meta
							name="msapplication-TitleImage"
							key="msapplication-TitleImage"
							content={generateUrl(appleIconPath)}
						/>
					)}
					{themeColor && (
						<meta
							name="msapplication-TitleColor"
							key="msapplication-TitleColor"
							content={themeColor}
						/>
					)}
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>
				<body>
					<div className="container" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;