import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Header(): JSX.Element {
	const navigate = useNavigate();
	const navigateLogin = () => {
		navigate('/')
	}

	function logoutUser(){	
		sessionStorage.removeItem("logged");
		navigateLogin()
	}

	return (
		<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            TaskList
          </Typography>
          <Button onClick={(e) => {
			e.preventDefault()
			logoutUser();
		  }} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
	)
}

export default Header
