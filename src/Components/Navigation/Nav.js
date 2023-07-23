import "./nav.css";

function Nav(props) {
  return (
    <nav className="Nav">
      {props.pages.map((page) => {
        return (
          <button key={page.name} onClick={() => props.setCurrentPage(page)}>
            {page.name}
          </button>
        );
      })}
    </nav>
  );
}

export default Nav;
