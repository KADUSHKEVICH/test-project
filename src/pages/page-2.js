import * as React from "react"
// components
import Description from "../components/Description/Description"
import List from "../components/List/List" 
import Comment from "../components/Comment/Comment"
// main styles
import * as s from '../styles/page-2.module.css'

const Page2 = () => {
    return (
        <main className={s.page}>
            <div className={s.wrapper}>
                <div className={s.descr_wrapp}>
                    <Description/>
                </div>
                <div className={s.comm_wrapp}>
                    <Comment/>
                </div>
                <div className={s.list_wrapp}>
                    <List/>
                </div>
            </div>
        </main>
    )
}
  
export default Page2
  