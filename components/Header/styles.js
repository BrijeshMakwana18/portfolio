import styled from "styled-components";

export const Container = styled.div`
  height: 28vh;
  width: 100vw;
  display: flex;
`;

export const ThemeToggle = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 24vw;
  top: 3.5vh;
  align-items: center;
  justify-content: center;
  .toggle-image {
    height: 25px;
    width: 25px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`;
