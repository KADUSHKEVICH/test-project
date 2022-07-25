import * as React from 'react'
import * as s from './Description.module.css'

const Description = () => {
    return (
        <div className={s.description}>
            <h1 className={s.title}>Enable rock-solid uploads at lightspeed</h1>  
            <p className={s.text}>Our uploading API rests on a geographically distributed network of servers. Like a CDN in reverse, the API makes sure uploads always go the fastest route possible. The service won’t skip a beat with huge files, multiple uploads, or spotty connections.</p>
        </div>
    )
}

export default Description