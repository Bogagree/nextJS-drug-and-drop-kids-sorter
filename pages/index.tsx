import styles from '../styles/Home.module.css'
import {Button} from '../components/Button';

const Home = () => {
  return (
    <div className={styles.container}>
        <h1>New project</h1>
        <a href="settings">settings</a>
        <Button>Играть</Button>
    </div>
  )
}

export default Home