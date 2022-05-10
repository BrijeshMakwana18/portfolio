import { Container, Logo, ThemeToggle, NavItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
let menus = ["Experience", "Work", "Education", "Contact"];
export default function Header({ toggleTheme, theme }) {
  return (
    <Container>
      {/* <ThemeToggle onClick={toggleTheme}>
        <FontAwesomeIcon
          className="toggle-image"
          icon={theme === "light" ? faMoon : faSun}
        />
      </ThemeToggle> */}
      {menus.map((item, index) => {
        return (
          <NavItem key={item} index={index}>
            {item}
          </NavItem>
        );
      })}
    </Container>
  );
}
