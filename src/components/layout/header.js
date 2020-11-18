/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import styled from "@emotion/styled";
import { GlobalStyle } from "../../style/globalStyle";
import { Link as BaseLink } from "../shared/link";

const OuterContainer = styled.div`
  background: ${(p) => p.theme.colors.primary};
`;

const Nav = styled(Container)`
  display: flex;
  padding: ${(p) => p.theme.space[4]};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
`;

const NavItem = styled(BaseLink)`
  & + & {
    margin-left: ${(p) => p.theme.space[3]};
  }
`;

export const Header = () => (
  <OuterContainer>
    <GlobalStyle />
    <Nav>
      <NavItem variant="nav" to="/">
        Home
      </NavItem>
      <NavItem variant="nav" to="/blog">
        Blog
      </NavItem>
    </Nav>
  </OuterContainer>
);
