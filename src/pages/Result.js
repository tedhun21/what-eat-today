import Map from "../components/Map";
import Menu from "../components/Menu";
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <main>
      <div className="Container">
        <div className="Outline">
          <div className="Inline">

            <div className="DecidedWrap" id="result_wrap">
              <Link to="/decided-result">
                <div className="BackBtn" />
              </Link>
              <div className="ResultTitle">
                <h1>최종 누른 버튼 값</h1>
              </div>
              <div className="map_wrap">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
