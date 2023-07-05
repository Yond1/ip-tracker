import { FC } from 'react'
import './InfoCard.scss'

interface InfoCardProps {
    isp:any 
    timezone: any
    location: any
    ipAddress: any
}

const InfoCard:FC<InfoCardProps> = ({ipAddress,isp,location,timezone}) => {
  return (
    <section className='info-card'>
        <div className="info-card-content">
            <h4>IP ADDRESS</h4>
            <p>{ipAddress}</p>
            <span></span>
        </div>
        <div className="info-card-content">
            <h4>LOCATION</h4>
            <p>{location?.city}</p>
            <span></span>
        </div>
        <div className="info-card-content">
            <h4>TIMEZONE</h4>
            <p>{timezone}</p>
            <span></span>
        </div>
        <div className="info-card-content">
            <h4>ISP</h4>
            <p>{isp}</p>
        </div>
        {/* location */}
        {/* timezone */}
        {/* isp */}
    </section>
  )
}

export default InfoCard