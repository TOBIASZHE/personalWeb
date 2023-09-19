import data from "../../data/index.json";

export default function MySkills(){
  return(
    <section className="skills--section" id="mySkills">
      <div className="profolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skill--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--discription">{item.discription}</p>
            </div>    
          </div>
        ))}
      </div>
    </section>
  );
}