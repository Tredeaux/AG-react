import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const UpperSidebarData = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <RiIcons.RiDashboardLine />,
        cName: 'nav-text'
    },
    {
        title: 'User Management',
        path: '/Management',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    }
]
