import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3.5rem;
  align-items: center;
  flex-direction: column;
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

export const ProfileBorder = styled.div`
  border: 3.5px solid ${(props) => props.theme.blue};
  justify-self: center;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 0.75rem;
  @media screen and (min-width: 992px) {
    width: 135px;
    height: 135px;
    margin-bottom: 1rem;
  }
`;

export const ProfileContainer = styled.div`
  height: 95%;
  width: 95%;
  background: linear-gradient(
    180deg,
    hsla(207, 90%, 61%, 1) 0%,
    hsla(207, 90%, 61%, 0.2) 100%
  );
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Name = styled.h2`
  /* font-family: "PoppinsBold", sans-serif; */
`;

export const Profession = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.light};
  margin-bottom: 1rem;
`;

export const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const ProfileSocialLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  .link {
    transition: 0.5s;
    color: ${(props) => (props.mode === "light" ? "#0E151C" : "#FAFDFF")};
  }
  &:hover {
    .link {
      color: ${({ theme }) => theme.linkHover};
    }
  }
`;

export const InfoContainer = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const InfoItem = styled.div`
  margin-top: 3vh;
  display: flex;
  width: 5vw;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const InfoNumber = styled.h2`
  font-size: 1rem;
  margin-top: 0.5vh;
`;

export const InfoLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.5vh;
  color: ${({ theme }) => theme.light};
`;

export const ButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: hsl(207, 90%, 61%);
  color: #fff;
  padding: 1.15rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px hsla(207, 90%, 61%, 0.25);
  margin-top: 2vh;
  cursor: pointer;
`;

export const ButtonTitle = styled.h2`
  font-size: 1.25rem;
`;

export const FilterToggle = styled.div`
  margin: 2rem 0 2.5rem;
  background-color: ${({ theme }) => theme.filterToggle};
  padding: 0.375rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  align-items: center;
  text-align: center;
`;

export const FilterButton = styled.div`
  border: none;
  outline: none;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${(props) =>
    props.active ? props.theme.filterButton : "transparent"};
  &:hover {
    background-color: ${({ theme }) => theme.filterButton};
  }
`;

export const ProjectContainer = styled.div`
  padding: 0px 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  width: 90vw;
  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media screen and (min-width: 679px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ProjectCard = styled.div`
  height: 30vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  width: 60vw;
  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 679px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const SkillCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  background-color: ${({ theme }) => theme.filterToggle};
  color: ${({ theme }) => theme.light};
  padding: 1.15rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 2vh;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.blue};
    box-shadow: 0 8px 24px hsla(207, 90%, 61%, 0.25);
    color: #fff;
  }
`;

export const EducationContainer = styled.div`
  padding: 0px 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  width: 90vw;
  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media screen and (min-width: 679px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const EducationCard = styled.div`
  height: 24vh;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
