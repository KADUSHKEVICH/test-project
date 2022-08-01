import * as React from "react"
// components
import { Description, List, Comment } from "../components"
// main styles
import * as s from '../styles/page-1.module.css'

const Page1 = () => {
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

export default Page1
