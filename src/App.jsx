import './App.css'
import Header from './components/Header'
import DataContent from './components/DataContent'
import Map from './components/Map'
import { IpDataProvider } from './contexts/IpDataContext'

function App() {

  return (
    <main className='min-h-screen'>
      <IpDataProvider>
        <Header />
        <DataContent />
        <Map />
      </IpDataProvider>
    </main>
  )
}

export default App
