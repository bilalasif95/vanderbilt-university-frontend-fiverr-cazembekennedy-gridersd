import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import Recommendations from "../components/Home/Recommendations";
import ProfessionalHelp from "../components/Home/ProfessionalHelp";
import Research from "../components/Home/Research";

const Home: NextPage = () => {
  return <>
    <Hero />
    <Introduction />
    <Recommendations />
    <ProfessionalHelp />
    <Research />
  </>
};

export default Home;
