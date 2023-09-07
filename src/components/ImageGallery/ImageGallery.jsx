import { GalleryList } from './ImageGallery.styled';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images, onChoose, onOpen }) => {
    return <GalleryList>
        {images.map(image => <ImageItem key={image.id} onClick={(evt) => onChoose(evt.target.src)}>
  <ImageGalleryItem src={image.webformatURL} onClick={onOpen} />
        </ImageItem>)
        }
</GalleryList>
}