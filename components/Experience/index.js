import React, { useState } from "react";
import {
  Container,
  Company,
  Designation,
  Desc,
  ExpHeader,
  ExpItem,
} from "./styles";
const data = [
  {
    company: "Alshaya Group",
    info: "Alshaya Group is a dynamic family-owned enterprise, first established in Kuwait in 1890. With a consistent record of growth and innovation, Alshaya Group is one of the world’s leading brand franchise operators, offering an unparalleled choice of well-loved international brands to customers.",
    website: "https://www.alshaya.com",
    startDate: "Dec 2021",
    endDate: "Present",
    designation: "Software Engineer",
    desc: "Product development of mobile apps for H&M, Bath & Body works, American Eagle, Victoria's secret, Boots, Mothercare, Footlocker and Debenhams in the MENA region.",
  },
];
export default function Experience({ toggleTheme, theme }) {
  const [expId, setExpId] = useState("");
  const onMouseEnter = (id) => {
    setExpId(id);
  };
  const onMouseLeave = () => {
    setExpId("");
  };
  return (
    <Container>
      <ExpHeader>Experience</ExpHeader>
      {data.map((item, index) => {
        return (
          <ExpItem
            index={index}
            onClick={() => window.open(item.website, "_blank")}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
          >
            <Company hover={expId === index} className="company-name">
              {item.company}
            </Company>
            <Designation>{item.designation}</Designation>
            <Desc>{item.desc}</Desc>
          </ExpItem>
        );
      })}
    </Container>
  );
}
