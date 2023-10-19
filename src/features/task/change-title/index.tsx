import { Input } from 'antd'
import { StyledTextContainer } from 'features/task/change-title/styles'
import { ChangeEvent, FC } from 'react'
import { TitleModeEnum, TitleModeType } from 'entities/task/slice/types'



type PropsType = {
    title: string
    mode: TitleModeType
    onChange: (value: string) => void
}

const { TextArea } = Input

export const TitleTask: FC<PropsType> = ({ title, onChange, mode }) => mode === TitleModeEnum.View ?
    <StyledTextContainer>{title}</StyledTextContainer> : <TextArea autoSize maxLength={50} value={title} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value)
    }} />

