<template>
    <div class="fb-field fb-multi-block">
        <div
            v-for="(id, i) in idx"
            :key="id"
            class="fb-field fb-multi-block__field"
            :class="{ 'has-remove': showRemove }"
        >
            <slot v-bind="{ id, i }"></slot>
            <button
                v-if="showRemove"
                type="button"
                class="fb-multi-block__remove"
                @click="remove(id)"
            >
                remove
            </button>
        </div>
        <button type="button" class="fb-multi-block__add" @click="add">
            add
        </button>
    </div>
</template>

<script>
export default {
    name: 'FbMultiBlock',

    data() {
        return {
            idx: [0]
        }
    },

    computed: {
        showRemove() {
            return this.idx.length > 1
        }
    },

    methods: {
        add() {
            this.idx.push(this.idx[this.idx.length - 1] + 1)
            this.$emit('added', this.idx[this.idx.length])
        },
        remove(id) {
            let i = this.idx.indexOf(id)
            this.idx.splice(i, 1)
            this.$emit('removed', i)
        }
    }
}
</script>
