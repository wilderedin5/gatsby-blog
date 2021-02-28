/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { useCategories } from "./hooks/use-categories";

const Container = styled.div`
  display: flex;
`;

const CategoriesItem = styled.div`
  padding: ${(p) => `${p.theme.space[2]} ${p.theme.space[3]}`};
  background: ${(p) => p.theme.colors.primary};

  & + & {
    margin-left: ${(p) => p.theme.space[2]};
  }
`;

export const CategoriesList = ({ onChange, className }) => {
  const categories = useCategories();
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
