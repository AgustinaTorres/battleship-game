import React from "react";
import "./Ships.css";
import { GiCarrier } from "react-icons/gi";
import { AiOutlineRotateRight } from "react-icons/ai";

function Ships(props) {
  return (
    <div>
      <div class="row-md row-sm ">
        <h4 class=" mb-3 text-center">
          Select and set your ships on the board
        </h4>
      </div>
      <div
        class="row-md  
        align-items-center col-sm "
      >
        <div class="col-md col-sm ">
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
                      {ship.name + "-" + ship.direction}
                    </button>
                  </div>
                );
              })
            : null}
        </div>

        <div class="col-md col-sm text-center justify-content-center ">
          <AiOutlineRotateRight size={70} />
          <button
            type="button"
            class="direction btn btn-secondary btn-sm mx-3 "
            onClick={() => props.changeShipDirection(props.activeShipId)}
          >
            Change ship direction
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ships;
