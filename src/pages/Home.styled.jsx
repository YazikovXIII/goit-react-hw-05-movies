import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

export const NotStyledLink = styled(Link)`
  text-decoration: none;
`;
