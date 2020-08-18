/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Container } from "theme-ui"
import { Link } from "gatsby"

const OuterContainer = styled.div`
  background: ${p => p.theme.colors.secondary};
`

const InnerContainer = styled(Container)`
  padding: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`

const Footer = () => (
  <OuterContainer>
    <InnerContainer>
      <Link href="https://github.com/wilderedin5">
        Open developer github page
      </Link>
    </InnerContainer>
  </OuterContainer>
)

export default Footer
