<template>
    <div class="fb-field fb-select-field is-select" :class="wrapperClasses">
        <select
            class="fb-select-field__element"
            v-bind="{ id, multiple, ...$attrs }"
            :aria-describedby="errorId"
            v-on="mergedListeners"
        >
            <slot>
                <option
                    v-for="{ text, value } in options"
                    :key="value"
                    :value="value"
                    >{{ text }}</option
                >
            </slot>
        </select>
        <label v-if="!!label" class="fb-select-field__label" :for="id">
            {{ label }}
        </label>
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
import FieldMixin from '../mixins/field'
import ErrorMixin from '../mixins/error'

export default {
    name: 'FbSelect',

    mixins: [FieldMixin, ErrorMixin],

    props: {
        value: {
            default: ''
        },

        multiple: {
            type: Boolean,
            default: false
        },

        options: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        wrapperClasses() {
            return [
                { 'is-filled': true /* temporary */ },
                { 'has-label': !!this.label },
                { 'has-error': this.hasError }
            ]
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
        _onChange($event) {
            if (this.hasError) {
                this.setError('')
            }
            this.$emit('input', $event.target.value)
        }
    }
}
</script>
