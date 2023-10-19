import { Flex } from 'antd'
import { StyledInputContainer } from 'entities/task/ui/styles'
import { FC, ReactNode } from 'react'


type PropsType = {
    taskTitle: ReactNode
    deleteRender: ReactNode
    editRender: ReactNode
    changeStatusRender: ReactNode
}
export const TaskView: FC<PropsType> = ({ taskTitle, deleteRender, editRender, changeStatusRender }) => (
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
)

