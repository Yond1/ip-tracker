import React, { FC, useEffect } from 'react'
import './Header.scss'
import MyInput from '../UI/MyInput'
import InfoCard from '../InfoCard/InfoCard'

interface HeaderProps {
    onClick: Function
    data: any
    err: string
}

const Header:FC<HeaderProps> = ({onClick, data, err}) => {

    const loggg = (e:any) => {
        onClick(e)
    }

    useEffect(() => {
        console.log(data)
    }, [data])

  return (
    <header className='header'>
        <h1>IP Address Tracker</h1>
        <MyInput error={err} onClick={(e:any) => loggg(e)}/>
        <InfoCard isp={data?.isp} timezone={data?.location.timezone} location={data?.location} ipAddress={data?.ip}/>
    </header>
  )
}

export default Header