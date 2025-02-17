import "../styles/hero.css";

const HeroSection = () => {
  return (
    <div id="hero">
      <div>
        <h1 style={{ fontSize: "50px" }}>SkillPrompt Pvt. Ltd.</h1>
        <h2 style={{ marginTop: "5px", fontSize: "30px" }}>
          Student | Software Developer | Learner
        </h2>
        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            textAlign: "justify",
            lineHeight: "30px",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          dignissimos a nemo, fuga ipsum, itaque animi eum temporibus, non
          quidem optio! Quis earum molestiae unde sapiente laboriosam aperiam
          nesciunt dolores, voluptatum tenetur? Fugit aperiam, eius numquam
          praesentium earum aliquam laboriosam possimus magni animi eos totam.
          Quis quam optio velit porro tempora inventore officiis, cupiditate
          praesentium consequatur ipsa veritatis illo ducimus error dolorem
          repellendus libero fugit autem beatae ipsum facilis alias pariatur
          eaque, et dolor! Officiis nulla quas corporis similique. Nostrum eum
          facere labore debitis consectetur amet minus earum magni repellat
          similique alias mollitia quibusdam, laborum nesciunt recusandae rem
          perspiciatis temporibus.
        </p>
        <div style={{ display: "flex", gap: "10px", marginTop: "25px" }}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="facebook.png" alt="logo" height="60px" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="linkedin.png" alt="logo" height="60px" />
          </a>
          <a href="https://www.github.com/" target="_blank">
            <img src="github.png" alt="logo" height="60px" />
          </a>
        </div>
      </div>
      <div>
        <img id="profile" src="vishal.jpeg" />
      </div>
    </div>
  );
};

export default HeroSection;
