import ReactDOM from 'react-dom'

jest.mock('react-dom')

require('../src/index')

test('Renders the application', () => {
  expect(ReactDOM.render).toBeCalled()
})
