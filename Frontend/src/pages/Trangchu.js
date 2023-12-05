import {
    AppBar,
    Toolbar,
    InputBase,
    Avatar,
    Box,
    IconButton,
    Switch,
    Stack,
    MenuItem,
    Menu,
  } from "@mui/material";
  import React from "react";
  import { Divider } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import { Gear, File, Path } from "phosphor-react";
  import { faker } from "@faker-js/faker";
  import { useTheme } from "@mui/material/styles";
  import { useState } from "react";
  // import { Outlet, use } from "react-router-dom";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import { Outlet, Link, useNavigate } from "react-router-dom";
  import Logo from "../pages/img/Logo.png";
  import { Nav_Buttons } from "../data";
  import Chats from "../pages/dashboard/Chats.js";
  
  const DashboardLayout = () => {
    const theme = useTheme();
    console.log(theme);
    const [selected, setSelected] = useState(null); // Thêm dòng này để lưu vị trí được chọn
    const [anchorEl, setAnchorEl] = useState(null);
    const [showChat, setShowChat] = useState(false);
  
    const handleClick = (index) => {
      // Thêm hàm này để xử lý sự kiện click
  
      setSelected(index);
      // if (index === 0) {
      //   handleButtonClick("/chats");
      if (index === 0) {
        setShowChat(true);
      } else {
        setShowChat(false);
      }
      // }
    };
  
    const handleAvatarClick = (event) => {
      setAnchorEl(event.currentTarget); // Sửa từ currentTarrget sang currentTarget
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <>
        <AppBar
          position="static"
          sx={{
            background:
              "linear-gradient(to right top, #458df6, #3d87f8, #3581fa, #307bfb, #2c74fc, #1f7bfd, #1181fe, #0087ff, #0099ff, #00a8fd, #32b7f9, #5cc4f3)",
  
            // Các thuộc tính khác bạn muốn thêm
          }}
        >
          <Toolbar>
            <Stack
              sx={{
                backgroundColor:
                  "linear-gradient(to right top, #458df6, #3d87f8, #3581fa, #307bfb, #2c74fc, #1f7bfd, #1181fe, #0087ff, #0099ff, #00a8fd, #32b7f9, #5cc4f3)",
                height: 50,
                width: 50,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="Chat app logo" />
            </Stack>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <InputBase
                startAdornment={<SearchIcon sx={{ marginLeft: 10 }} />}
                placeholder="Tìm kiếm ..."
                sx={{
                  color: "inherit",
                  backgroundColor: "background.paper",
                  borderRadius: theme.shape.borderRadius,
                  padding: theme.spacing(0.5),
                  width: "50%",
                }}
                inputProps={{
                  sx: { color: "black" },
                }}
              />
            </Box>
            <Stack spacing={4}>
              <IconButton onClick={handleAvatarClick}>
                <Avatar src={faker.image.avatar()} />
              </IconButton>
              <Menu
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </AppBar>
  
      <Stack direction={"row"}>
  
      
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.background.paper,
            // boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            height: "100vh",
            width: "10vh",
          }}
        >
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ height: "100%" }}
            spacing={3}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                alignContent="center"
                spacing={3}
              >
                {Nav_Buttons.map((el) => (
                  <Box
                    key={el.index}
                    sx={{
                      backgroundColor:
                        el.index === selected
                          ? theme.palette.primary.main
                          : "white", // Sử dụng state ở đây
  
                      borderRadius: 1.5,
                      p: 1,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: el.index === selected ? "#fff" : "#000",
                      }} // Set màu sắc dựa trên trạng thái được chọn
                      onClick={() => handleClick(el.index)} // Xử lý sự kiện click
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Stack>
            <Stack spacing={10}>
              <Switch defaultChecked />
            </Stack>
          </Stack>
          
        </Box>
        {/* <Routes>
          <Route path="/chats" element={<Chats/>} />
        </Routes> */}
        {/* {showChat && <Chats/>} */}
        {showChat && <Chats />}
        </Stack>
      </>
    );
  };
  
  export default DashboardLayout;
  