import 'normalize.css';
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import BackgroundLayout from '../components/BackgroundLayout';
import {Navbar} from './Navbar';

const App = ({Component, pageProps}: AppProps) => (
    <BackgroundLayout>
        <Navbar/>
        <Component {...pageProps} />
    </BackgroundLayout>
)

export default App