/** @jsx jsx */
import { jsx, Link as ThemeLink } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  variant,
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
