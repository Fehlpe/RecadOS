import styled from 'styled-components'

const TaskListStyle = styled.div`
	display: grid;
	grid-gap: 32px;
	padding: 0 32px;
	margin-top: 64px;
	width: calc(100% - 200px);

	.task-list-head {
		font-weight: 600;
		text-align: center;
	}

	.task-list-title {
		font-weight: 500;
	}

	.task-list-description {
		font-weight: 400;
	}

	.task-list-actions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 16px;
		align-items: center;
		justify-items: center;
	}

	.task-list-actions-header {
		display: flex;
		align-items: center;
		justify-items: center;
	}

	@media (max-width: 1075px) {
		.task-list-actions {
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr;
		}
	}
`

export default TaskListStyle
