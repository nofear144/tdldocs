import { Flex, Typography } from 'antd'
import { StyledInputContainer, StyledTextError } from 'entities/task/ui/styles'
import { FC, ReactNode } from 'react'


type PropsType = {
    taskTitle: ReactNode
    deleteRender: ReactNode
    editRender: ReactNode
    changeStatusRender: ReactNode
    createdAt?: string
    error: string | null
}
export const TaskView: FC<PropsType> = ({
    error,
    taskTitle,
    deleteRender,
    editRender,
    changeStatusRender,
    createdAt, }) => (
    <Flex vertical gap='4px'>
        <Flex justify='space-between' align='center'>
            <StyledInputContainer>
                {changeStatusRender}
                {taskTitle}
            </StyledInputContainer>
            <Flex>
                {editRender}
                {deleteRender}
            </Flex>
        </Flex>
        <Flex justify='space-between'>
           <StyledTextError>{error && error}</StyledTextError>
           <Typography>{createdAt ?? ''}</Typography>
        </Flex>
    </Flex>
)

