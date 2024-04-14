import React from "react";
import styles from "./Task.module.css"

const Task = (props) => {
    return (
    <div className={styles.task}>
        <p className={styles.text}>{props.text}</p>
        <button className={styles.button} >удалить</button>
    </div>
    );
}

export default Task