import styles from "./card.module.css"

export const Card = ({title, date, complete }) => {
    return (
        <div className={`${styles.card} ${complete && styles.grey}`}>
            <h2>{title}</h2>
            <p>{date}</p>
            {complete && <button className={styles.btn}>Done</button>}
        </div>
    )
}
