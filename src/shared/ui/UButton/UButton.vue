
<script setup lang="ts">

interface UButtonProps {
	disabled?: boolean;
	test?: boolean;
}

defineProps<UButtonProps>();


</script>

<template>
    <button
        type="button"
        data-test="button"
        :class="[classes.UButton, {[classes.disabled]: disabled}]"
    >
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
