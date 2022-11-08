import 'normalize.css';
import '../src/styles/globals.scss'
import type {AppProps} from 'next/app'
import Navbar from './navbar';

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Navbar/>
        <Component {...pageProps} />
    </>
)

export default App