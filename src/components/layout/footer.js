/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "../shared/link";

const OuterContainer = styled.div`
  background: ${(p) => p.theme.colors.secondary};
`;

const InnerContainer = styled(Container)`
  padding: ${(p) => p.theme.space[4]};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
`;

export const Footer = () => (
  <OuterContainer>
    <InnerContainer>
      <Link variant="fill" href="https://github.com/wilderedin5">
        Open developer github page
      </Link>
    </InnerContainer>
  </OuterContainer>
);
