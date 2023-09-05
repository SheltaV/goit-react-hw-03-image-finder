import { LoadMoreButton } from "./Button.styled"

export const LoadButton = ({onLoad}) => {
    return <>
    <LoadMoreButton type='button' onClick={() => onLoad()}>Load more</LoadMoreButton>
    </>
}