import * as React from "react"
import * as s from "./List.module.css"

const listItems = [
    {value: 'Accelerated uploading'},
    {value: 'Uploads from URL'},
    {value: 'Malware protection'},
    {value: 'Signed uploads'},
    {value: 'Platform-side MIME-type filtering'},
    {value: 'Up to 5 TB file size'}
]

export const List = ({className}) => {
    return (
        <ul className={`${s.list} ${className}`}>
            {listItems.map((item, index) => <li key={index} className={s.item}>{item.value}</li>)}
        </ul>
    )
}