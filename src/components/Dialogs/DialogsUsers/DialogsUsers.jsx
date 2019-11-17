import React from 'react'
import DialogUserItem from './DialogUserItem/DialogUserItem'
import styles from './DialogsUsers.module.css'
import findGray from '../../../image/find-gray.svg'

const DialogsUsers = (props) => {
    let dialogsElements =
        props.users.map(dialog => <DialogUserItem name={dialog.name}
            id={dialog.id}
            image={dialog.image}
            key={dialog.id}
            getCurrentUserId={props.getCurrentUserId} />);

    let UsersBar = (
        props.isFullMode === true ? null :
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


// export default ({ term='', users, update }) => {
//     const dataSearch = e => {
//         const value = e.target.value.toLowerCase();

//         const filter = props.users.filter(user => {
//             return user.name.toLowerCase().includes(value);
//         });

//         update({
//             data: filter,
//             active: 0,
//             term: value
//         });
//     }

//     return (
//         <section className={styles.dialogsWrapper}>
//             <form>
//                 <input type="text" onChange={dataSearch} value={term}/>
//                 <button></button>
//             </form>
//         </section>
//     )
// }

export default DialogsUsers