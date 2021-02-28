/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const CategoriesItem = styled.div`
  padding: 10px 20px;
  background: ${(p) => p.theme.colors.primary};

  & + & {
    margin-left: 10px;
  }
`;

export const CategoriesList = ({ categories, onChange, className }) => {
  return (
    <Container className={className}>
      {categories.map((category, index) => (
        <CategoriesItem onClick={() => onChange(category)} key={index}>
          {category}
        </CategoriesItem>
      ))}
    </Container>
  );
};
