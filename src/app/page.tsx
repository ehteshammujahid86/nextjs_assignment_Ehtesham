import Footer from "./components/footer";
import Header from "./components/header";
import Image from "next/image";
import background from "@/app/background.jpg"


export default function Home() {
  return (
    <div className="main">
    <div className="image" >
      <Image src={background} alt="this is an image" className="background-img"/>
    </div>
    </div>
  );
}
