import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import TaskList from "./components/task-list/TaskList";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/");
  };

  function logoutUser() {
    sessionStorage.removeItem("logged");
    navigateLogin();
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1,  background: '#303030', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              RecadOS
            </Typography>
            <Button
              onClick={(e) => {
                e.preventDefault();
                logoutUser();
              }}
              color="inherit"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <TaskList />
      </Box>
    </ThemeProvider>
  );
}
