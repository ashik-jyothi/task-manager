import { HiPencil, HiTrash } from "react-icons/hi2";
import { formatDate, isPastDate } from "../../utils/dateUtils";
import { STATUS_COLORS } from "../../utils/constants";

const TaskCard = ({ task, onEdit, onDelete }) => {
	const { title, description, status, dueDate } = task;
	const isOverdue = dueDate && isPastDate(dueDate) && status !== "Completed";

	return (
		<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-200">
			<div className="flex justify-between items-start mb-3">
				<h3 className="text-lg font-semibold text-gray-900 flex-1 mr-2">
					{title}
				</h3>
				<div className="flex space-x-2">
					<button
						type="button"
						onClick={() => onEdit(task)}
						className="p-2 text-gray-500 hover:text-blue-600 rounded-md transition-colors"
						title="Edit"
					>
						<HiPencil className="w-4 h-4" />
					</button>
					<button
						type="button"
						onClick={() => onDelete(task)}
						className="p-2 text-gray-500 hover:text-red-600 rounded-md transition-colors"
						title="Delete"
					>
						<HiTrash className="w-4 h-4" />
					</button>
				</div>
			</div>

			<p className="text-gray-600 text-sm mb-4">{description}</p>

			<div className="flex justify-between items-center">
				<span
					className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[status]}`}
				>
					{status}
				</span>
				<div className="text-sm">
					{dueDate ? (
						<span
							className={
								isOverdue ? "text-red-600 font-medium" : "text-gray-500"
							}
						>
							{formatDate(dueDate)}
						</span>
					) : (
						<span className="text-gray-400">No due date</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
