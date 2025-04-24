import "./Employment.scss";
import React from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import images from "../../constants/images";

const jobs = [
  {
    title: "Intermediate Full Stack Developer",
    company: "Nurish'd",
    industry: "Health and Wellness Services",
    year: "2024 - Present",
    location: "Calgary, Alberta, Canada",
    imgUrl: images.nurishd,
    shadow: "0px 0px 25px rgba(40, 224, 158, 1)",
  },
  {
    title: "Jr. Full Stack Developer",
    company: "Nutrimeals",
    industry: "Food Services",
    year: "2022 - Present",
    location: "Calgary, Alberta, Canada",
    imgUrl: images.nutrimeals,
    shadow: "0px 0px 25px rgba(29, 192, 241, 1)",
  },

  {
    title: "Junior Project Manager",
    company: "Terralogix Solutions Inc.",
    industry: "Environmental Services",
    year: "2020 - 2022",
    location: "Edmonton, Alberta, Canada",
    imgUrl: images.terra,
    shadow: "0px 0px 25px rgba(24, 67, 105, 1)",
  },

  {
    title: "Junior Operator",
    company: "Cenovus Energy",
    industry: "Oil and Gas Operations",
    year: "2017 - 2019",
    location: "Central Alberta, Canada",
    imgUrl: images.cenovus,
    shadow: "0px 0px 25px rgba(183, 103, 27, 1)",
  },
];

const Employment = () => {
  return (
    <>
      <h2 className="head-text app__top">
        <span>Employment </span>History
      </h2>
      <div className="app__employment">
        {jobs.map((job, index) => (
          <motion.div
            className="app__employment-item"
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transitions={{ duration: 2, type: "tween" }}
            key={job + index}
            style={{ boxShadow: `${job.shadow}` }}
          >
            <p className="p-text">{job.year}</p>
            <img src={job.imgUrl} alt={job.title} />
            <div className="app__employment-desc">
              <h2 className="bold-text">{job.title}</h2>
              <p className="p-text">{job.company}</p>
              <p className="p-text">{job.industry}</p>
              <p className="p-text">{job.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(Employment, "employment");
