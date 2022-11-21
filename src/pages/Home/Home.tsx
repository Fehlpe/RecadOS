import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import TaskList from './components/task-list/TaskList';

const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    RecadOS
                </Typography>
                </Toolbar>
            </AppBar>
            <TaskList />
        </Box>
    </ThemeProvider>
  );
}