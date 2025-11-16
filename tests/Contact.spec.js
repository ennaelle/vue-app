import { mount } from '@vue/test-utils'
import Contact from '../src/views/Contact.vue'

test('formulaire contient bouton Envoyer', () => {
  const wrapper = mount(Contact)
  expect(wrapper.find('button').text()).toBe('Envoyer')
})
