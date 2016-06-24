import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Dots } from '../src'

const renderer = TestUtils.createRenderer()

describe('Dots', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Dots />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })
})
