import 'normalize.css';
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import BackgroundLayout from '../components/Layout/BackgroundLayout';
import {Navbar} from './navbar';

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Navbar/>
        <Component {...pageProps} />
    </>
)

export default App