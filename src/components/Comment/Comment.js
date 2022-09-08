import * as React from "react"
import * as s from "./Comment.module.css"
import Avatar from "./Avatar/Avatar"

export const Comment = ({className}) => {
    return (
        <div className={`${s.comment} ${className}`}>
            <Avatar/>
            <div className={s.wrapper}>
                <p className={s.text}>In-house file infrastructure? No thank you.</p>
            </div>
        </div>
    )
}