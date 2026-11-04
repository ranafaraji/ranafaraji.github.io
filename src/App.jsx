import useMotion from "./useMotion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App(){useMotion();return <><Navigation/><main className="wrap"><Hero/><TechStrip/><Projects/><Experience/><About/><Contact/><Footer/></main><div className="scroll-progress" aria-hidden="true" /></>;}