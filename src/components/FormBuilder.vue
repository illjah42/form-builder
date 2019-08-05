<template>
    <div class="the-example">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'TheExample',

    props: {
        message: {
            type: String,
            default: 'Hello world!'
        }
    }
}
</script>

<style>
.the-example {
    border: 1px solid lightgray;
    padding: 1.5rem;
}
</style>
