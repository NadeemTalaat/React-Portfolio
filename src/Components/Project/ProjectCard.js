import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="card ProjectCard img-fluid">
      <img className="card-img-top" src={project.image} alt={project.alt}></img>
      <div className="card-img-overlay">
        <h4 className="card-title">{project.name}</h4>
        <p className="card-text">{project.description}</p>
      </div>

      <div className="d-flex justify-content-around">
        <a className="links" href={project.repo}>
          Repo
        </a>
        <a className="links" href={project.deployment}>
          Deployment
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
