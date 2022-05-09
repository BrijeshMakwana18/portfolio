import styled from "styled-components";
import { fonts } from "../../utils/theme";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30vh 0vh 30vh 0vh;
  /* background-color: green; */
`;

export const Heading = styled.text`
  font-size: 1.5vw;
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.primaryBlue};
`;

export const BigHeading = styled.text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3vw")};
  font-family: ${fonts.PoppinsBold};
  color: ${(props) => props.theme.primaryFontColor};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  margin-top: 1vh;
`;

export const Desc = styled.p`
  font-size: 1vw;
  font-family: ${fonts.Poppins};
  opacity: 0.8;
  width: 50%;
  margin-top: 1vh;
  span {
    color: ${(props) => props.theme.primaryPink};
    font-family: ${fonts.PoppinsMedium};
    cursor: pointer;
  }
`;

export const Resume = styled.button`
  cursor: pointer;
  height: 5vh;
  width: 10vw;
  border-radius: 0.3vw;
  border-width: 1px;
  background-color: transparent;
  border-color: ${(props) => props.theme.primaryBlue};
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1vw;
  font-family: ${fonts.PoppinsMedium};
  margin-top: 2vh;
  &:hover {
    background-color: ${(props) => props.theme.primaryBlue};
  }
`;
