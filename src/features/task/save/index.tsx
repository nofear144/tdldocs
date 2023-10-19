import { Button, Tooltip } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { FC } from 'react'

type PropsType = {
    onClick: () => void
}
export const SaveTask: FC<PropsType> = ({ onClick }) => (
        <Tooltip title='save'>
            <Button onClick={onClick} type='text' shape='default' icon={<SaveOutlined />} />
        </Tooltip>
    )