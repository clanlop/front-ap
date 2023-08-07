import Header from "../components/Header"
import Footer from "../components/Footer"


const Main = ({children}) => {
  return (
   <>
   <Header />
   {children}
   <Footer />
   </>
  )
}

export default Main