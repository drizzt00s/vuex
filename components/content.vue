<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click='showAllNotes'>
            All Notes
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click='showFavorites'>
            Favorites
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="list-group">
        <a v-for='list in lists' class="list-group-item" @click='changeAvtiveNote(list)' 
        :class="activeNote === list ? 'active' : '' ">
          <h4 class="list-group-item-heading">
            {{list.listData.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {changeAvtiveNote, showFavorites, showAllNotes} from '../vuex/action';
export default{
    data:function(){
        return {
     
        }
    },
    vuex:{
        getters:{
            lists:function(state){
                return state.lists;
            },
            activeNote:function(state){
                return state.activeList;
            }
        },
        actions:{
            changeAvtiveNote,
            showFavorites,
            showAllNotes
        }
    }

}
</script>