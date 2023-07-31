import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function Header(props) {
  const { sections, title } = props;

  return (
    <>
      <Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            noWrap
            key={section.title}
            variant="body1"
            sx={{
              p: 1,
              flexShrink: 0,
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
