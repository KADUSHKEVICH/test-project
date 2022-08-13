import * as React from "react"
import { Layout, Container, Description, List, Comment } from "../components"
import * as s from "../styles/page-1.module.css"

const Page1 = () => {

    return (
        <Layout className={s.layout}>
            <Container className={s.container}>
                <Description className={s.descr_wrapp}/>
                <Comment className={s.comment_wrapp}/>
                <List className={s.list_wrapp}/>
            </Container>
        </Layout>
    )
    
}

export default Page1
  