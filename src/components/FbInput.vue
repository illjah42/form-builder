<template>
    <div
        class="fb-field fb-text-field"
        :class="[`is-${this.type}`, ...wrapperClasses]"
    >
        <input
            class="fb-text-field__element"
            v-bind="{ id, type, value: inputValue, ...$attrs }"
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
    name: 'FbInput',

    mixins: [TextFieldMixin],

    props: {
        type: {
            type: String,
            default: 'text',
            validator(type) {
                if (['checkbox', 'radio', 'date', 'password'].includes(type)) {
                    console.error(`Use <fb-${type}> instead`)
                    return false
                }
                return true
            }
        }
    }
}
</script>
