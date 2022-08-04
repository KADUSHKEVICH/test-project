import * as React from "react"
import { Description, List, Comment } from "../components"
import { useIsMobile } from "../shared"
import * as s from '../styles/page-1.module.css'

const Page1 = () => {

    const isMobile = useIsMobile()

    return (
        <main className={s.page}>
            <div className={s.wrapper}>
                <div className={s.left_side}>
                    <Description/>
                    {!isMobile && <Comment/>}
                </div>
                <div className={s.right_side}>
                    <List className={s.list_wrapp}/>
                    {isMobile && <Comment/>}
                </div>
            </div>
        </main>
    )
    
}
export default Page1
  