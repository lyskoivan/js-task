import MicroModal from 'micromodal';
import TodoList from './components/todo-class.js';
import * as constants from './utils/constants.js';
import { createTaskCard, getStorageTasks } from './components/view.js';
import { handleFilter } from './components/filters.js';
import { handleStatusDone } from './components/changeStatus.js';
import { handleEditTask, handleOpenEditorModal } from './components/edit.js';

const shortid = require('shortid');

export const todoList = new TodoList(getStorageTasks());

const generateTask = (title, description, priority) => {
	const newTask = {
		id: shortid.generate(),
		title: title,
		description: description,
		priority: priority,
		status: 'open',
	};
	todoList.saveItem(newTask);
	constants.refs.taskListRef.insertAdjacentHTML('beforeend', createTaskCard(newTask));
	localStorage.setItem('tasks', JSON.stringify(todoList.items));
};

const handleCreateForm = event => {
	event.preventDefault();
	let title = constants.refs.formTitle.value;
	let description = constants.refs.formDescription.value;
	const priority = constants.refs.formSelect.value;
	if (description === '' || title === '') return;
	generateTask(title, description, priority);
	constants.refs.formTitle.value = '';
	constants.refs.formDescription.value = '';
	MicroModal.close('task-editor-modal');
};

const removeListItem = item => {
	todoList.deleteItem(item.dataset.id);
	item.remove();
	localStorage.setItem('tasks', JSON.stringify(todoList.items));
};

const handleRemoveNote = ({ target }) => {
	if (target.tagName !== 'I' || target.textContent !== 'delete') return;
	removeListItem(target.closest('li'));
};

const handleOpenModal = event => {
	event.preventDefault();
	MicroModal.show('task-editor-modal');
};

MicroModal.init();
constants.refs.createModalButton.addEventListener('click', handleOpenModal);
constants.refs.form.addEventListener('submit', handleCreateForm);
constants.refs.taskListRef.addEventListener('click', handleRemoveNote);
constants.refs.taskListRef.addEventListener('click', handleStatusDone);
constants.refs.taskListRef.addEventListener('click', handleOpenEditorModal);
constants.refs.formEditor.addEventListener('submit', handleEditTask);
constants.refs.searchInput.addEventListener('input', handleFilter);
constants.refs.statusFilter.addEventListener('change', handleFilter);
constants.refs.priorityFilter.addEventListener('change', handleFilter);
