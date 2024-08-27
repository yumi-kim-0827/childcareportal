import React, { useState, useRef } from "react";

//components
import { Card } from "primereact/card";

export default function Main() {
  return (
    <>
      <div className="card">
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </>
  );
}
