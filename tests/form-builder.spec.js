import { shallowMount } from '@vue/test-utils'
import FormBuilder from '../src/components/FormBuilder.vue'

describe('FormBuilder.vue', () => {
    it('renders props.message when passed', () => {
        const message = 'New message'

        const wrapper = shallowMount(FormBuilder, {
            propsData: { message }
        })

        expect(wrapper.text()).toMatch(message)
    })
})
