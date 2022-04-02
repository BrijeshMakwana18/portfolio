import Head from "next/head";
import { Header } from "../components";
import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const lightTheme = {
  body: "#FAFDFF",
  primary: "#E8E9EB",
  text: "#0E151C",
  blue: "#5DA2EF",
};

const darkTheme = {
  body: "#0E151C",
  primary: "#181F25",
  text: "#FAFDFF",
  blue: "#5DA2EF",
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
    font-family: "Poppins","PoppinsMedium","PoppinsBold", sans-serif;
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
      <Header theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
