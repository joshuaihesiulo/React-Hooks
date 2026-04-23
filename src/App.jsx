import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import TripList from './components/TripList'
import Destinations from './components/Destinations'

function App(){

  return (
 
    <body className=" px-10">
     <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/ min-h-screen">
      <NavBar />
      <HeroSection/>
      <TripList/>
      <Destinations/>
      
      </div> 
    </body>
   
    
  )
}

export default App