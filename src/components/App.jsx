import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchApi } from 'service';
import { Rings } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';
import { ButtonLoad } from './Button/Button';
import Notiflix from 'notiflix';

export const App = () => {
  const [namePicture, setNamePicture] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [page, setPage] = useState(1);
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const getPictures = () => {
      setLoading(true);
      fetchApi(namePicture, page)
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }
          return Promise.reject(new Error('Sorry no image'));
        })
        .then(pictures => {
          console.log(pictures.length);
          if (pictures.hits.length === 0) {
            createMassage();
          }
          if (pictures.hits.length < 12) {
            setHideButton(true);
          }

          setPictures(prev => [...prev, ...pictures.hits]);
        })

        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    };

    if (namePicture) getPictures();
  }, [namePicture, page]);

  const createMassage = () => {
    Notiflix.Notify.info('Sorry no image');
  };

  const valueFromInput = namePicture => {
    setNamePicture(namePicture);
    setPage(1);
    setPictures([]);
    setHideButton(false);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const getSrcToModal = largeImageURL => {
    setImage(largeImageURL);
  };

  const toggleModal = () => {
    setImage('');
  };

  return (
    <div>
      <Searchbar onSubmit={valueFromInput} />
      {pictures && (
        <Gallery picturs={pictures} showBigImg={getSrcToModal} />
      )}{' '}
      {pictures.length !== 0 && hideButton === false && (
        <ButtonLoad clicked={onLoadMore} />
      )}
      {loading && <Rings />}
      {image && (
        <Modal show={toggleModal} src={image} alt="wonderful picture" />
      )}
    </div>
  );
};
