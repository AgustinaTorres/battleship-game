import React from "react";
import "./Ships.css";
import { GiCarrier } from "react-icons/gi";
/* GiCruiser;
GiSubmarine;
 */
function Ships(props) {
  return (
    <div>
      <div>
        <h3 class="text-start ">
          Select your ships and set them on the Grid...
        </h3>
      </div>
      <div class="ship-actions d-flex col justify-content-between">
        <div class="ships">
          {props.ships && props.ships !== " "
            ? props.ships.map((ship, index) => {
                return (
                  <div class="">
                    <button
                      disabled={props.activeShipId !== ship.id}
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
                      <GiCarrier class="icon" />
                      {ship.name + " " + ship.direction}
                    </button>
                  </div>
                );
              })
            : null}
        </div>
        <div class="row text-center align-items-center">
          <button
            type="button"
            class="direction btn btn-secondary btn-sm mx-3 "
            onClick={() => props.changeShipDirection(props.activeShipId)}
          >
            CHANGE SELECTED SHIP DIRECTION
            {/*  {ship.direction === "x" ? "horizontal" : "vertical"} */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ships;
