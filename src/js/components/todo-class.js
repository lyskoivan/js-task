export default class TodoList {
	constructor(items = []) {
		this._items = items;
	}
	get items() {
		return this._items;
	}
	findItemById(id) {
		return this._items.find(item => item.id === id);
	}
	saveItem(item) {
		this._items.push(item);
		return item;
	}
	changeStatus(id, status) {
		const itemId = this.findItemById(id);
		if (itemId) {
			this.findItemById(id).status = status;
		}
	}
	deleteItem(id) {
		const itemId = this._items.indexOf(this.findItemById(id));
		this._items.splice(itemId, 1);
	}
	updateItemContent(id, content) {
		const itemId = this.findItemById(id);
		if (itemId) {
			Object.assign(itemId, content);
		}
	}
	searchItems(query) {
		const queryToLower = query.toLowerCase();
		return this._items.filter(item => item.title.toLowerCase().includes(queryToLower));
	}
	filterItemsByStatus(value) {
		return this._items.filter(item => item.status === value);
	}
	filterItemsByPriority(value) {
		return this._items.filter(item => item.priority === value);
	}
}
