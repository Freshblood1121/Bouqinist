import React from "react";
import {
  Avatar,
  Divider,
  Fab,
  ListItemIcon,
  Menu,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { palette } from "../../../Utils/Constants";
import Account from "../Icons/Account";
import Logout from "../Icons/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/account/actions";

const theme = createTheme({
  components: {
    MuiFab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontFamily: "Golos UI, Roboto, sans-serif",
          fontWeight: "bold",
          minHeight: "unset",
          height: "30px",
          width: "30px",
          [`&:active`]: {
            boxShadow: "none",
            color: `${palette.lighter}`,
            background: `${palette.basic}`,
          },
        },
      },
    },
  },
});

const LoggedInButton = ({ name }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    switch (item) {
      case "account":
        navigate("/account");
        return;
      case "logout":
        dispatch(logout());
        return;
      default:
        return;
    }
  };

  const slicedName = name[0];
  return (
    <ThemeProvider theme={theme}>
      <Fab
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {slicedName}
      </Fab>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose;
            handleItemClick("account");
          }}
        >
          <ListItemIcon>
            <Account />
          </ListItemIcon>
          Профиль
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose("logout");
            handleItemClick("logout");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
};

export default LoggedInButton;
