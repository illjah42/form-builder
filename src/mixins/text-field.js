import FieldMixin from '../mixins/field'
import ErrorMixin from '../mixins/error'

export default {
    mixins: [FieldMixin, ErrorMixin],

    props: {
        value: {
            default: ''
        }
    },

    data() {
        return {
            // next line is for preserving autofilled values when v-model is missing
            inputValue: this.value
        }
    },

    computed: {
        wrapperClasses() {
            return [
                { 'is-filled': !!this.inputValue },
                { 'has-label': !!this.label },
                { 'has-error': this.hasError }
            ]
        },

        mergedListeners() {
            return {
                ...this.$listeners,
                input: this._onInput,
                change: this._onInput,
                invalid: this._onInvalid
            }
        }
    },

    watch: {
        value: {
            handler(newValue) {
                this.inputValue = newValue
            },
            immediate: true
        }
    },

    methods: {
        _onInput($event) {
            let value = $event.target.value
            this.inputValue = value
            if (this.hasError) {
                this.setError('')
            }
            this.$emit($event.type, value)
        }
    }
}
