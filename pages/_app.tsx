import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
	return <div>
		<Head>
			<title>Pongo 主页</title>
		</Head>
		<Component {...pageProps} />
	</div>
}

export default App
