import {
	TaskListBodyProps,
	TaskListProps
} from "../../../interfaces/Interfaces";
import TaskListEmpty from "../TaskListEmpty";
import TaskListItem from "../TaskListItem";
import styles from "./TaskListBody.module.css";

export default function TaskListBody({
	taskList,
	setTaskList
}: TaskListBodyProps) {
	const completedTasks = taskList.filter((task) => task.isComplete === true);

	function completeTask(id: string) {
		const updatedTaskList: TaskListProps[] = [];

		for (let index = 0; index < taskList.length; index++) {
			const task = taskList[index];
			if (task.id === id) {
				task.isComplete = !task.isComplete;
				updatedTaskList.push(task);
			} else {
				updatedTaskList.push(task);
			}
		}

		setTaskList(updatedTaskList);
	}

	function deleteTask(id: string) {
		const updatedTaskList = taskList.filter((task) => task.id !== id);
		setTaskList(updatedTaskList);
	}

	return (
		<>
			<header className={styles.container}>
				<div className={styles.displayCount}>
					<span
						className={styles.displayCountText}
						style={{ color: "#4EA8DE" }}>
						Tarefas criadas
					</span>
					<span className={styles.displayCountValue}>{taskList.length}</span>
				</div>
				<div className={styles.displayCount}>
					<span
						className={styles.displayCountText}
						style={{ color: "#8284FA" }}>
						Concluídas
					</span>
					<span className={styles.displayCountValue}>
						{taskList.length === 0
							? taskList.length
							: `${completedTasks.length} de ${taskList.length}`}
					</span>
				</div>
			</header>

			{taskList.length === 0 ? (
				<TaskListEmpty />
			) : (
				<section className={styles.cardContainer}>
					{taskList.map((task) => (
						<TaskListItem
							key={task.id}
							{...task}
							onComplete={() => {
								completeTask(task.id);
							}}
							onDelete={() => {
								deleteTask(task.id);
							}}
						/>
					))}
				</section>
			)}
		</>
	);
}
