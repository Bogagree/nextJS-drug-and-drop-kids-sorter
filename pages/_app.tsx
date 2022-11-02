import 'normalize.css';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import BackgroundLayout from '../components/BackgroundLayout';

const App = ({Component, pageProps}: AppProps) => (
    <BackgroundLayout>
        <Component {...pageProps} />
    </BackgroundLayout>
)

export default App