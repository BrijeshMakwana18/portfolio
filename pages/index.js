import Head from "next/head";
import { Hero } from "../components";
import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Data from "../public/data.json";
const lightTheme = {
  body: "#FAFDFF",
  primary: "#E8E9EB",
  text: "#0E151C",
  blue: "#5DA2EF",
  light: "rgb(34, 39, 43)",
  link: "#22272b",
  linkHover: "#42a5f5",
  filterToggle: "#E9EBED",
  filterButton: "#FBFDFF",
};

const darkTheme = {
  body: "#0E151C",
  primary: "#181F25",
  text: "#FAFDFF",
  blue: "#5DA2EF",
  light: "rgb(241, 242, 244)",
  link: "#22272b",
  linkHover: "#42a5f5",
  filterToggle: "#181F25",
  filterButton: "#0E151C",
};

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url('/fonts/Poppins-Regular.woff') format('woff');
}
@font-face {
  font-family: "PoppinsBold";
  src: url('/fonts/Poppins-Medium.woff') format('woff');
}
@font-face {
  font-family: "PoppinsMedium";
  src: url('/fonts/Poppins-Bold.woff') format('woff');
}
  *{
    margin: 0px;
    padding:0px;
  }
  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "PoppinsBold", sans-serif;
    margin: 0px;
    padding:0px;
  }
`;

export default function Home(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <title>Brijesh Makwanna</title>
      </Head>
      <Hero
        projects={props.projects}
        skills={props.skills}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const { projects, skills } = Data;
  return {
    props: {
      projects,
      skills,
    },
  };
}
