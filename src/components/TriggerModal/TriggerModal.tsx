import React, { FunctionComponent } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalContainer } from '../Modal';

const TriggerModal: FunctionComponent<{}> = () => {
  const { showModal } = ModalContainer.useContainer();
  const handleClick = (i: number) => (
    e: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    showModal({
      title: `Title ${i}`,
      body: <TriggerModal />,
      baseProps: { size: i === 1 ? 'lg' : 'sm' },
    });
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleClick(1)}>
        Trigger Modal 1
      </Button>
      <Button variant="outline-primary" onClick={handleClick(2)}>
        Trigger Modal 2
      </Button>
    </>
  );
};

export default TriggerModal;
