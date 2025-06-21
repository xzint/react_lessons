import styles from './card.module.css';

export default function Card({ domain, thumb, breadcrumbs, url, title, description, className }) {
    return (
        <div className={`${styles.card} ${styles[className]}`}>
            <div className={styles.cardHeader}>
                <div className={styles.imageWrapper}>
                    <img src={thumb} alt={`${domain} logo`} className={styles.cardImage} />
                </div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    {breadcrumbs}
                </a>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}
