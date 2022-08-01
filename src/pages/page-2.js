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
                <Description className={s.descr_wrapp}/>
                <Comment className={s.comm_wrapp}/>
                <List className={s.list_wrapp}/>
            </div>
        </main>
    )
}
  
export default Page2
  