export interface TaskListProps {
	id: string;
	content: string;
	isComplete: boolean;
}

export interface TaksListItemProps extends TaskListProps {
	onComplete: () => void;
	onDelete: () => void;
}

export interface TaskListBodyProps {
	taskList: TaskListProps[];
	setTaskList: React.Dispatch<React.SetStateAction<TaskListProps[]>>;
}
