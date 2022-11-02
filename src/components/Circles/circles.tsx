import styles from './circles.module.scss';

type BackgroundCirclesProps = {
    children: React.ReactNode
}

export const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ children }) => {
    return(
        <main>
            { children }
            <div className={styles.circle1}/>
            <div className={styles.circle2}/>
        </main>
    )
}