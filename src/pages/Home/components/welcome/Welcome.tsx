import { Typography } from '@mui/material'

interface UserNameProp{
	userName: string;
}

function Welcome(prop: UserNameProp): JSX.Element {
	return (
		<Typography variant='h4' sx={{ mt: '128px' }}>
			Bem-vindo, <span>{prop.userName}</span> !
		</Typography>
	)
}

export default Welcome
