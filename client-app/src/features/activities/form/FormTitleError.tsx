import { Label } from "semantic-ui-react"

interface Props {
    title: string
}

export function FormTitleError(props: Props) {
    if (props.title === '') {
        return (
            <Label pointing color="red" basic content='Title is required' />
        )
    } else {
        return (
            <></>
        )
    }
}