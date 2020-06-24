import React, { FunctionComponent } from 'react';
import Modal from 'react-bootstrap/Modal';

import ModalContainer from './useModalContainer';
import useToggle from './useToggle';

const ModalBase: FunctionComponent<{}> = () => {
  const { modals } = ModalContainer.useContainer();
  const { show, onHide } = useToggle();

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
