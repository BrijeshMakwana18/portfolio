import styled from "styled-components";
import { fonts } from "../../utils/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  cursor: pointer;
`;

export const NavItem = styled.div`
  font-size: 1rem;
  margin-left: ${(props) => (props.index === 0 ? 0 : "3%")};
  cursor: pointer;
  font-family: ${fonts.PoppinsBold};
  &:hover {
    color: ${(props) => props.theme.primaryBlue};
  }
`;

export const ThemeToggle = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 0vw;
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
