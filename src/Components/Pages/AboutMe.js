import Layout from "./Layout";
import Avatar from "../../assets/images/avatar2.png";

function AboutMe() {
  return (
    <Layout>
      <h2>About Me</h2>
      <section className="content mt-3">
        <div className="d-flex justify-content-center">
          <img className="avatar" height="100px" src={Avatar} />
        </div>
        <h4 className="mt-3">Overview</h4>
        <p>
          👋🏽 Hi, I'm Nadeem, a recent Mechanical Engineering graduate from
          McMaster University. I am hoping to transition into the software
          industry. I enjoy front-end development!
        </p>

        <h4>Education</h4>
        <ul>
          <li>
            B.Eng (Co-op) in Mechanical Engineering at McMaster University
          </li>
          <li>
            Completed a 16-month Co-op as a Jr. Engineering Specialist at
            Stackpole International
          </li>
          <li>
            I currently work as an Application Engineer at Nord Gear Ltd, an
            international gearbox and motor supplier.
          </li>
        </ul>

        <h4>Interests/Hobbies</h4>
        <ul>
          <li>I love to ski! ⛷️</li>
          <li>I enjoy playing video games with my friends! 🎮</li>
          <li>My favorite soccer team is Liverpool. ⚽️ </li>
        </ul>
      </section>
    </Layout>
  );
}

export default AboutMe;
