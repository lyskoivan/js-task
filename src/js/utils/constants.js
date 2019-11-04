const editorForm = document.querySelector('.item-editor');

export const refs = {
	taskListRef: document.querySelector('.task-list'),
	createModalButton: document.querySelector('.button--create-task'),
	form: document.querySelector('.task-editor'),
	formSelect: document.querySelector('select.modal-select'),
	formDescription: document.querySelector('textarea.task-editor__input'),
	formTitle: document.querySelector('input.task-editor__input'),
	formEditor: document.querySelector('.item-editor'),
	formSelectEditor: editorForm.querySelector('select.modal-select'),
	formDescriptionEditor: editorForm.querySelector('textarea.task-editor__input'),
	formTitleEditor: editorForm.querySelector('input.task-editor__input'),
	searchInput: document.querySelector('.navigation__search-input'),
	statusFilter: document.querySelector('.task-filter--status'),
	priorityFilter: document.querySelector('.task-filter--priority'),
};

export const PRIORITY_TYPES = {
	low: 0,
	normal: 1,
	high: 2,
};
