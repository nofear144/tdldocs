export type TaskType = {
    id: string
    taskTitle: string
    done: boolean
    mode: TitleModeType
    createdAt?: string
}

export type TaskStateType = {
    tasks: TaskType[]
}

export enum TitleModeEnum {
    Edit = 'edit',
    View = 'view',
}

export type TitleModeType = typeof TitleModeEnum[keyof typeof TitleModeEnum];