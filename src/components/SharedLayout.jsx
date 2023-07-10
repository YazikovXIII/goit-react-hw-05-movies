import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link, LinkLogo } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <LinkLogo to="/">
            <span role="img" aria-label="computer icon">
              📽️
            </span>{' '}
            GoIT Movies
          </LinkLogo>
        </Logo>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
