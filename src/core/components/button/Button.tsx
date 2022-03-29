import React from 'react'

import { globalTokens } from '../../../tokens'
import { StyledButton, StyledText } from './Button.styles'
import { IButtonProps } from './Button.types'

const Button: React.FC<IButtonProps> = ({
  text,
  color = globalTokens.brandColorPrimaryLight,
  size = 'medium',
  disabled = false,
  onPress,
}) => {
  return (
    <StyledButton
      testID='button:styledButton'
      disabled={disabled}
      color={color}
      size={size}
      onPress={onPress}
    >
      <StyledText testID='button:styledText'> {text} </StyledText>
    </StyledButton>
  )
}

export default Button
