<template>
    <RouterView v-slot="{Component}">
        <Transition>
            <KeepAlive :max="10">
                <Component :is="Component" />
            </KeepAlive>
        </Transition>
    </RouterView>
</template>
