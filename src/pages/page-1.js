import * as React from "react"
import { Layout, Container, Description, List, Comment } from "../components"
import { useIsMobile } from "../shared"
import * as s from "../styles/page-1.module.css"

const Page1 = () => {

    const isMobile = useIsMobile()

    return (
        <Layout className={s.layout}>
            <Container className={s.container}>
                <div className={s.left_side}>
                    <Description/>
                    {!isMobile && <Comment/>}
                </div>
                <div className={s.right_side}>
                    <List className={s.list_wrapp}/>
                    {isMobile && <Comment/>}
                </div>
            </Container>
        </Layout>
    )
    
}

export default Page1
  