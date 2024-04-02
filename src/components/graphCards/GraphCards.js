import React from "react";
import { PopulationChart } from "../chart/PopulationChart";
import { CurrenyChart } from "../chart/CurrenyChart";
import { NewsSection } from "../chart/NewsSection";

function GraphCards(props) {
  return (
    <div className="homePageWrapper">
      <div className="topCardSection">
        <div className="width-50 card cardHeight-200">
          <div className="cardInner cardInnerTopRow">
            <PopulationChart />
          </div>
        </div>
        <div className="width-25 card cardHeight-200">
          <div className="cardInner cardInnerTopRow">
            <CurrenyChart />
          </div>
        </div>
        <div className="width-25 card cardHeight-200">
          <div className="cardInner cardInnerTopRow">
            <NewsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphCards;
