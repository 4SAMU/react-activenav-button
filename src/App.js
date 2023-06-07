import "./App.css";
import ActiveNavButton from "react-activenav-button";
function App() {
  const { activeLink, handleButtonClick } = ActiveNavButton("#home");

  return (
    <>
      <div className="topnav">
        <h1 className="appName">Ceramics Den</h1>

        <a
          onClick={handleButtonClick("#home")}
          className={`${activeLink === "#home" ? "homeBtn active" : "homeBtn"}`}
          href="#home"
        >
          Home
        </a>

        <a
          onClick={handleButtonClick("#footer")}
          className={`${
            activeLink === "#footer" ? "aboutButton active" : "aboutButton"
          }`}
          href="#footer"
        >
          About writer
        </a>
      </div>

      <div id="home">
        <div className="light"></div>
        <div className="homepageText">
          This is ceramic Den. Showing you creatives work because you cant touch
          them when you dont have them
        </div>
        <div className="homepageText_bold">See it because it is here now</div>
        <img className="BrowCceramic" src="ceramic.png" alt="ceramic" />
        <a href="#art">
          <button className="button">see</button>
        </a>

        <div id="art" className="artpage">
          <h2 className="artpage_header">It is the art</h2>
          <div className="artpage_greybox">
            <div className="artpage_greybox_h">It is relaxing..</div>
            <div className="artpage_greybox_h-spantext">
              The art of pottery is oftentimes described as therapeutic and
              relaxing. While spinning clay, your mind and body are in natural
              synergy, wrapped around your creative ambitions and goals. This
              thoughtful, artistic activity can open up the mind and relieve you
              of outside worries
            </div>
          </div>
          <video className="videoHere" width="350" height="400px" controls>
            <source src="ceramicVid.mp4" type="video/mp4" />
            <source src="ceramicVid.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          <div className="ceramicDenPage">
            <h1 className="ceramicDenPage_header">Ceramics Den</h1>
            <h1 className="ceramicDenPage_header_h1">
              Best pieces of pottery made for you...
            </h1>
            <img className="image1" src="image1.png" alt="ceramic" />
            <img className="image2" src="image2.png" alt="ceramic" />
            <img className="image3" src="image3.png" alt="ceramic" />
            <img className="image4" src="image3.png" alt="ceramic" />
            <img className="image5" src="image3.png" alt="ceramic" />
            <div className="quote">
              “There is no better way to do your decorations than using these
            </div>
            <img className="largeImage" src="image4.png" alt="ceramic" />
            <div id="footer" className="footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
