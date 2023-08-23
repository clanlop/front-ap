import'./styles/Nav.css'
import'./styles/Header.css'
import './styles/Carousel.css'
import './styles/Footer.css'
import './styles/CallToAction.css'
import './styles/Cards.css'
import './styles/Cities.css'
import './styles/Details.css'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router'
function App() {
  
  return (
    
   <RouterProvider router={router}/>
  )
}

export default App
