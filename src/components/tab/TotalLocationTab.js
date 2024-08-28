import React, { useState } from "react";
//components
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";

//data
import location from "@/src/data/location";

const TotalLocationTab = () => {
  return (
    <TabView scrollable>
      {location.map((item, id) => {
        return (
          <TabPanel header={`${item.sido}`} key={id}>
            <div className="card flex flex-wrap gap-2">
              {item.sigungu.map((item, id) => {
                return <Button label={item.name} icon="pi pi-check" key={id} />;
              })}
            </div>
          </TabPanel>
        );
      })}
    </TabView>
  );
};

export default TotalLocationTab;
