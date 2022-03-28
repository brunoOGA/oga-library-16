import { TouchableOpacityProps } from 'react-native'

export interface IButtonProps extends TouchableOpacityProps {
  /**
   * Cor do background
   */
  color?: string
  /**
   * Texto do botão
   */
  text?: string
  /**
   * Tamanho do botão
   */
  size?: 'small' | 'medium' | 'large'
}
