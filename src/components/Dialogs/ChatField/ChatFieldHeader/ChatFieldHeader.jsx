import React, { useState } from 'react'
import styles from './ChatFieldHeader.module.css'
import backArrow from '../../../../image/left-arrow-angle.svg'
import phoneOnline from '../../../../image/phoneOnline.svg'
import search from '../../../../image/search.svg'
// import moreOptions from '../../../../image/more.svg'

const ChatFieldHeader = (props) => {

    let handleSetFullMode = () => {
        props.fullMode(props.isFullMode === true ? false : true)
    }

    return (
        <div className={styles.messagesHeader}>
            {props.currentId === null ? null :
                <div className={styles.backtoMessages} onClick={handleSetFullMode}>
                    <img src={backArrow} alt="" />
                    <p>{props.isFullMode ? 'Развернуть' : 'Свернуть'}</p>
                </div>}
            {props.currentId === null ? null :
                <div className={styles.messagesHeaderName}>
                    <h4>Аня Ковалева</h4>
                    <div className={styles.isOnlline}>
                        <p>Online</p>
                        <img src={phoneOnline} alt="" />
                    </div>
                </div>
            }
            {props.currentId === null ? null :
            <div className={styles.messagesHeaderPhoto}>
                <img src={search} alt="Поиск по диалогу" />
                {/* <img src={moreOptions} alt=" "/> */}
                <img src="https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1" alt="Ваш собеседник" />
            </div>
            }
        </div>
    )
}

export default ChatFieldHeader