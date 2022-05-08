import styled from "styled-components";
import { fonts } from "../../utils/theme";
export const Container = styled.div`
  max-width: 50%;
  cursor: pointer;
`;

export const ExpHeader = styled.div`
  font-size: 1.2rem;
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.primaryPink};
  margin-top: 3vh;
`;

export const ExpItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

export const Company = styled.text`
  font-size: 1.3rem;
  font-family: ${fonts.PoppinsBold};
  color: ${(props) =>
    props.hover ? props.theme.primaryBlue : props.theme.primaryFontColor};
`;

export const Designation = styled.text`
  font-size: 1rem;
  margin-top: 2%;
  font-family: ${fonts.PoppinsMedium};
`;

export const Desc = styled.text`
  font-size: 1rem;
  margin-top: 2%;
  font-family: ${fonts.Poppins};
`;
