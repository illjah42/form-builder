let errorId = 0

export default {
    data() {
        return {
            _errorId: ++errorId,
            error: '',
            hasError: false
        }
    },

    computed: {
        errorId() {
            return `error-${this._errorId}`
        }
    },

    methods: {
        setError(value) {
            this.error = value
            this.hasError = !!value
        },

        _onInvalid($event) {
            $event.preventDefault()
            this.setError($event.target.validationMessage)
        },

        _onErrorClick() {
            // next line only reset text, status is reset on user input
            this.error = ''
            this.$refs.element && this.$refs.element.focus()
        }
    }
}
