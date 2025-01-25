import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home(){
  return(
    <>
    <div className="">
      <div className="sticky z-999 top-0 transition-all">
      <Header/>
      </div>
      <div className="lg:py-10 flex flex-col gap-10 lg:gap-5">
      <Hero/>
      <Footer/>
      </div>
      </div>
    </>
  )
}