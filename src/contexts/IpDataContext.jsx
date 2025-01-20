import { createContext, useState, useEffect } from "react"
const IpDataContext = createContext()

const IpDataProvider = ({children}) => {

    const [ipData, setIpData] = useState()
    const [ipDataContent, setIpDataContent] = useState()

    useEffect(() => {
        let initialIp = null
        const apiKey = import.meta.env.VITE_IPIFY_API_KEY
        //conseguir la ip inicial de la petición y pasarla a la api de geo.ipify para los datos iniciales
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIpData(data.ip)
                initialIp = data.ip

                fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${initialIp}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIpDataContent(data)
                })
                .catch(err => {
                    console.log(err)
                })
            })
            .catch(err => {
                console.log(err)
            }) 
    }, [])
    
    return (
        <IpDataContext.Provider value={{ipData, setIpData, ipDataContent, setIpDataContent}}>
                {children}
        </IpDataContext.Provider>
    )
}
export default IpDataContext
export {IpDataProvider}