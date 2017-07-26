<template>
<div id="app">
	<sidebar></sidebar>
	<content></content>
	<edit></edit>
</div>
</template>

<script>
import sidebar from './sidebar.vue';
import content from	'./content.vue';
import edit from './edit.vue';

export default {
	components:{
		sidebar,
		content,
		edit
	}
}

</script>

