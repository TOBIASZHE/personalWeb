export default function HeroSection() {
    return <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="section--title">Hey, I'm Haoze Guan</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Software & Hardware</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section--description">
            I earned my master's degree at New York University majoring in Electrical and Computer Engineering.
              <br />  I also finished my bachelor's degree in Electronic Engineering and Accounting. 
            </p>
        </div>
          <a href="https://www.linkedin.com/in/haozeguan"className="btn btn-primary">Get In Touch</a>

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>;
    
}