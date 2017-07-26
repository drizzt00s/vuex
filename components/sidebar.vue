<template>
	<div id='toolbar'>
		<i @click='addList' class='glyphicon glyphicon-plus'></i>
		<i @click='toggleFavorite(activeNote)' class="glyphicon glyphicon-star" :class="activeNote.isFavorite ? 'starred' : '' "></i>
   		<i @click='deleteNote'class="glyphicon glyphicon-remove"></i>
   
	</div>
</template>

<script>
import {addList, deleteNote, toggleFavorite} from '../vuex/action';

export default {
	vuex: {
		getters:{
			activeNote:function(state){
				return state.activeList;
			}
		},
		actions: {
			addList,
			deleteNote,
			toggleFavorite
		}
	}
}
</script>