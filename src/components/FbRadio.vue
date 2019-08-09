<template>
    <div class="fb-field fb-switch-field is-radio" :class="wrapperClasses">
        <input
            class="fb-switch-field__element"
            type="radio"
            v-bind="{ id, value, checked: isChecked, ...$attrs }"
            :aria-describedby="errorId"
            v-on="mergedListeners"
        /><label v-if="!!label" class="fb-switch-field__label" :for="id">
            {{ label }}
        </label>
        <slot name="error" v-if="error" :error="error">
            <span
                class="fb-error is-left has-pin-bottom-left"
                :id="errorId"
                @click="_onErrorClick"
            >
                {{ error }}
            </span>
        </slot>
    </div>
</template>

<script>
import FieldMixin from '../mixins/field'
import ErrorMixin from '../mixins/error'

export default {
    name: 'FbCheckbox',

    mixins: [FieldMixin, ErrorMixin],

    model: {
        prop: 'checked',
        event: 'change'
    },

    props: {
        value: {
            type: [String, Number],
            default: 'on'
        },

        checked: [String, Number]
    },

    computed: {
        wrapperClasses() {
            return { 'has-error': this.hasError }
        },

        isChecked() {
            return this.checked === this.value
        },

        mergedListeners() {
            return {
                ...this.$listeners,
                change: this._onChange,
                invalid: this._onInvalid
            }
        }
    },

    methods: {
        _onChange() {
            if (this.hasError) {
                this.setError('')
            }
            this.$emit('change', this.value)
        }
    }
}
</script>
