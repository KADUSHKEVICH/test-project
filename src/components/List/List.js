import * as React from "react"
import * as s from "./List.module.css"

const listItems = [
    {key: 1, value: 'Accelerated uploading'},
    {key: 2, value: 'Uploads from URL'},
    {key: 3, value: 'Malware protection'},
    {key: 4, value: 'Signed uploads'},
    {key: 5, value: 'Platform-side MIME-type filtering'},
    {key: 6, value: 'Up to 5 TB file size'}
]

export const List = ({className}) => {
    return (
        <ul className={`${s.list} ${className}`}>
            {listItems.map(item => <li key={item.key} className={s.item}>{item.value}</li>)}
        </ul>
    )
}