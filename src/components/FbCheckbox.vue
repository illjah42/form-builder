<template>
    <div class="fb-switch-field is-checkbox" :class="wrapperClasses">
        <slot
            v-bind="{
                id,
                checked: isChecked,
                onChange: _onChange,
                setError,
                value
            }"
        >
            <input
                class="fb-switch-field__element"
                type="checkbox"
                v-bind="{ id, value, checked: isChecked, ...$attrs }"
                :aria-describedby="errorId"
                v-on="mergedListeners"
            /><label v-if="!!label" class="fb-switch-field__label" :for="id">
                {{ label }}
            </label>
        </slot>
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
            type: String,
            default: 'on'
        },

        checked: {
            type: [Array, Boolean],
            default: false
        }
    },

    computed: {
        wrapperClasses() {
            return {
                'fb-field': !this.$slots.default,
                'has-error': this.hasError
            }
        },

        isChecked() {
            return Array.isArray(this.checked)
                ? this.checked.includes(this.value)
                : this.checked
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
            let value = this._createValue($event.target.checked)
            if (this.hasError) {
                this.setError('')
            }
            this.$emit('change', value)
        },
        _createValue(isChecked) {
            if (Array.isArray(this.checked)) {
                if (isChecked) {
                    return this.checked.concat(this.value)
                } else {
                    let index = this.checked.indexOf(this.value)
                    let result = this.checked.slice()
                    if (index > -1) {
                        result.splice(index, 1)
                    }
                    return result
                }
            } else {
                return isChecked
            }
        }
    }
}
</script>
