import * as React from "react"
import { Layout, Container, Description, List, Comment } from "../components"
import * as s from "../styles/page-2.module.css"

const Page2 = () => {
    return (
        <Layout className={s.layout}>
            <Container className={s.container}>
                <div className={s.left_side}>
                    <Description className={s.descr_wrapp}/>
                    <Comment className={s.comm_wrapp}/>
                </div>
                <div className={s.right_side}>
                    <List className={s.list_wrapp}/>
                    <Comment className={s.comm_wrapp_mobile}/>
                </div>
            </Container>
        </Layout>
    )
}
  
export default Page2
  