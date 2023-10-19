import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import styled from 'styled-components'

const { Text } = Typography
export const StyledTextContainer = styled(Text)<TextProps>({
   padding:'0px 12px'
})