
const Navbar = ({name,isAdmin,age}) => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <h1>{name}</h1>
            <p>{isAdmin}</p>
            <p>{age}</p>
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button>Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
