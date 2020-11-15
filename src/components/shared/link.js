/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { Link as ThemeLink } from "theme-ui";

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  variant = "fill",
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(to);
  return internal ? (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      sx={{
        variant: `links.${variant}`,
      }}
      {...rest}
    >
      {children}
    </GatsbyLink>
  ) : (
    <ThemeLink href={to} variant={variant} {...rest}>
      {children}
    </ThemeLink>
  );
};
