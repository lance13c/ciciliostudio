import { ThemeProvider } from 'styled-components';
import './global.css';

const theme = {
	colors: {
		primary: '#0070f3',
		secondary: 'black',
		background: '#d6d849',
		accent: '#A10512',
		text: 'white',
		overlay: '#00000030'
	}
};

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
