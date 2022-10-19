import { ClipboardText } from "phosphor-react";
import styles from "./TaskListEmpty.module.css";

export default function TaskListEmpty() {
	return (
		<section className={styles.container}>
			<ClipboardText size={56} color={"#808080"} weight='thin' />
			<p className={styles.firstParagraph}>
				Você ainda não tem tarefas cadastradas
			</p>
			<p className={styles.secondParagraph}>
				Crie tarefas e organize seus itens a fazer
			</p>
		</section>
	);
}
