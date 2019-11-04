import taskTemplate from '../../templates/taskTemplates.hbs';
import * as constants from '../utils/constants.js';

export const createTaskCard = task => taskTemplate(task);

export const createTaskListMarkup = tasks => {
	constants.refs.taskListRef.innerHTML = '';
	const items = tasks.map(task => createTaskCard(task)).join('');
	constants.refs.taskListRef.insertAdjacentHTML('beforeend', items);
};

export const getStorageTasks = () => {
	const storageTasks = localStorage.getItem('tasks');
	const parseItems = JSON.parse(storageTasks);
	if (parseItems !== null) return parseItems;
	return;
};

if (localStorage.getItem('tasks')) {
	createTaskListMarkup(getStorageTasks());
}
