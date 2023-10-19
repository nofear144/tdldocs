import { Flex, FlexProps } from 'antd'
import styled from 'styled-components'

export const StyledFlexContainer = styled(Flex)<FlexProps>({
    margin: '0 auto',
    width: '100%',
    maxWidth: '1366px',
    marginBottom: '40px',
    flexGrow: 1,
    height: '100vh',
})