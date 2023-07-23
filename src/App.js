import Header from "./Components/Header";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
  return (
    <body>
      <header>
        <Header />
      </header>

      <main className="Projects">
        <Project />
      </main>

      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
