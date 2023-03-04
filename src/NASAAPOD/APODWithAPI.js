import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import localImageDiamondMoon from "./mike-van-den-bos-jf1EomjlQi0-unsplash.jpg";
import { getApodLoading, getApod } from "./selectors";
import { loadApod } from "./thunks";

const stuffToSend = {
  tokentStuff: "emptyforNow"
};

// let imageURLLoading = localImageDiamondMoon;
//APODWithAPI.js
//the actual component
const APODWithAPI = ({ todobaz, isLoading, startLoadingApod }) => {
  const [inputValue, setInputValue] = useState(`HelloThere`);

  function changeRandomText(e) {
    // const item = e.target.value;
    var something = Math.random();
    console.log(`changeRandomText clicked + ${something}`);
    setInputValue(`changeRandomText clicked + ${something}`);
    console.log(inputValue);
    startLoadingApod();
  }

  //   const loadingMessage = <div>Loading todos...</div>;

  const loadingMessage2 = (
    <div className="container-fluid text-center">
      <div>
        {/* <h3>{`Loading Image from NASA APOD API`}</h3> */}
        <h3>{`TITLE Loading`}</h3>
        <img src={localImageDiamondMoon} className="img-fluid" alt="..."></img>
        <p>{`COPYRIGHT Loading`}</p>
        <p>{`DATE Loading`}</p>
        <p>{`EXPLANATION loading...loading...loading...loading...loading...loading...loading`}</p>
      </div>
      <hr />
      <div>
        <button className="btn btn-primary" onClick={changeRandomText}>
          Get APID data
        </button>
      </div>
    </div>
  );

  const content = (
    <div className="container-fluid text-center">
      <div>
        {/* <RandomQuoteItem todo = {todobaz} inputValue = {inputValue}/> */}
        {/* <h3>{`Loading Image from NASA APOD API`}</h3> */}
        <h3>{todobaz.title}</h3>
        <img src={todobaz.url} className="img-fluid" alt="..."></img>
        <p>{todobaz.copyright}</p>
        <p>{todobaz.date}</p>
        <p>{todobaz.explanation}</p>
      </div>

      <hr />
      <div>
        <button className="btn btn-primary" onClick={changeRandomText}>
          Get APID data
        </button>
      </div>
    </div>
  );

  const contentlanding = (
    <div className="container-fluid text-center">
      <div>
        <h3>{`Hello and Welcome`}</h3>
        <p>This is a simple redux demo WITHOUT redux toolkit</p>
        <p>Click on the button below to load NASA data</p>
        <img
          src="https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseta.jpg"
          className="img-fluid"
          alt="..."
        ></img>
        <p>
          Photo by <a href="https://sandkdesignstudio.in/contact/">Jay</a> on{" "}
          <a href="https://sandkdesignstudio.in/portfolio/">
            S and K Design Studio
          </a>
        </p>
        {/* <p>{`DATE Loading`}</p>
        <p>{`EXPLANATION loading...loading...loading...loading...loading...loading...loading`}</p> */}
      </div>
      <div>
        <button className="btn btn-primary" onClick={changeRandomText}>
          Get APID data
        </button>
      </div>
    </div>
  );
  //return isLoading ? loadingMessage2 : content;
  return isLoading ? loadingMessage2 : todobaz.title ? content : contentlanding;
};

const mapStateToProps = (state) => ({
  isLoading: getApodLoading(state),
  todobaz: getApod(state)
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingApod: () => dispatch(loadApod(stuffToSend))
});

export default connect(mapStateToProps, mapDispatchToProps)(APODWithAPI);
