import { ComponentMeta } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'

// 퍼알 안의 스토리 설정(메타데이터 객체)
export default {
  // 그룹명
  title: 'StyledButton',
  // 사용하는 컴포넌트
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}

export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}
