import Layout from "./Layout";
import sampleResume from "../../assets/content/functionalsample.pdf";
import "./resume.css";

function Resume() {
  return (
    <Layout>
      <h2>Resume</h2>
      <a className="resume-link" href={sampleResume} target="_blank">
        Download my resume here!
      </a>
      <h4 className="mt-4">Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </Layout>
  );
}

export default Resume;
