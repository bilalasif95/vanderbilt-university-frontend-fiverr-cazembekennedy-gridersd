import type { NextPage, GetStaticProps } from "next";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import Recommendations from "../components/Home/Recommendations";
import ProfessionalHelp from "../components/Home/ProfessionalHelp";
import Research from "../components/Home/Research";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
    },
  };
}

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
