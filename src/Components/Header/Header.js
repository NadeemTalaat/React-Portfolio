import "./header.css";

function Header({ children }) {
  return (
    <header className="Header d-flex flex-column flex-lg-row">
      <h1>Nadeem Talaat</h1>
      {children}
    </header>
  );
}

export default Header;
