import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivImg = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    height: 500px;
    transition: transform 0.3s;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

export default function ErroPagina() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/">Home</Link>
      <Typography variant="h3" align="center" p={1}>
        Ops! Não encontramos essa página.
      </Typography>

      <Typography variant="body2" color="text.secondary" align="center">
        Acho que você escolheu a página errada, porque eu não consegui achar a
        que você está procurando.
      </Typography>
      <DivImg>
        {" "}
        <img src="https://assets.stickpng.com/images/5a0c69ce82e02d31ecb8d013.png"
         alt="" />
      </DivImg>
    </Box>
  );
}