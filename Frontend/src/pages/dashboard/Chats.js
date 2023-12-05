import {
    Badge,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    InputBase,
    Stack,
    Typography,
    styled,
  } from "@mui/material";
  import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
  import React from "react";
  import { faker } from "@faker-js/faker";
  import { ChatList } from "../../data";
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  
  const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: "#fff",
          height: "60",
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
  
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          <Stack spacing={2} alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: "transparent",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  
  const Chats = () => {
    return (
      <Box
        sx={{
          position: "relative",
          // height: "100vh",
          width: 320,
          backgroundColor: "#F8FaFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack p={2} spacing={2} sx={{}}>
          <Stack
            direction="row"
            alignItems={"center"}
            jusstifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%  " }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#708CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button> Archived </Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction="column" sx={{flexGrow: 1, overflow: "scroll", height:"100%" }}>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
        </Stack>
      </Box>
    );
  };
  export default Chats;
  