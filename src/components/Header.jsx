import React from 'react'
import Input from './Input'
import IpDataContext from '../contexts/IpDataContext'

const Header = () => {

    const {ipData, setIpData, ipDataContent, setIpDataContent} = React.useContext(IpDataContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIpData(e.target[0].value)

        //comprobar si el dato es una ip o un dominio
        if(!isValidIPv4(e.target[0].value) && !isValidDomain(e.target[0].value)) {
            alert('Please enter a valid IP address or domain')
            return
        }

        let fetchUrl = ''
        const apiKey = import.meta.env.VITE_IPIFY_API_KEY
        if(isValidIPv4(e.target[0].value)) {
            fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${e.target[0].value}`
        } else {
            fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${e.target[0].value}`
        }


        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                if(data.code == 400) {
                    alert('Please enter a valid IP address or domain')
                    return
                }
                console.log(data)
                setIpDataContent(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function isValidIPv4(ip) {
        const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipv4Regex.test(ip);
    }

    function isValidDomain(domain) {
        const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,}$/;
        return domainRegex.test(domain);
    }

  return (
    <header className='flex flex-col items-center justify-start h-[30dvh] header py-8 gap-8'>
        <h1 className='rubik-medium text-white text-3xl'>IP Address Tracker</h1>
        <form onSubmit={(e) => handleSubmit(e)} className='relative w-[90dvw] max-w-[500px]'>
            <Input />
            <button className='absolute right-0 top-0 bottom-0 mx-auto w-[60px] py-3 px-4 rounded-tr-xl rounded-br-xl  text-lg bg-[#2b2b2b] hover:cursor-pointer hover:bg-[#504c4c] transition-all duration-300 flex items-center justify-center'>
                <img src="/icon-arrow.svg" alt="submit icon" />
            </button>
        </form>
    </header>
  )
}

export default Header