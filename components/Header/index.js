import { Container, ThemeToggle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Header({ theme, toggleTheme }) {
  return (
    <Container>
      <ThemeToggle onClick={toggleTheme}>
        <FontAwesomeIcon
          className="toggle-image"
          icon={theme === "light" ? faMoon : faSun}
        />
      </ThemeToggle>
    </Container>
  );
}
