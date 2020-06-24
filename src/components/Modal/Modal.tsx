import React, { useState, FunctionComponent, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import ModalContainer from './useModalContainer';

const ModalBase: FunctionComponent<{}> = () => {
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

  return (
    <>
      {modals.map((modal, index) => (
        <Modal
          key={`modal_${index}`}
          show={show[index]}
          onHide={onHide(index)}
          {...(modal.baseProps || {})}
        >
          <Modal.Header closeButton={true} {...(modal.headerProps || {})}>
            <Modal.Title {...(modal.titleProps || {})}>
              {modal.title || 'Supply Title'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body {...(modal.bodyProps || {})}>
            {modal.body || 'Supply body'}
          </Modal.Body>
          {modal.footer && (
            <Modal.Footer {...(modal.footerProps || {})}>
              {modal.footer}
            </Modal.Footer>
          )}
        </Modal>
      ))}
    </>
  );
};

export default ModalBase;
