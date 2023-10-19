import { format } from 'date-fns'
import { FC, useCallback, useState } from 'react'
import { TaskView } from 'entities'
import { ChangeTaskStatus, DeleteTask, EditTask, TitleTask } from 'features'
import { TaskType, TitleModeEnum } from 'entities/task/slice/types'
import { SaveTask } from 'features/task/save'
import { useDispatch } from 'react-redux'
import { setDeletedTask, setEditableTask, setTaskDone } from 'entities/task/slice'

type PropsType = {
    task: TaskType
}
export const Task: FC<PropsType> = ({ task }) => {
    const [taskTitle, setTaskTitle] = useState(task.taskTitle)
    const [error, setError] = useState<string | null>(null)

    const dispatch = useDispatch()

    const onChangeTaskTitle = useCallback((value: string) => {
        !value.trim().length ? setError('provide task') : setError(null)
        setTaskTitle(value)
    }, [])

    const onSaveClick = useCallback(() => {
        if (!taskTitle.trim().length) {
            setError('provide task')
            return
        }
        dispatch(setEditableTask({
            ...task,
            mode: TitleModeEnum.View,
            taskTitle: taskTitle,
            createdAt: task.createdAt ?? format(new Date(), 'dd MMM kk:mm'),
        }))
    }, [taskTitle])

    const onEditClick = useCallback(() => {
        dispatch(setEditableTask({ ...task, mode: TitleModeEnum.Edit }))
    }, [])

    const onDeleteClick = useCallback(() => {
        dispatch(setDeletedTask(task))
    }, [])

    const onChangeStatus = useCallback((value: boolean) => {
        dispatch(setTaskDone({ ...task, done: value }))
    }, [])

    return (
        <TaskView
            changeStatusRender={<ChangeTaskStatus onChange={onChangeStatus} />}
            deleteRender={<DeleteTask onClick={onDeleteClick} />}
            editRender={task.mode === TitleModeEnum.View ? <EditTask onClick={onEditClick} /> :
                <SaveTask error={error} onClick={onSaveClick} />}
            taskTitle={
                <TitleTask
                    error={error}
                    title={taskTitle}
                    mode={task.mode}
                    onChange={onChangeTaskTitle} />
            }
            createdAt={task?.createdAt}
            error={error}
        />)
}