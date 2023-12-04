import ImageNav from "./ImageNav"
import Navlink from "./Navlink"
export default function Navbar() {
    return (
      <div className="sm:flex items-center justify-between h-30 border border-s-violet-50 shadow-md">
      <ImageNav className="sm:mr-4" /> 
      <Navlink className="sm:ml-4" /> 
  </div>
  
    )
  }