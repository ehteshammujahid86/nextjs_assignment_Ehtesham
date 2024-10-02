import Image from "next/image"
import background from "@/app/background.jpg"
export default function Background(){
    return(
        <div>
         <Image src="/background.jpg" alt="" layout="fill" >
         </Image>
        </div>
    )
}