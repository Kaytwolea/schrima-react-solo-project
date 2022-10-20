import React from "react";
import data from "./data";
import Cards from "./cards";

function App() {
  return (
    <div>
      <div className="w-[450px] mx-auto bg-white border-4 border-[#F55A5A] h-auto mt-4">
        <div className="h-12 w-full bg-[#F55A5A] flex items-center justify-center">
            <div className="flex gap-1">
              <img src="./images/fil.png" alt="  " />
              <h4 className="text-base text-white capitalize">my travel journal.</h4>
            </div>
        </div>
        <div>
          {
            data.map(items => <Cards
                image={items.imageUrl}
                title={items.title}
                href={items.googleMapsUrl}
                location={items.location}
                start={items.startDate}
                end={items.endDate}
                cap={items.description}
              />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;