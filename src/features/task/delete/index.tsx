import { Button, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { FC } from 'react'

type PropsType = {
    onClick: () => void
}
export const DeleteTask: FC<PropsType> = ({ onClick }) => <Tooltip title='delete'>
    <Button onClick={onClick} type='text' shape='default' icon={<DeleteOutlined />} />
</Tooltip>