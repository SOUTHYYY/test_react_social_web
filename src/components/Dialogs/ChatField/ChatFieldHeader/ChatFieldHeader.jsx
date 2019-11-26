import React from 'react'
import styles from './ChatFieldHeader.module.css'
import backArrow from '../../../../image/left-arrow-angle.svg'
import phoneOnline from '../../../../image/phoneOnline.svg'
import search from '../../../../image/search.svg'
// import moreOptions from '../../../../image/more.svg'

const ChatFieldHeader = ({fullMode, isFullMode, currentId}) => {

    const OPEN = 'Развернуть'
    const CLOSE = 'Свернуть'

    let handleSetFullMode = () => {
        fullMode(isFullMode === true ? false : true)
    }

    return (
        <div className={styles.messagesHeader}>
            {currentId === null ? null :
                <div className={styles.backtoMessages} onClick={handleSetFullMode}>
                    <img src={backArrow} alt="back" />
                    <p>{isFullMode ? OPEN : CLOSE}</p>
                </div>}
            {currentId === null ? null :
                <div className={styles.messagesHeaderName}>
                    <h4>Аня Ковалева</h4>
                    <div className={styles.isOnlline}>
                        <p>Online</p>
                        <img src={phoneOnline} alt="online" />
                    </div>
                </div>
            }
            {currentId === null ? null :
            <div className={styles.messagesHeaderPhoto}>
                <img src={search} alt="Поиск по диалогу" />
                <img src="https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1" alt="Ваш собеседник" />
            </div>
            }
        </div>
    )
}

export default ChatFieldHeader