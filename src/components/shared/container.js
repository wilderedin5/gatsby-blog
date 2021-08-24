import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: ${p => p.theme.sizes.xl};
    margin: 0 auto;
    padding: ${p => `0 ${p.theme.space[4]}`};
`