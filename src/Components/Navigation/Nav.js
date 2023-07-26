import "./nav.css";

function Nav(props) {
  return (
    <nav className="Nav d-flex flex-column flex-md-row">
      {props.pages.map((page) => {
        return (
          <div
            className={`navbar-button ${
              props.currentPage.name === page.name ? "active" : ""
            }`}
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
