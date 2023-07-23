import "./nav.css";

function Nav(props) {
  return (
    <nav className="Nav">
      {props.pages.map((page) => {
        return (
          <div
            className="navbar-button"
            key={page.name}
            onClick={() => props.setCurrentPage(page)}
          >
            {page.name}
          </div>
        );
      })}
    </nav>
  );
}

export default Nav;
