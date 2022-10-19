import { useState } from "react";
import { TaskListProps } from "../../../interfaces/Interfaces";
import TaskListBody from "../TaskListBody";
import TaskListInput from "../TaskListInput";
import styles from "./TaskListWrapper.module.css";

export default function TaskListWrapper() {
	const [taskList, setTaskList] = useState<TaskListProps[]>([]);

	return (
		<main className={styles.container}>
			<div className={styles.wrapper}>
				<TaskListInput taskList={taskList} setTaskList={setTaskList} />
				<TaskListBody taskList={taskList} setTaskList={setTaskList} />
			</div>
		</main>
	);
}
