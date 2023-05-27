import { A } from "@solidjs/router";
import { ToggleSwitch } from "../../components/ToggleSwitch";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="nav-title">
          <h2>
            <A href="/">!BookMy Show</A>
          </h2>
        </div>
        <div class="nav-search">
          <input type="text" class="searchbar" placeholder="Search..." />
          <ToggleSwitch />
        </div>
      </div>
      <div class="sub-nav">
        <div class="nav-link1">
          <A href="/">Movies</A>
          <A href="/cinemas">Cinemas</A>
        </div>
        <div class="nav-link2">
          <A href="/about">About</A>
          <A href="/contact">Contact</A>
        </div>
      </div>
    </>
  );
};

export default Navbar;
