<template>
    <div
        class="fb-field fb-text-field is-password has-icon"
        :class="wrapperClasses"
    >
        <input
            class="fb-text-field__element"
            v-bind="{ id, value: inputValue, ...$attrs, type }"
            :aria-describedby="errorId"
            v-on="mergedListeners"
            ref="element"
        /><label v-if="!!label" class="fb-text-field__label" :for="id">
            {{ label }}
        </label>
        <slot name="icon" :switchType="_switchType">
            <button
                type="button"
                class="fb-text-field__icon"
                @click="_switchType"
            >
                <svg width="24" height="24" viewBox="0 0 30 30">
                    <path
                        d="M15 5C6 5 .3 14.2.2 14.4a1 1 0 0 0-.2.6 1 1 0 0 0 .2.5S5 25 15 25s14.8-9.3 14.8-9.4a1 1 0 0 0 .2-.6 1 1 0 0 0-.2-.6C29.7 14.2 23.9 5 15 5zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 4a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                    />
                    <path
                        v-show="type === 'text'"
                        d="M3.5 2.7L27 26L26.4 26.7L3 3.2L3.5 2.7z"
                    />
                </svg>
                <span class="sr-only">toggle password</span>
            </button>
        </slot>
        <slot name="error" v-if="error" :error="error">
            <span
                class="fb-error is-center has-pin-bottom-center"
                :id="errorId"
                @click="_onErrorClick"
            >
                {{ error }}
            </span>
        </slot>
    </div>
</template>

<script>
import TextFieldMixin from '../mixins/text-field'

export default {
    name: 'FbPassword',

    mixins: [TextFieldMixin],

    data() {
        return {
            type: 'password'
        }
    },

    methods: {
        _switchType() {
            this.type = this.type === 'password' ? 'text' : 'password'
            this.$refs.element && this.$refs.element.focus()
        }
    }
}
</script>
