import React, { useEffect, useRef } from 'react'
import IpDataContext from '../contexts/IpDataContext'

const Map = () => {
  const { ipDataContent } = React.useContext(IpDataContext)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!ipDataContent) return

    // Si ya existe un mapa, lo destruyo
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    // Crear una nueva instancia del mapa
    const map = L.map('map', {
      center: [ipDataContent.location.lat, ipDataContent.location.lng],
      zoom: 13,
    })

    mapRef.current = map

    const markerIcon = L.icon({
      iconUrl: '/icon-location.svg',
      iconSize: [46, 56], // Tamaño del ícono
      iconAnchor: [23, 56], // Ancla del ícono
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([ipDataContent.location.lat, ipDataContent.location.lng], { icon: markerIcon }).addTo(map).openPopup()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [ipDataContent])

  return <div id="map" className="w-full h-[70dvh]"></div>
}

export default Map