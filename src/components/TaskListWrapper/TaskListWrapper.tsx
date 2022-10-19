import { useState } from "react";
import { TaskListProps } from "../../../interfaces/Interfaces";
import TaskListInput from "../TaskListInput";
import styles from "./TaskListWrapper.module.css";

export default function TaskListWrapper() {
	const [taskList, setTaskList] = useState<TaskListProps[]>([]);

	return (
		<main className={styles.container}>
			<div className={styles.wrapper}>
				<TaskListInput />
				<section>list</section>
			</div>
		</main>
	);
}
