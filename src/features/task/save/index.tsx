import { Button, Tooltip } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { FC } from 'react'

type PropsType = {
    onClick: () => void
    error?: string | null
}
export const SaveTask: FC<PropsType> = ({ onClick,error }) => (
        <Tooltip title='save'>
            <Button disabled={!!error} onClick={onClick} type='text' shape='default' icon={<SaveOutlined />} />
        </Tooltip>
    )