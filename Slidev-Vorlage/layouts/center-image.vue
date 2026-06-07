<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <div class="slidev-layout image-center grid grid-rows-[auto_minmax(0,1fr)] gap-4">
        <slot />
        <div class="min-h-0 flex items-center justify-center pb-4">
            <img :src="image" class="max-w-full max-h-full object-contain rounded-lg shadow-md" />
        </div>
    </div>
</template>
