import Image from "next/image"

export default function ImageNav() {
  return (

<Image
    src='/net.webp'
    alt='logo pic'
    width={50}
    height={50}
    className="ml-4 sm:ml-16 mt-2 mb-2" 
/>


  )
}
