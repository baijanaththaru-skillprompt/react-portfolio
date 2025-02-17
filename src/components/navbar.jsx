import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div>Home</div>
      <a href="#goto-project">
        <div>Projects</div>
      </a>
      <div>Skills</div>
      <div>Contact</div>
      <a href="https://www.linkedin.com/" target="_blank">
        <button id="hireme">Hire Me</button>
      </a>
    </div>
  );
};
export default Navbar;
