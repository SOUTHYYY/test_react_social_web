import React, { useState, useEffect } from 'react'
import DialogUserItem from './DialogUserItem/DialogUserItem'
import styles from './DialogsUsers.module.css'
import findGray from '../../../image/find-gray.svg'

const DialogsUsers = ({ isFullMode, getCurrentUserId, onSearchChange, filteredDialogs, initialFilteredDialogs }) => {

    const [search, setSearch] = useState('')
    useEffect(() => {
        initialFilteredDialogs()
    }, [])


    const onTermChange = (e) => {
        setSearch(e.target.value)
        onSearchChange(e.target.value)
        console.log(e.target.value)
    }
    let dialogsElements =
        filteredDialogs.map(dialog => {
            let lastMessage = dialog.messages[dialog.messages.length - 1]
            console.log(lastMessage)
            return <DialogUserItem
                lastMessage={lastMessage}
                name={dialog.name}
                id={dialog.id}
                image={dialog.image}
                key={dialog.id}
                getCurrentUserId={getCurrentUserId} />
        });

    let UsersBar = (
        isFullMode === true ? null :
            <section className={styles.dialogsWrapper} >
                <div className={styles.dialogsWrapper_navigation}>
                    <img src={findGray} alt="найти" />
                    <input
                        type="text"
                        placeholder='Поиск'
                        onChange={onTermChange}
                        value={search} />
                </div>
                <div className={styles.dialogsWrapper_items}>
                    {dialogsElements}
                </div>
            </section>

    )

    return (
        UsersBar
    )
}

export default DialogsUsers