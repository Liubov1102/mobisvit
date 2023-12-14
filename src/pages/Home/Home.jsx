import Zoom from "@ericcote/react-reveal/Zoom";
import logo1mob from "../../img/logo1mob.svg";
import logotel from "../../img/logotel.svg";
import logo1svit from "../../img/logo1svit.svg";
import homeBG from "../../img/homeBG.png";
import { Wrapper, Image1, Image2, Image3, Link } from "./Home.styled";

const Home = () => (
  <Wrapper style={{ backgroundImage: `url(${homeBG})` }}>
    <Zoom cascade>
      <div>
        <Image1 src={logo1mob} alt="logo2" />
        <Image2 src={logotel} alt="logo2" />
        <Image3 src={logo1svit} alt="logo2" />
      </div>
      <div style={{ marginTop: 60 }}>
        <Link to="/catalog">продаж</Link>
        <Link to="/servis">сервіс</Link>
        <Link to="/renovation">ремонт</Link>
      </div>
    </Zoom>
  </Wrapper>
);
export default Home;
