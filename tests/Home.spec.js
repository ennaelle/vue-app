import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'

test('affiche le titre Bienvenue', () => {
  const wrapper = mount(Home)
  expect(wrapper.text()).toContain('Bienvenue')
})
