import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectAll } from "../../store/modules/user/UserSlice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SxStyle = {
  backgroundColor: "#222",
};

export default function LogIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/home");
  };
  const navigateSign = () => {
    navigate("/sign");
  };

  const dispatch = useAppDispatch();
  const userList = useAppSelector(selectAll);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let returnCheck = checkUser();

    if (returnCheck) {
      navigateHome();
    }
  };

  function checkUser(): Boolean {
    const existingUser = userList.some(
      (users) => users.email === userEmail && users.password === userPassword
    );

    if (existingUser) {
      setLogged(userEmail);
      return true;
    } else {
      alert("E-mail ou senha inválidos");
      return false;
    }
  }

  function setLogged(userEmail: string): void {
    sessionStorage.setItem("logged", userEmail);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Typography sx={{ mb: 5 }} component="h1" variant="h2" align="center">
            Recad<span id="span-titulo">OS</span>
          </Typography>

          <Paper sx={{ p: 2 }} variant="outlined">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "30vw",
              }}
            >
              <Typography component="h1" variant="h5" align="center">
                Logar
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Senha"
                label="Senha"
                type="password"
                id="Senha"
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <Button
                color="error"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logar
              </Button>
              <Button color="error" variant="text" onClick={navigateSign}>
                Nâo possui uma conta? Criar agora
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
