/** @jsx jsx */
import { useState } from "react";
import { jsx, Container } from "theme-ui";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Posts } from "../components/blog/posts";
import { Layout } from "../components/layout";
import { CategoriesList } from "../components/blog/nav";

const StyledCategoriesList = styled(CategoriesList)`
  margin-bottom: 20px;
`;

const BlogPage = ({ data }) => {
  const [selectedCategory, setCategory] = useState("All");
  const categories = [
    ...data.categories.group.map(({ nodes }) => nodes[0].frontmatter.category),
    "All",
  ];

  const formatPosts = data.posts.nodes.filter(({ frontmatter: { category } }) =>
    selectedCategory === "All" ? true : category === selectedCategory
  );

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  return (
    <Layout metaTitle="Blog page">
      <Container>
        <StyledCategoriesList
          categories={categories}
          onChange={handleCategorySelect}
        />
        <Posts posts={formatPosts} />
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query AllPosts {
    posts: allMdx {
      nodes {
        ...PostFragment
        fields {
          slug
        }
      }
    }
    categories: allMdx {
      group(field: frontmatter___category, limit: 1) {
        nodes {
          frontmatter {
            category
          }
        }
      }
    }
  }
`;
