<template>
    <div class="fb-field fb-text-field is-textarea" :class="wrapperClasses">
        <textarea
            class="fb-text-field__element"
            v-bind="{ id, value: inputValue, ...$attrs }"
            :aria-describedby="errorId"
            v-on="mergedListeners"
            ref="element"
        /><label v-if="!!label" class="fb-text-field__label" :for="id">
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
import TextFieldMixin from '../mixins/text-field'

export default {
    name: 'FbTextarea',

    mixins: [TextFieldMixin]
}
</script>
