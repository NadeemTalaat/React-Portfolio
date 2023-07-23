import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Navigation";
import Page from "./Components/Page";
import Footer from "./Components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "about-me",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <body>
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Header>

      <main>
        <Page currentPage={currentPage} />
      </main>

      <Footer />
    </body>
  );
}

export default App;
