import HomeContainerStyle from './HomeContainerStyle'

interface HomeContainerProps {
	children: JSX.Element | JSX.Element[]
}

function HomeContainer(props: HomeContainerProps): JSX.Element {
	return <HomeContainerStyle>{props.children}</HomeContainerStyle>
}

export default HomeContainer
