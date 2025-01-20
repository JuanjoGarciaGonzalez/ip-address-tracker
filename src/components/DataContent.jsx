import React, { useEffect } from 'react'
import IpDataContext from '../contexts/IpDataContext'

const DataContent = () => {
    const {ipDataContent} = React.useContext(IpDataContext)

    useEffect(() => {
        console.log(ipDataContent)
    }, [ipDataContent])

  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:justify-between rounded-xl w-[90dvw] max-w-[1000px] bg-white absolute top-[320px] md:top-[30dvh] left-1/2 -translate-y-1/2 -translate-x-1/2 py-3 px-3 shadow-lg z-[10000]'>
        <div className='content flex w-full flex-col items-center md:items-start justify-center gap-2 p-2 md:p-5'>
            <h3 className='rubik-bold text-xs md:text-sm text-[#969696] uppercase letter tracking-wider	'>IP Address</h3>
            {ipDataContent && <p className='rubik-medium text-[#2b2b2b] text-lg md:text-2xl'>{ipDataContent.ip}</p>}
        </div>

        <div className='content flex w-full flex-col items-center md:items-start justify-center gap-2 p-2 md:p-5'>
            <h3 className='rubik-bold text-xs md:text-sm text-[#969696] uppercase letter tracking-wider	'>Location</h3>
            {ipDataContent && <p className='rubik-medium text-[#2b2b2b] text-lg md:text-2xl'>{ipDataContent.location.city}, {ipDataContent.location.country} {ipDataContent.location.postalCode}</p>}
        </div>

        <div className='content flex w-full flex-col items-center md:items-start justify-center gap-2 p-2 md:p-5'>
            <h3 className='rubik-bold text-xs md:text-sm text-[#969696] uppercase letter tracking-wider	'>Timezone</h3>
            {ipDataContent && <p className='rubik-medium text-[#2b2b2b] text-lg md:text-2xl'>{ipDataContent.location.timezone}</p>}
        </div>

        <div className='content flex w-full flex-col items-center md:items-start justify-center gap-2 p-2 md:p-5'>
            <h3 className='rubik-bold text-xs md:text-sm text-[#969696] uppercase letter tracking-wider	'>ISP</h3>
            {ipDataContent && <p className='rubik-medium text-[#2b2b2b] text-lg md:text-2xl'>{ipDataContent.isp}</p>}
        </div>
    </div>
  )
}

export default DataContent