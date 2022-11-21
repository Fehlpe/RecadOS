import TaskListCellsStyle from './TaskListCellsStyle'

interface TaskListCellsProps {
	children: string | JSX.Element | JSX.Element[]
}

function TaskListCells(props: TaskListCellsProps): JSX.Element {
	return <TaskListCellsStyle>{props.children}</TaskListCellsStyle>
}

export default TaskListCells
