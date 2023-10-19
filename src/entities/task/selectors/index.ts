import { RootState } from 'app/providers/store-provider/types'
export const selectTasks = (state: RootState) => state.tasks.tasks
