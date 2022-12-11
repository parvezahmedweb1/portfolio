import React from "react";
import { skills } from "../../Content";
const Skills = () => {
  const { title, subtitle, skillsContent } = skills;
  return (
    <section className="bg-bg_light_primary">
      <div className="container px-5 py-20">
        <h2 className="md:text-3xl text-2xl">{title}</h2>
        <h4 className="text-gray">{subtitle}</h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 mt-4">
          {skillsContent.map((skill, ind) => {
            return (
              <div key={ind}>
                <div className="flex justify-center items-center group rounded-3xl">
                  <img
                    className="group-hover:scale-125 duration-200:"
                    src={skill.logo}
                    alt="..."
                    srcSet=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
