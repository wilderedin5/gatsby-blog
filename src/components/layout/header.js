/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Container } from "theme-ui";
import { GlobalStyle } from "../../style/globalStyle";
import { Link as BaseLink } from "../shared/link";

const OuterContainer = styled.div`
  background: ${(p) => p.theme.colors.primary};
`;

const InnerContainer = styled(Container)`
  display: flex;
  padding: ${(p) => p.theme.space[4]};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
`;

const Link = styled(BaseLink)`
  & + & {
    margin-left: ${(p) => p.theme.space[3]};
  }
`;

export const Header = () => (
  <OuterContainer>
    <GlobalStyle />
    <InnerContainer>
      <Link variant="nav" to="/">
        Home
      </Link>
      <Link variant="nav" to="/blog">
        Blog
      </Link>
    </InnerContainer>
  </OuterContainer>
);
