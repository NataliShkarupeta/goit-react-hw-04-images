import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

export const Modal = ({ show, alt, src }) => {
  useEffect(() => {
    
    const closeModal = e => {
      if (e.code === 'Escape') {
        show();
      }
    };

    window.addEventListener('keydown', closeModal);
    
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [show]);

  return (
    <Backdrop onClick={() => show()}>
      <ModalContent>
        <img src={src} alt={alt} />
      </ModalContent>
    </Backdrop>
  );
};


Modal.propTypes = {
  show: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
