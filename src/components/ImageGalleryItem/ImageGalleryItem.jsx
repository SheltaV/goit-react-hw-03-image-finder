import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({src, onClick}) => {
    return ( 
  <Image src={src} alt="image" onClick={(evt) => onClick(evt)} />
    )
}