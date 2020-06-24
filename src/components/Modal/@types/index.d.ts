import { ModalProps } from 'react-bootstrap/Modal';
import { ModalHeaderProps } from 'react-bootstrap/ModalHeader';

declare interface ICommonElementProps {
  as?: React.ElementType;
  bsPrefix?: string;
}

declare interface IModalContent {
  body: React.ReactNode | string;
  title: React.ReactNode | string;

  // optional
  footer?: React.ReactNode | string;
  baseProps?: ModalProps;
  headerProps?: ModalHeaderProps;
  titleProps?: ICommonElementProps;
  bodyProps?: ICommonElementProps;
  footerProps?: ICommonElementProps;
}
