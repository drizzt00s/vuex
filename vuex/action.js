export var addList = function(store){
	var dispatch = store.dispatch;
	dispatch('ADD_LIST');
};

export var editNote = function(store, event){
	var dispatch = store.dispatch;
	var contents = event.target.value;
	dispatch('EDIT_NOTE', contents);
};

export var changeAvtiveNote = function(store, note){
	var dispatch = store.dispatch;
	dispatch('CHANGE_ACTIVE_NOTE', note);
};

export var deleteNote = function(store){
	var dispatch = store.dispatch;
	dispatch('DELETE_NOTE');
};

export var toggleFavorite = function(store, activeNote){
	var dispatch = store.dispatch;
	dispatch('TOGGLE_FAVORITE', activeNote);
};

export var showFavorites = function(store){
	var dispatch = store.dispatch;
	dispatch('SHOW_FAVORITES');
};

export var showAllNotes = function(store){
	var dispatch = store.dispatch;
	dispatch('SHOW_ALL_NOTES')
}



