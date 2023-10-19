import { Checkbox } from 'antd'
import { FC } from 'react'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

type PropsType = {
    onChange: (value: boolean) => void
}
export const ChangeTaskStatus: FC<PropsType> = ({ onChange }) => <Checkbox
    onChange={(e: CheckboxChangeEvent) => {
        onChange(e.target.checked)
    }} />