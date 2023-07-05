import React, { FC, useState, useId,  useEffect } from 'react'
import './MyInput.scss'
import arrow from '../../assets/images/icon-arrow.svg'

interface InputProps {
    onClick: Function,
    error?: string
}

const MyInput:FC<InputProps> = ({onClick, error = ''}) => {

    const [value, setValue] = useState('')
    const [err, setErr] = useState('')
    const id = useId()

    useEffect(() => {
      setErr(prev => prev = error)
      setValue('')
      setTimeout(() => {
        setErr('')
      }, 2000)
    },[error])

    
    const handle = () => {
        onClick(value)
    }

  return (
    <div className="my-input">
        <label htmlFor={id}>{err}</label>
        <input 
        id={id}
        placeholder='Search for any IP address or domain'
        onChange={(e) => setValue(e.target.value)} type="text" value={value} />
        <button onClick={handle}>
          <img src={`${arrow}`} alt="" />
        </button>
    </div>
  )
}

export default MyInput