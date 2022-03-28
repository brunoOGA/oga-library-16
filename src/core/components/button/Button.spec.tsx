import { render } from '@testing-library/react-native'
import React from 'react'

import Button from './Button'

describe('Button Component', () => {
  const buttonText = 'Button'
  it('should render the component', () => {
    const { getByTestId } = render(<Button text={buttonText} />)

    expect(getByTestId('button:styledButton')).toBeTruthy()
  })
  it('should be disabled', () => {
    const { getByTestId } = render(<Button text={buttonText} disabled />)

    expect(
      getByTestId('button:styledButton').props.accessibilityState.disabled
    ).toBeTruthy()
  })
  it('should not be disabled', () => {
    const { getByTestId } = render(<Button text={buttonText} />)

    expect(
      getByTestId('button:styledButton').props.accessibilityState.disabled
    ).toBeFalsy()
  })
  it('should have the correct background color passed by prop', () => {
    const { getByTestId } = render(<Button text={buttonText} />)
    expect(
      getByTestId('button:styledButton').props.style.backgroundColor
    ).toEqual('#764abc')
  })
})
