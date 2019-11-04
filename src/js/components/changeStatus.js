import { todoList } from '../app.js';

export const handleStatusDone = ({ target }) => {
	if (target.tagName !== 'I' || target.textContent !== 'done') return;
	const container = target.closest('.task-list__item');
	const itemId = container.dataset.id;
	if (container.className === 'task-list__item') {
		container.classList.add('task-list__item--done');
		todoList.changeStatus(itemId, 'done');
		localStorage.setItem('tasks', JSON.stringify(todoList.items));
		return;
	}
	container.classList.remove('task-list__item--done');
	todoList.changeStatus(itemId, 'open');
	localStorage.setItem('tasks', JSON.stringify(todoList.items));
};
