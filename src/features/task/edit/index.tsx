import { Button, Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { FC } from 'react'

type PropsType = {
    onClick: () => void
}
export const EditTask: FC<PropsType> = ({ onClick }) => (
    <Tooltip title='edit'>
        <Button onClick={onClick} type='text' shape='default' icon={<EditOutlined />} />
    </Tooltip>
)
  