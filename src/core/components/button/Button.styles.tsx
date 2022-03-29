import styled, { css } from 'styled-components/native'

import { globalTokens } from '../../../tokens'
import { IButtonProps } from './Button.types'

type OmitIButtonProps = Omit<IButtonProps, 'text'>

export const StyledButton = styled.TouchableOpacity<OmitIButtonProps>`
  border: 0;
  border-radius: ${globalTokens.borderRadiusXxs};

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: ${globalTokens.spacingQuarck} ${globalTokens.spacingNano};
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: ${globalTokens.spacingNano} ${globalTokens.spacingXxs};
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: ${globalTokens.spacingXxs} ${globalTokens.spacingXs};
    `};

  background-color: ${({ color }) => color};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export const StyledText = styled.Text`
  color: ${globalTokens.neutralColorHighPure};
  line-height: ${globalTokens.fontSizeSm};
  font-size: ${globalTokens.fontSizeSm};
  font-weight: ${globalTokens.fontWeightMedium};
  text-align: center;
`
