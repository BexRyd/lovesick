import loveSick from "../img/loveSick.png";
import letter from "../img/icons8-letter-64.png";
import friends from "../img/icons8-friendship-64.png";

function Header() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={loveSick} alt="logo"></img>

        <div className="headerContainer">
          <img className="friendship" src={friends} alt="logo"></img>
          <img className="letter" src={letter} alt="logo"></img>
          <button className="headerBtn">Logout</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
