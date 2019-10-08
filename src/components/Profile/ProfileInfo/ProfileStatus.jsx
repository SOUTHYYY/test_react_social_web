import React from 'react'
import styles from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode(){
        debugger
        this.setState ({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={styles.currentStatus}>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.onStatusChange}>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus