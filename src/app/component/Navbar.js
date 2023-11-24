import ImageNav from "./ImageNav"
import Navlink from "./Navlink"
export default function Navbar() {
    return (
      <div className="h-30 border border-s-violet-50 flex justify-between shadow-md">
     <ImageNav/>
     <Navlink/>
      </div>
    )
  }