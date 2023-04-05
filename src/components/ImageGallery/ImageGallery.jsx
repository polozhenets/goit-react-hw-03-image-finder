import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images,onPictureClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(item => (
        <ImageGalleryItem
          onPictureClick={()=>onPictureClick(item.largeImageURL)}
          key={item.id}
          src={item.webformatURL}
          large={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onPictureClick: PropTypes.func.isRequired,
};

