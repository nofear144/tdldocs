import { Divider, DividerProps, Flex, FlexProps, TypographyProps } from 'antd'
import styled from 'styled-components'
import Title from 'antd/es/typography/Title'

export const StyledTodoContainer = styled(Flex)<FlexProps>({
    width: '550px',
    height: 'fit-content',
    marginTop: '40px',
    flexDirection: 'column',
    boxShadow: '0px 6px 20px rgba(19, 19, 20, 0.05)',
    borderRadius: '8px',
    padding: '12px',
})

export const StyledNoDataContainer = styled(Flex)<FlexProps>({
    width: '100%',
    height: '400px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const StyledContainer = styled(Flex)<FlexProps>({
    width: '100%',
    marginTop: '40px',
})

export const StyledTitle = styled(Title)<TypographyProps>({
    marginBottom: '0px',
})

export const StyledDivider = styled(Divider)<DividerProps>({
    margin: '0px 0px 25px',
})

