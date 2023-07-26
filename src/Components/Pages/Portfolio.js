import Layout from "./Layout";
import Projects from "../../assets/content/projects";
import ProjectCard from "../Project/ProjectCard";

function Portfolio() {
  return (
    <Layout>
      <h2>Portfolio</h2>

      <div className="d-flex flex-wrap justify-content-center project-list">
        {Projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </Layout>
  );
}

export default Portfolio;
