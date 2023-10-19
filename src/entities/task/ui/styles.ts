import { Flex, FlexProps, Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import styled from 'styled-components'

const { Text } = Typography
export const StyledInputContainer = styled(Flex)<FlexProps>({
    width: '100%',
    gap: '8px',
})

export const StyledTextError = styled(Text)<TextProps>({
    color: 'red',
    paddingLeft: '25px',
})