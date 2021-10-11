<template>
    <section class="card-preview" aria-label="card-preview-component">
        <CardSingle card-type="sedans">
            <template #cardTitle>
                SEDANS
            </template>

            <template #cardText>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city 
                or on your next road trip.
            </template>
        </CardSingle>

        <CardSingle card-type="suvs">
            <template #cardTitle>
                SUVS
            </template>

            <template #cardText>
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation 
                and off-road adventures.
            </template>
        </CardSingle>

        <CardSingle card-type="luxury">
            <template #cardTitle>
                LUXURY
            </template>

            <template #cardText>
                Cruise in the best car brands without the bloated prices.
                Enjoy the enhanced comfort of a luxury 
                rental and arrive in style.
            </template>
        </CardSingle>
    </section>
</template>

<script>
import CardSingle from "@/components/CardPreview/CardSingle.vue";

export default {
    name: "CardPreview",
    components: {
        CardSingle
    }
}
</script>

<style lang="scss" scoped>
.card-preview {
    @media screen and (min-width: 375px) {
        margin: 90px auto;
    
        width: 87%;

        border-radius: 10px;
        overflow: hidden;
    }

    @media screen and (min-width: 768px) {
        width: 60%;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;

        width: 80%;
    }

    @media screen and (min-width: 1440px) {
        width: 920px;
    }
}
</style>
