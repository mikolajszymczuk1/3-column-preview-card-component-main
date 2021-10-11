<template>
    <article class="card-single"
        :class="'card-single--' + cardType"
    >
        <div class="card-single__icons-wrapper">
            <img class="card-single__car-icon" src="@/assets/svg/icon-sedans.svg" alt="sedans" title="sedans"
                v-if="cardType === 'sedans'"
            >

            <img class="card-single__car-icon" src="@/assets/svg/icon-suvs.svg" alt="sedans" title="sedans"
                v-else-if="cardType === 'suvs'"
            >

            <img class="card-single__car-icon" src="@/assets/svg/icon-luxury.svg" alt="sedans" title="sedans"
                v-else
            >
        </div>

        <h1 class="card-single__title">
            <slot name="cardTitle"></slot>
        </h1>

        <p class="card-single__text">
            <slot name="cardText"></slot>
        </p>

        <ButtonText :button-type="cardType">Learn More</ButtonText>
    </article>
</template>

<script>
import ButtonText from "@/components/Buttons/ButtonText.vue";

export default {
    name: "CardSingle",
    components: {
        ButtonText
    },
    props: {
        cardType: {
            type: String,
            required: true,
            validator: value => {
                return [
                    "sedans",
                    "suvs",
                    "luxury"
                ].indexOf(value) !== -1;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card-single {
    padding: 45px 50px 50px 50px;

    &--sedans {
        background-color: colors.$Bright-orange;
    }

    &--suvs {
        background-color: colors.$Dark-cyan;
    }

    &--luxury {
        background-color: colors.$Very-dark-cyan;
    }

    &__icons-wrapper {
        margin-bottom: 35px;
    }

    // &__car-icon {}

    &__title {
        margin-bottom: 25px;

        font-size: 2.5em;
        font-family: fonts.$big-shoulders-display;
        color: colors.$Very-light-gray;
    }

    &__text {
        margin-bottom: 25px;

        font-size: 0.9em;
        line-height: 25px;
        font-family: fonts.$lexend-deca;
        color: colors.$Transparent-white;

        @media screen and (min-width: 768px) {
            margin-bottom: 60px;
        }

        @media screen and (min-width: 1440px) {
            margin-bottom: 78px;
        }
    }
}
</style>
