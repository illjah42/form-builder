let fieldId = 0

export default {
    inheritArrs: false,

    props: {
        label: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default() {
                return `input-${this._fieldId}`
            }
        }
    },

    data() {
        return {
            _fieldId: ++fieldId
        }
    },

    computed: {
        wrapperClasses() {
            return null
        },

        mergedListeners() {
            return this.$listeners
        }
    }
}
