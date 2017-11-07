/* eslint-env jest */

// setup file
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import App from '../pages/index'

configure({ adapter: new Adapter() })

describe('With Enzyme', () => {
  it('The page renders properly', () => {
    const app = shallow(<App />)

    expect(app.find('p').first().text()).toContain('Jean-Philippe Sirois')
    expect(app.find('p').first().text()).toContain('a full-stack web developer')
    expect(app.find('h2').text()).toEqual('Stalk me!')
  })
})

describe('With Snapshot Testing', () => {
  it('The page renders properly', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
