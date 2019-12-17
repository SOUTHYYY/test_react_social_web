import React from 'react'
import styles from './Dialogs.module.css'
import ChatField from './ChatField/ChatField'
import DialogsUsers from './DialogsUsers/DialogsUsers'


const Dialogs = ({messagesPage, sendMessageActionCreator, isFullMode,
    fullMode, currentId, getCurrentUserId, onSearchChange, filteredDialogs, initialFilteredDialogs}) => {
    return (
        <section className={styles.dialogs}>
            <DialogsUsers
                filteredDialogs={filteredDialogs}
                onSearchChange={onSearchChange}
                users={messagesPage.dialogs}
                getCurrentUserId={getCurrentUserId}
                isFullMode={isFullMode}
                initialFilteredDialogs={initialFilteredDialogs}/>
            <ChatField  
                users={messagesPage.dialogs}
                sendMessage={sendMessageActionCreator}
                isFullMode={isFullMode}
                fullMode={fullMode}
                currentId={currentId} />
        </section>)
}

export default Dialogs