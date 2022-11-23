import * as React from "react";
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
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addUser, selectAll } from "../../store/modules/user/UserSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/");
  };

  const dispatch = useAppDispatch();
  const userList = useAppSelector(selectAll);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const returnCheckInputs = checkInputs();

    if (returnCheckInputs) {
      dispatch(
        addUser({
          uid: uuidv4(),
          username: userName,
          email: userEmail,
          password: userPassword,
          notes: [],
        })
      );
      navigateLogin();
    }
  };

  function checkInputs(): Boolean {
    if (
      userName !== "" &&
      userEmail !== "" &&
      userPassword !== "" &&
      userPassword2 !== ""
    ) {
      const returnCheckEmail = checkEmail();
      const returnCheckPasswords = checkPasswords();
      if (returnCheckPasswords && returnCheckEmail) {
        return true;
      }
      return false;
    }
    alert("Todos os campos devem ser preenchidos");
    return false;
  }

  function checkEmail() {
    let existingUser = userList.some((users) => users.email === userEmail);

    if (existingUser) {
      alert("Usuário já cadastrado");
      return false;
    }
    return true;
  }

  function checkPasswords(): Boolean {
    if (userPassword !== userPassword2) {
      alert("As senhas devem coincidir!");
      return false;
    } else {
      if(userPassword.length < 4) {
        alert("A senha deve possuir no mínimo 5 digitos!")
      } else {
        return true;
      }
      return false
    }
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
                Cadastrar
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Usuário"
                label="Nome do usuário"
                name="Usuário"
                autoComplete="Usuário"
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="Senha2"
                label="Digite a senha novamente"
                type="password"
                id="Senha2"
                onChange={(e) => setUserPassword2(e.target.value)}
              />
              <Button
                color="error"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              <Button color="error" variant="text" onClick={navigateLogin}>
                Já possui uma conta? Entre agora
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
