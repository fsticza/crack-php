import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListAlbums from '../ListAlbums.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(ListAlbums, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
