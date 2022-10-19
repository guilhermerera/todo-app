import { Check, Trash } from "phosphor-react";
import { TaksListItemProps } from "../../../interfaces/Interfaces";
import styles from "./TaskListItem.module.css";

export default function TaskListItem(props: TaksListItemProps) {
	const { content, id, isComplete, onComplete, onDelete } = props;

	return (
		<article className={styles.container}>
			<div className={styles.checkBoxDiv} onClick={onComplete}>
				<span className={isComplete ? styles.checkBoxChecked : styles.checkBox}>
					{isComplete && <Check weight='bold' color='#F2F2F2' />}
				</span>
			</div>
			<p className={isComplete ? styles["content-done"] : styles.content}>
				{content}
			</p>
			<div className={styles.delButton} onClick={onDelete}>
				<Trash className={styles.trash} />
			</div>
		</article>
	);
}
