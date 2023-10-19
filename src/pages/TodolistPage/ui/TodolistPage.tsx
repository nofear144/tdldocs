import { StyledContainer, StyledDivider, StyledNoDataContainer, StyledTitle, StyledTodoContainer } from './styles'
import { Flex, Typography } from 'antd'
import { AddTask } from 'features/task/add'
import { Task } from 'widgets'
import { useSelector } from 'react-redux'
import { selectTasks } from 'entities/task/selectors'


export const TodolistPage = () => {
    const tasks = useSelector(selectTasks)
    return <StyledContainer justify='center'>
        <StyledTodoContainer>
            <Flex justify='space-between'>
                <StyledTitle level={3}>What need to do</StyledTitle>
                <AddTask />
            </Flex>
            <StyledDivider />
            <Flex vertical gap='10px'>
                {tasks.length ? tasks.map(task =>
                    <Task key={task.id} task={task} />,
                ) : <StyledNoDataContainer>
                    <Typography>There is no tasks yet</Typography>
                </StyledNoDataContainer>}
            </Flex>
        </StyledTodoContainer>
    </StyledContainer>

}