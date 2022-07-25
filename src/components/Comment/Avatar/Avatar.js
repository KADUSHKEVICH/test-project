import * as React from "react"
import * as s from "./Avatar.module.css"
import userAvatar from "../../../assets/images/avatar.svg"

const Avatar = () => {
    return (
        <div className={s.wrapper}>
            <img src={userAvatar} alt="user avtar" className={s.avatar}/>
        </div>
    )
}

export default Avatar