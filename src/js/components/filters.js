import { todoList } from '../app.js';
import * as constants from '../utils/constants.js';
import { createTaskListMarkup } from './view.js';

export const handleFilter = () => {
	constants.refs.taskListRef.innerHTML = '';
	const searchItems = todoList.searchItems(constants.refs.searchInput.value);
	let statusItems = todoList.items;
	let priorityItems = todoList.items;

	if (constants.refs.statusFilter.firstElementChild.value !== 'all') {
		statusItems = todoList.filterItemsByStatus(constants.refs.statusFilter.firstElementChild.value);
	}
	if (constants.refs.priorityFilter.firstElementChild.value !== 'all') {
		priorityItems = todoList.filterItemsByPriority(
			constants.refs.priorityFilter.firstElementChild.value,
		);
	}
	const items = searchItems
		.filter(item => statusItems.includes(item))
		.filter(item => priorityItems.includes(item));
	createTaskListMarkup(items);
};
