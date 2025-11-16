import { mount } from '@vue/test-utils'
import APropos from '../src/views/APropos.vue'

test('affiche le titre À propos', () => {
  const wrapper = mount(APropos)
  expect(wrapper.find('h1').text()).toBe('À propos')
})
