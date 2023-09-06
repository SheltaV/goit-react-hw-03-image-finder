import { ImageItem, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ images, onChoose, onOpen }) => {
    return (
        <>
        {images.map(image => <ImageItem key={image.id} onClick={(evt) => onChoose(evt.target.src)}>
  <Image src={image.webformatURL} alt="image" onClick={() => onOpen()} />
        </ImageItem>)
        }
    </>
    )
}