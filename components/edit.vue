<template>
  <div id="note-editor">
    <textarea class="form-control" :value='activeListData' @input='editNote($event)'>
    </textarea>
  </div>
</template>

<script>
import {editNote} from '../vuex/action';
export default{
	vuex:{
		getters:{
			activeListData:function(state){
				return state.activeList.listData;
			}
		},
		actions:{
			editNote
		}
	}
}
</script>