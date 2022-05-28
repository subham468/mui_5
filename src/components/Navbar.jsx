import styled from "@emotion/styled";
// import logo from "../assets/images/shp.png";
// import logo from "../assets/images/shp colorful.png";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Stack,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  AlignVerticalCenter,
  Lock,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useState } from "react";

// TODO:

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "2px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
        >
          SHP
        </Typography>
        <AlignVerticalCenter
          sx={{ display: { xs: "block", sm: "none" }, fontSize: 40 }}
        />
        <Searchbar>
          <Stack direction="row" alignItems="center" justifyContent="start">
            <Search color="primary" />
            <InputBase
              placeholder="Search.."
              sx={{ width: "100%", color: "Crimson", margin: "0px 8px" }}
            />
          </Stack>
        </Searchbar>
        <Icons>
          <Badge badgeContent={2} color="error" max={10}>
            <Lock sx={{ cursor: "pointer" }} />
          </Badge>
          <Badge badgeContent={100} color="error" max={10}>
            <Notifications sx={{ cursor: "pointer" }} />
          </Badge>
          <Avatar
            src="https://avatars.githubusercontent.com/u/37806144"
            sx={{ width: 50, height: 50, cursor: "pointer" }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/37806144"
            sx={{ width: 50, height: 50, cursor: "pointer" }}
          />
          <Typography variant="span">Paul</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
