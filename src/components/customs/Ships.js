import React from "react";

function Ships(props) {
  return (
    <div class="ships  row">
      {props.ships && props.ships !== " "
        ? props.ships.map((ship, index) => {
            return (
              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary btn-sm mx-3 my-1"
                  /* disabled={activeShip} */ onClick={() =>
                    props.selectShip(ship.id, index)
                  }
                >
                  {ship.name}
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm "
                  /* disabled={!activeShip} */ onClick={() =>
                    props.changeShipDirection(ship.id, index)
                  }
                >
                  Change Direction
                </button>
                <div>
                  <p>{ship.direction === "x" ? "Horizontal" : "Vertical"}</p>
                  {/* <p>{String(ship.cells)}</p> */}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Ships;
