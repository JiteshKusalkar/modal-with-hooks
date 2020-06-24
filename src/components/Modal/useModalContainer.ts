import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { IModalContent } from './@types';

interface IModalContainer {
  modals: IModalContent[];
  showModal: (modal: IModalContent) => void;
}

const useModalContainer = () => {
  const [content, setContent] = useState<IModalContent[]>([]);

  const showModal = (modal: IModalContent) => setContent(content.concat(modal));

  return {
    modals: content,
    showModal,
  };
};

const ModalContainer = createContainer<IModalContainer>(useModalContainer);
export default ModalContainer;
