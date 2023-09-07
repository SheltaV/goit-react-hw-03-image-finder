import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
    }
    
componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

handleKeydown = e => {
    if (e.code === 'Escape') {
      console.log(e)
        this.props.backdropClick()
      }
    }
    
    render() {
        return (
           <Overlay onClick={() => this.props.backdropClick()}>
        <ModalWindow>
            <img src={this.props.imageValue} alt="img" />
  </ModalWindow>
    </Overlay> 
        )
    }

}