import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	lists:[],
	allLists:[],
	activeList:null	
};

var mutations = {
	'ADD_LIST':function(state){
		var newList = {};
		newList.listData = 'This is a new list';
		newList.isFavorite = false;
		state.activeList = newList;
		state.lists.push(newList);
	},

	'CHANGE_ACTIVE_NOTE':function(state, note){
		state.activeList = note;
	},

	'EDIT_NOTE':function(state, newContents){
		state.activeList.listData = newContents;
	},

	'DELETE_NOTE':function(state){
		for(var i = 0; i < state.lists.length; i++){
			if(state.lists[i] === state.activeList){
				state.lists.splice(i, 1);
				break;
			}
		}
		state.activeList = state.lists[0];
	},
	'TOGGLE_FAVORITE':function(state, activeNote){
		//activeNote.isFavorite = true;
		if(activeNote.isFavorite){
			activeNote.isFavorite = false;
		} else {
			activeNote.isFavorite = true;
		}
	},
	'SHOW_FAVORITES':function(state){
		var favoriteNotes = [];
		for(var i = 0; i < state.lists.length; i++){
			if(state.lists[i].isFavorite){
				favoriteNotes.push(state.lists[i]);
			}
		}
		state.allLists = state.lists;
		state.lists = favoriteNotes;
	},
	'SHOW_ALL_NOTES':function(state){
		state.lists = state.allLists;
	}

};

export default new Vuex.Store({
	state, mutations
});
