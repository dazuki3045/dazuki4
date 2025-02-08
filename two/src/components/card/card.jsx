import styles from "./card.module.css"

export const Card = ({title, dsc, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="image"/>
            <h2>{title}</h2>
            <p>{dsc}</p>
        </div>
    )
}