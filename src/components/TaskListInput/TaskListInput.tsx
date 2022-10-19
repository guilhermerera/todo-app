import { PlusCircle } from "phosphor-react";
import styles from "./TaskListInput.module.css";

export default function TaskListInput() {
	return (
		<section className={styles.container}>
			<input
				type='text'
				className={styles["task-input"]}
				placeholder='Adicione uma nova tarefa'
			/>
			<button className={styles.btn}>
				Criar <PlusCircle size={16} />
			</button>
		</section>
	);
}
