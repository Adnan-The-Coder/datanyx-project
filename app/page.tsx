import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProblemShowcaseDetail from "@/components/ProblemShowcaseDetail";
import WayToSolve from "@/components/wayToSolve";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProblemShowcaseDetail/>
    <WayToSolve/>
    <Footer/>
    </>
  );
}
