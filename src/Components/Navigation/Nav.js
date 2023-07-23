function Nav(props) {
  return (
    <nav>
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
