<script setup lang="ts">

interface UButtonProps {
	/**
	 * Отключает кнопку для нажатия
	 */
	disabled?: boolean;
}

withDefaults(defineProps<UButtonProps>(), {
	disabled: false,
});

defineSlots<{
	default(): never;
}>();

</script>

<template>
    <button
        type="button"
        data-test="button"
        :class="[classes.uButton, {[classes.disabled]: disabled}]"
    >
        <slot />
    </button>
</template>



<style module="classes" lang="scss">
.uButton {
	color: var(--first-color);
	padding: 15px;
	border-radius: 5px;
}

.disabled {
	cursor: not-allowed;
	opacity: .5;
}

</style>
