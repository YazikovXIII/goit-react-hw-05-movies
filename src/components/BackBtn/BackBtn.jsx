import { GoBackButton } from './BackBtn.styled';

export const GoBackBtn = ({ path, children }) => {
  return <GoBackButton to={path}>{children}</GoBackButton>;
};
