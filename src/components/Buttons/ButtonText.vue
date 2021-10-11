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
    padding: 13px 28px;

    background-color: colors.$Very-light-gray;
    border-radius: 25px;
    border: solid 2px colors.$Very-light-gray;
    transition: background-color 150ms ease-out;
    cursor: pointer;

    font-size: 0.95em;
    outline: none;
    font-family: fonts.$lexend-deca;

    &:hover {
        background-color: transparent;

        color: colors.$Very-light-gray;
    }

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
