import styled, { css } from 'styled-components/native'

import { IButtonProps } from './Button.types'

type OmitIButtonProps = Omit<IButtonProps, 'text'>

export const StyledButton = styled.TouchableOpacity<OmitIButtonProps>`
  border: 0;
  border-radius: 4px;

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 4px 8px;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 8px 12px;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 12px 16px;
    `};

  background-color: ${({ color }) => color};
  color: #ffffff;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export const StyledText = styled.Text`
  color: #ffffff;
  line-height: 16px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`
