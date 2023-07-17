const { Link } = require('react-router-dom');

const NotFound = () => {
  return (
    <div>
      <p>No such page</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
