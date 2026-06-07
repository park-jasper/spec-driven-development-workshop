<script setup>
defineProps({
    author: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="slidev-layout quote">
        <streamline-freehand-text-formating-open-quote class="quote-icon quote-icon-top" />
        <streamline-freehand-text-formating-open-quote class="quote-icon quote-icon-bottom" />
        <div class="quote-content">
            <slot />
            <div class="flex flex-justify-between">
                <p v-if="author" class="italic text-xl font-light">— {{ author }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slidev-layout.quote {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.quote-icon-top {
    top: 3rem;
    right: 6rem;
}

.quote-icon-bottom {
    bottom: 3rem;
    left: 6rem;
    rotate: 180deg;
}

.quote-icon {
    position: absolute;
    color: var(--bh-dark-blue);
    width: 100px;
    height: auto;
}

.quote-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    width: 80%;
}
</style>
