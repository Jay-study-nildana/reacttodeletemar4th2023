// import Ameesha from "./components/ameesha";

import "./styles.css";
import FooterContact from "./components/FooterContact";

// import APODWithLocalImage from "./NASAAPOD/APODWithLocalImage";
// import APODWithDirectURL from "./NASAAPOD/APODWithDirectURL";
import APODWithAPI from "./NASAAPOD/APODWithAPI";

export default function App() {
  return (
    <div className="App">
      {/* <APODWithDirectURL /> */}
      <APODWithAPI />
      <hr></hr>
      <FooterContact />
      {/* <Ameesha /> */}
    </div>
  );
}
