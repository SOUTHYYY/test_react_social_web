import React from 'react'
import styles from './ProfileInfo.module.css'

const PageInfoBar = (props) => {
    return(
        <div className={styles.pageInfoBarItem}>
            <span>{props.count}</span>
            <span>{props.name}</span>
        </div>
    )
}



export default PageInfoBar 