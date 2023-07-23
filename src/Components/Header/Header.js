import "./header.css";

function Header({ children }) {
  return (
    <header className="Header">
      <h1>Nadeem Talaat</h1>
      {children}
    </header>
  );
}

export default Header;
