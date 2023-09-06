import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({image, backdropClick}) => {
    return (<Overlay onClick={() => backdropClick()}>
        <ModalWindow>
            <img src={image} alt="image" />
  </ModalWindow>
</Overlay>)
}