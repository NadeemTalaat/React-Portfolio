import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <a className="card ProjectCard img-fluid" href={project.repo}>
      <img className="card-img-top" src={project.image} alt={project.alt}></img>
      <div className="card-img-overlay">
        <h4 className="card-title">{project.name}</h4>
        <p className="card-text">{project.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
