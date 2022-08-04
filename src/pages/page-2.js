import * as React from "react"
import { Description, List, Comment } from "../components"
import { useWindowWidth } from "../shared"
import * as s from '../styles/page-2.module.css'

const Page2 = () => {

    const size = useWindowWidth()

    let isMobile = false
    size.width <= 768 ? isMobile = true : isMobile = false

    return (
        <main className={s.page}>
            <div className={s.wrapper}>
                <div className={s.left_side}>
                    <Description className={s.descr_wrapp}/>
                    {!isMobile && <Comment className={s.comm_wrapp}/> }
                </div>
                <div className={s.right_side}>
                    <List className={s.list_wrapp}/>
                    {isMobile && <Comment className={s.comm_wrapp}/>}
                </div>
            </div>
        </main>
    )
}
  
export default Page2
  