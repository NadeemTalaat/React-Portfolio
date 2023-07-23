import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Nav";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/Pages/AboutMe";
import Portfolio from "./Components/Pages/Portfolio";
import ContactMe from "./Components/Pages/ContactMe";
import Resume from "./Components/Pages/Resume";

function App() {
  const pages = [
    {
      name: "About Me",
      component: AboutMe,
    },
    {
      name: "Portfolio",
      component: Portfolio,
    },
    {
      name: "Contact Me",
      component: ContactMe,
    },
    {
      name: "Resume",
      component: Resume,
    },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Header>
      <main>
        <currentPage.component />
      </main>
      <Footer />
    </div>
  );
}

export default App;
