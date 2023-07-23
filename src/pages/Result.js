import Map from "../components/Map";
import Menu from "../components/Menu";

const Result = () => {
  return (
    <main>
      <div className="Container">
        <div className="Outline">
          <div className="Inline">
            <div className="map-wrap">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
