import React, { useState, useEffect } from "react";
import { AppWrapper } from "../../wrapper";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import "./Certifications.scss";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"] | order(_createdAt desc)';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text app__top">
        My <span>Certifications</span>
      </h2>
      <div className="app__certification">
        {certifications.map((certification, index) => (
          <motion.div
            className="app__certification-item"
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transitions={{ duration: 2, type: "tween" }}
            key={certification + index}
            style={{ boxShadow: `${certification.shadow}` }}
          >
            <img src={urlFor(certification.imgUrl)} alt={certification.title} />
            <div className="app__certification-desc">
              <a
                className="app_certification-link"
                href={certification.courseLink}
                target="_blank"
                rel="noreferrer"
              >
                {certification.title}
              </a>
              <p className="p-text">By {certification.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(Certifications, "certifications");
