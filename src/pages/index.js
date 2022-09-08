import * as React from "react"
import { Link } from "gatsby"
import "reset-css"
import "../styles/index.css"

const IndexPage = () => {
    return (
        <div className="App">
            <Link
                to="/page-1"
                className="link"
            >
                Page-1
            </Link>
            <Link
                to="/page-2"
                className="link"
            >
                Page-2
            </Link>
        </div>
    )
}

export default IndexPage