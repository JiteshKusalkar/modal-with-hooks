import { useEffect, useState } from 'react';

import ModalContainer from './useModalContainer';

interface IUseToggle {
  show: boolean[];
  onHide: (index: number) => () => void;
}

const useToggle = (): IUseToggle => {
  const [show, setShow] = useState<boolean[]>([]);
  const { modals } = ModalContainer.useContainer();

  useEffect(() => {
    if (modals.length) {
      setShow(show.concat(true));
    } else {
      setShow([]);
    }
  }, [modals.length]);

  const onHide = (index: number) => () => {
    const draft = [...show];
    draft[index] = false;

    setShow(draft);
  };

  return {
    show,
    onHide,
  };
};

export default useToggle;
