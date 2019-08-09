<template>
    <form class="form-builder">
        <slot :currentData="currentData" :setValue="setValue" />
    </form>
</template>

<script>
export default {
    name: 'FormBuilder',

    props: {
        formData: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return {
            editedData: {}
        }
    },

    computed: {
        currentData() {
            return {
                ...this.formData,
                ...this.editedData
            }
        }
    },

    methods: {
        setValue(path, value) {
            this.$set(this.editedData, path, value)
        }
    }
}
</script>
