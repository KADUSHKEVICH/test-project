import * as React from "react"
import { Description, List, Comment } from "../components"
import { useWindowWidth } from "../shared"
import * as s from '../styles/page-1.module.css'

const Page1 = () => {
    // присваиваю результат ф-ии, которая возвращает размер ширины, переменной size
    const size = useWindowWidth()
    // переменная для хранения значения мобильного/десктопного режима
    let isMobile = false
    // условие для определения мобильного/десктопного режима (отрисовка коментария)
    size.width <= 768 ? isMobile = true : isMobile = false

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
  