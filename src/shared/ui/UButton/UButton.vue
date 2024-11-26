
<script setup lang="ts">

interface UButtonProps {
	disabled?: boolean;
}

defineProps<UButtonProps>();

</script>

<template>
	<button data-test="button" :class="[classes.UButton, {[classes.disabled]: disabled}]">
		<slot />
	</button>
</template>


<style module="classes">
.UButton {
	color: black;
}

.disabled {
	cursor: not-allowed;
}
</style>
