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

defineEmits<{
	(e: 'click', t: string): void;
}>();

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



<style module="classes" lang="scss">
.uButton {
	color: var(--first-color);

}

.disabled {
	cursor: not-allowed;
	opacity: .5;
}

</style>
