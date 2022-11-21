import TaskListRowsStyle from './TaskListRowsStyle'

interface TaskListRowsProps {
	children: JSX.Element | JSX.Element[]
	id?:string
}

function TaskListRows(props: TaskListRowsProps): JSX.Element {
	return <TaskListRowsStyle id={props.id} >{props.children}</TaskListRowsStyle>
}

export default TaskListRows
