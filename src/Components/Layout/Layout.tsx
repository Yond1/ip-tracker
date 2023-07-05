import React, { FC } from 'react'
import './Layout.scss'

interface LayoutProps {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
        {children}
    </div>
  )
}

export default Layout