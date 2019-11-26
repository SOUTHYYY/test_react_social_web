import React from 'react'
import DialogUserItem from './DialogUserItem/DialogUserItem'
import styles from './DialogsUsers.module.css'
import findGray from '../../../image/find-gray.svg'

const DialogsUsers = ({users, isFullMode, getCurrentUserId}) => {
    let dialogsElements =
            users.map(dialog => 
                <DialogUserItem 
                    name={dialog.name}
                    id={dialog.id}
                    image={dialog.image}
                    key={dialog.id}
                    getCurrentUserId={getCurrentUserId} />);

    let UsersBar = (
        isFullMode === true ? null :
        <section className={styles.dialogsWrapper} >
                    <form>
                        <img src={findGray} alt="найти" />
                        <input type="text" placeholder='Поиск' />
                    </form>
                    {dialogsElements}
        </section> 
        
    )

    return (
        UsersBar
    )
}

export default DialogsUsers