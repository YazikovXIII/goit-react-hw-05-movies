import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackButton = styled(Link)`
  color: black;
  display: block;
  margin-bottom: 10px;
  width: fit-content;
  letter-spacing: 0.06em;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;
