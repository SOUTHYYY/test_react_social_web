import React from 'react'
import styles from './ProfileInfo.module.css'

const PageInfoBar = ({count, name}) => {
    return(
        <div className={styles.pageInfoBarItem}>
            <span>{count}</span>
            <span>{name}</span>
        </div>
    )
}



export default PageInfoBar 