import React, {useState, useEffect} from 'react'
import styles from './ProfileInfo.module.css'


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () =>  {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const handleKeyPress = (target) => {
        if(target.charCode === 13){
            setEditMode(false)
            props.updateUserStatus(status)
        }
    }

    return (
        <>
            { !editMode &&
                <div className={styles.currentStatus}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
            }
            { editMode &&
                <div className={styles.onStatusChange}>
                    <input autoFocus={true} onBlur={deactivateEditMode} 
                    placeholder='Как у вас дела...'
                    type="text" value={status} 
                    onChange={onStatusChange}
                    onKeyPress={handleKeyPress}/>
                </div>
            }
        </>
    )
}

export default ProfileStatus