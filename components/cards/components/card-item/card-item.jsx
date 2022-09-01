import styles from './card-item.module.scss';

const CardItem = () => {
    return <div className={styles.container}>
        <div className={styles.rest_image} style={{backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}></div>
        <div className={styles.content}>
            <div className={styles.title}>works</div>
            <div className={styles.subtitle}>works</div>
        </div>
        <div className={styles.footer}>
            <div>time</div>
            <div>*</div>
            <div>price</div>
        </div>
    </div>
}

export default CardItem;