import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  Container,
  ThemeToggle,
  ProfileBorder,
  ProfileContainer,
  Name,
  Profession,
  SocialContainer,
  ProfileSocialLink,
  InfoContainer,
  InfoItem,
  InfoNumber,
  InfoLabel,
  ButtonContainer,
  ButtonTitle,
  FilterToggle,
  FilterButton,
  ProjectContainer,
  ProjectCard,
  SkillContainer,
  SkillCard,
  EducationContainer,
  EducationCard,
} from "./styles";

const projects = [
  {
    title: `Victoria's Secret`,
    type: "Mobile",
    image: "/vs.png",
  },
  {
    title: `H&M`,
    type: "Mobile",
    image: "/hm.png",
  },
  {
    title: `Boots`,
    type: "Mobile",
    image: "/boots.png",
  },
];

const skills = [
  "Javascript",
  "React Native",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Express",
  "MongoDB",
  "Git",
];

export default function Hero({ theme, toggleTheme }) {
  const profile = useRef(null);
  const name = useRef(null);
  const profession = useRef(null);
  const social = useRef(null);
  const infoGroup = useRef(null);
  const button = useRef(null);
  const content = useRef(null);
  const filters = useRef(null);
  const sections = useRef(null);

  const [section, setSection] = useState("projects");
  useEffect(() => {
    if (typeof window !== "undefined") {
      async function animate() {
        const ScrollReveal = require("../../public/scrollreveal").default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "60px",
          duration: 2500,
          delay: 400,
        });
        sr.reveal(profile?.current);
        sr.reveal(name?.current, { delay: 100 });
        sr.reveal(profession?.current, { delay: 200 });
        sr.reveal(social?.current, { delay: 300 });
        sr.reveal(infoGroup?.current, { interval: 100, delay: 300 });
        sr.reveal(button?.current, { delay: 400 });
        sr.reveal(content, { delay: 400 });
        sr.reveal(filters?.current, { delay: 600 });
        sr.reveal(sections?.current, { delay: 800 });
      }
      animate();
    }
  }, []);
  return (
    <Container>
      <ThemeToggle onClick={toggleTheme}>
        <FontAwesomeIcon
          className="toggle-image"
          icon={theme === "light" ? faMoon : faSun}
        />
      </ThemeToggle>
      <ProfileBorder ref={profile}>
        <ProfileContainer>
          <Image src={"/profile.png"} height="100%" width={"100%"} />
        </ProfileContainer>
      </ProfileBorder>
      <Name ref={name}>Brijesh Makwana</Name>
      <Profession ref={profession}>Software Engineer</Profession>
      <SocialContainer ref={social}>
        <ProfileSocialLink
          target={"_blank"}
          href="https://in.linkedin.com/in/brijesh-makwana-a876b116b"
          mode={theme}
        >
          <FontAwesomeIcon className="link" icon={faLinkedin} />
        </ProfileSocialLink>
        <ProfileSocialLink
          target={"_blank"}
          href="https://github.com/BrijeshMakwana18"
          mode={theme}
        >
          <FontAwesomeIcon className="link" icon={faGithub} />
        </ProfileSocialLink>
      </SocialContainer>
      <InfoContainer ref={infoGroup}>
        <InfoItem>
          <InfoNumber>4</InfoNumber>
          <InfoLabel>Months of experience</InfoLabel>
        </InfoItem>
        <InfoItem>
          <InfoNumber>3</InfoNumber>
          <InfoLabel>Projects completed</InfoLabel>
        </InfoItem>
      </InfoContainer>
      <ButtonContainer ref={button} download="" href="/Brijesh_Resume.pdf">
        <ButtonTitle>Download CV</ButtonTitle>
      </ButtonContainer>
      <FilterToggle ref={filters}>
        <FilterButton
          onClick={() => setSection("projects")}
          active={section === "projects"}
        >
          Projects
        </FilterButton>
        <FilterButton
          onClick={() => setSection("skills")}
          active={section === "skills"}
        >
          Skills
        </FilterButton>
        {/* <FilterButton
          onClick={() => setSection("education")}
          active={section === "education"}
        >
          Education
        </FilterButton> */}
      </FilterToggle>
      {section === "projects" && (
        <ProjectContainer ref={sections}>
          {projects.map((item, index) => {
            return (
              <ProjectCard key={index}>
                <img src={item.image} />
              </ProjectCard>
            );
          })}
        </ProjectContainer>
      )}
      {section === "skills" && (
        <SkillContainer ref={sections}>
          {skills.map((item, index) => {
            return <SkillCard key={index}>{item}</SkillCard>;
          })}
        </SkillContainer>
      )}
      {section === "education" && (
        <EducationContainer ref={sections}>
          <EducationCard>Bachelor of Engineering</EducationCard>
        </EducationContainer>
      )}
    </Container>
  );
}
