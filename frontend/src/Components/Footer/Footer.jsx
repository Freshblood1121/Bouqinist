import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="#fff" underline="none" href="/">
        Bouqinist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#0c131d", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" color="white" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          color="white"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
