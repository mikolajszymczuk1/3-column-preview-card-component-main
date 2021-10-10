<template>
    <button class="button-text"
        :class="'button-text--' + buttonType"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonText",
    props: {
        buttonType: {
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
.button-text {
    padding: 15px 30px;

    background-color: colors.$Very-light-gray;
    border-radius: 25px;

    font-size: 0.95em;
    outline: none;
    border: 0;
    font-family: fonts.$lexend-deca;

    &--sedans {
        color: colors.$Bright-orange;
    }

    &--suvs {
        color: colors.$Dark-cyan;
    }

    &--luxury {
        color: colors.$Very-dark-cyan;
    }
}
</style>
