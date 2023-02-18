import React from "react";
import ExperienceJob from "./ExperieceJob/ExperienceJob";
import Fresher from "./Fresher/Fresher";
import Toogle from "./Toogle/Toogle";

const Home = () => {
  return (
    <section className="min-h-screen text-black px-4">
      <Toogle />
      <div className="my-5 ">
        <h1 className="font-serif md:text-4xl text-xl font-bold text-center">
          Fresher Jobs
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <Fresher title={"Web Development"}></Fresher>

          <Fresher title={"Education & Training"}></Fresher>
          <Fresher title={"PHP Programming"}></Fresher>
          <Fresher title={"Web Designer"}></Fresher>
          <Fresher title={"Graphic Designer"}></Fresher>
          <Fresher title={"Writing"}></Fresher>
        </div>
      </div>
      <div className="my-5 ">
        <h1 className="font-serif md:text-4xl text-xl font-bold text-center">
          Experienced Jobs
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <ExperienceJob title={"Mobile Application"}></ExperienceJob>

          <ExperienceJob title={"Content Writer"}></ExperienceJob>
          <ExperienceJob title={"Design & Creative"}></ExperienceJob>
          <ExperienceJob title={"Information Technology"}></ExperienceJob>
          <ExperienceJob title={"Software Developer"}></ExperienceJob>
          <ExperienceJob title={"Health & Hospital"}></ExperienceJob>
        </div>
      </div>
    </section>
  );
};

export default Home;
