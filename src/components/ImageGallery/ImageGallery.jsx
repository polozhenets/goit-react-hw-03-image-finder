const {
  ImageGalleryItem,
} = require('components/ImageGalleryItem/ImageGalleryItem');

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
