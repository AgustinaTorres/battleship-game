import React from "react";
import "./Ships.css";
import { GiCarrier } from "react-icons/gi";

function Ships(props) {
  return (
    <div>
      <div>
        <h3 class="text-start ">
          Select your ships and set them on the Grid...
        </h3>
      </div>
      <div class="ships">
        {props.ships && props.ships !== " "
          ? props.ships.map((ship, index) => {
              return (
                <div class="row-4 d-flex justify-content-between">
                  <button
                    type="button"
                    class={
                      ship.name === "carrier"
                        ? "carrier btn btn-md mx-2 my-1 ship"
                        : ship.name === "cruiser"
                        ? "cruiser btn  btn-md mx-2 my-1 ship"
                        : "submarine btn  btn-md mx-2 my-1 ship"
                    }
                    onClick={() => props.selectShip(ship.id, index)}
                  >
                    {ship.name}
                  </button>

                  <div class="row text-center">
                    <button
                      type="button"
                      class="direction btn btn-secondary btn-sm mx-2 my-1 "
                      onClick={() => props.changeShipDirection(ship.id, index)}
                    >
                      {ship.direction === "x" ? "horizontal" : "vertical"}
                    </button>
                    <h5>Click to change direction</h5>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Ships;
