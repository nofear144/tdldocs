import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { setNewTask } from 'entities/task/slice'
import { TitleModeEnum } from 'entities/task/slice/types'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { format} from 'date-fns'

export const AddTask = () => {
    const dispatch = useDispatch()

    const onAddTaskClick = useCallback(() => {
        dispatch(setNewTask({
            taskTitle: '',
            mode: TitleModeEnum.Edit,
            done: false,
            createdAt:format(new Date(),'dd MMM kk:mm'),
            id: uuidv4(),
        }))
    }, [])

    return (<Button onClick={onAddTaskClick} type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>
            Add task
        </Button>
    )
}
