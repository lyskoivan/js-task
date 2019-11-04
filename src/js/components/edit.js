import MicroModal from 'micromodal';
import { todoList } from '../app.js';
import * as constants from '../utils/constants.js';
import { getStorageTasks, createTaskListMarkup } from './view.js';

const updateTask = (title, description, priority, id) => {
	const updateItem = {
		title: title,
		description: description,
		priority: priority,
	};
	todoList.updateItemContent(id, updateItem);
	localStorage.setItem('tasks', JSON.stringify(todoList.items));
};

export const handleEditTask = event => {
	event.preventDefault();
	let title = constants.refs.formTitleEditor.value;
	let description = constants.refs.formDescriptionEditor.value;
	const priority = constants.refs.formSelectEditor.value;
	const id = constants.refs.formEditor.dataset.checkid;
	updateTask(title, description, priority, id);
	constants.refs.formTitleEditor.value = '';
	constants.refs.formDescriptionEditor.value = '';
	createTaskListMarkup(getStorageTasks());
	MicroModal.close('task-editor');
};

export const handleOpenEditorModal = ({ target }) => {
	if (target.tagName !== 'I' || target.textContent !== 'edit') return;
	const editId = target.closest('li').dataset.id;
	const container = target.closest('li');
	MicroModal.show('task-editor');
	constants.refs.formEditor.setAttribute('data-checkid', editId);
	constants.refs.formTitleEditor.value = container.querySelector('.list-item__title').textContent;
	constants.refs.formDescriptionEditor.value = container.querySelector(
		'.list-item__description',
	).textContent;
};
