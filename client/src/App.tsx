import { useState } from "react";
import "./App.css";
import GenerationByType from "./components/GenerationByType";
import { LineChart } from "./components/LineChart";
import BrazilMap from "./components/MapComponent";
import GenerationByRegion from "./components/GenerationByRegion";

function App() {
  // This is ok here because it's part of my responsibility
  const [selectedRegion, setSelectedRegion] = useState<string>();

  return (
    <div className="@container/main flex flex-col">
      <div className="h-screen">
        <h1 className="flex p-5 text-5xl font-semibold tabular-nums">
          Brazil Energy Watch
        </h1>
        <div className="flex">
          <BrazilMap
            selectedRegion={selectedRegion}
            onRegionClick={setSelectedRegion}
          />
          {selectedRegion && <GenerationByRegion region={selectedRegion} />}
        </div>
      </div>
      <GenerationByType region={"SIN"} />
      <div className="p-5">
        <LineChart region={"SIN"} />
      </div>
    </div>
  );
}

export default App;
