// import { useState } from "react";
import "./App.css";
import GenerationByType from "./components/GenerationByType";
import { LineChart } from "./components/LineChart";
// import BrazilMap from "./components/MapComponent";
// import GenerationByRegion from "./components/GenerationByRegion";
import { PlugZap } from "lucide-react";
import { DownloadButton } from "./components/DownloadData";

function App() {
  // const [selectedRegion, setSelectedRegion] = useState<string>();

  return (
    <div className="@container/main flex flex-col">
      {/* <div className="h-screen"> */}
      <div className="flex justify-between">
        <div className="flex space-x-0.5">
          <PlugZap style={{ color: "#78716C" }} size={43} strokeWidth={2} />
          <h1 className="flex pb-0 pl-3 pt-0 pr-10 text-5xl text-stone-500 font-semibold tabular-nums">
            GridOps
          </h1>
        </div>
        <DownloadButton />
      </div>
      {/* <div className="flex">
          <BrazilMap
            selectedRegion={selectedRegion}
            onRegionClick={(region) => {
              if (region === selectedRegion) {
                setSelectedRegion(undefined);
              } else {
                setSelectedRegion(region);
              }
            }}
          />
          {selectedRegion ? (
            <GenerationByRegion region={selectedRegion} />
          ) : null}
        </div> */}
      {/* </div> */}
      <div className="p-0">
        <GenerationByType region={"sin"} />
      </div>
      <div className="p-0">
        <LineChart region={"sin"} />
      </div>
    </div>
  );
}

export default App;
