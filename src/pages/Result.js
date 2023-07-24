import Map from "../components/Map";
import { useParams, useNavigate } from 'react-router-dom';

const Result = () => {

  const { subclass } = useParams()
  const navigate = useNavigate()
  return (
    <main>
      <div className="Container">
        <div className="Outline">
          <div className="Inline">

            <div className="DecidedWrap" id="result_wrap">

              <div onClick={() => navigate(-1)} className="BackBtn" />

              <div className="ResultTitle">
                <h1>내 주변 {subclass} 추천</h1>
              </div>
              <div className="map_wrap">
                <Map subclass={subclass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;