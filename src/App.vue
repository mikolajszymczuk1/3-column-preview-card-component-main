<template>
    <main class="main-container">
        <CardPreview />
    </main>
</template>

<script>
import CardPreview from "@/components/CardPreview/CardPreview.vue";

export default {
    name: "App",
    components: {
        CardPreview
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    @media screen and (min-width: 1440px) {
        display: flex;
        justify-content: center;
        align-items: center;
    
        height: 100vh;
    }
}
</style>
