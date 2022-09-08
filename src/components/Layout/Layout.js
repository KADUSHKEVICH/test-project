import * as React from 'react'

export const Layout = ({className, children}) => {
    return (
        <main className={className}>{children}</main>
    )
}