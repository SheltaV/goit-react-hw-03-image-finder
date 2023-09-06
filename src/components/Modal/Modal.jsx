import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({imageValue, backdropClick}) => {
    return (<Overlay onClick={() => backdropClick()}>
        <ModalWindow>
            <img src={imageValue} alt="img" />
  </ModalWindow>
</Overlay>)
}