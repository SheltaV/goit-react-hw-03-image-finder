import { ImageItem, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ images }) => {
    return (
    <>
        {images.map(image => <ImageItem key={image.id}>
  <Image src={image.webformatURL} alt="image" />
        </ImageItem>)
        }
    </>
    )
}