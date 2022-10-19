import { PlusCircle } from "phosphor-react";
import { useRef, useState } from "react";
import {
	TaskListBodyProps,
	TaskListProps
} from "../../../interfaces/Interfaces";
import styles from "./TaskListInput.module.css";
import generateID from "../../../services/generateID";

export default function TaskListInput({
	taskList,
	setTaskList
}: TaskListBodyProps) {
	const [newTaskText, setNewTaskText] = useState("");
	const newTaskInputRef = useRef<HTMLInputElement | null>(null);

	function handleNewTaskAdd() {
		if (newTaskText === "") {
			newTaskInputRef.current?.focus();
		} else {
			const NewTask: TaskListProps = {
				id: generateID(),
				content: newTaskText,
				isComplete: false
			};
			setTaskList([...taskList, NewTask]);
			setNewTaskText("");
		}
	}
	return (
		<section className={styles.container}>
			<input
				ref={newTaskInputRef}
				type='text'
				value={newTaskText}
				onChange={(e) => setNewTaskText(e.target.value)}
				className={styles["task-input"]}
				placeholder='Adicione uma nova tarefa'
			/>
			<button className={styles.btn} onClick={handleNewTaskAdd}>
				Criar <PlusCircle size={16} />
			</button>
		</section>
	);
}
