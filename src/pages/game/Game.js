import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Grid from "../../components/commons/Grid";

function Game(props) {
  const [userShips, setUserShips] = useState();
  const [userShipsCells, setUserShipsCells] = useState();
  const [cpuShips, setCpuShips] = useState();
  const [cpuShipCells, setCpuShipsCells] = useState();
  const [waterCpuShipCells, setWaterCpuShipsCells] = useState();
  const [hittenCpuShipCells, setHittenCpuShipsCells] = useState();
  const [userTurn, setUserTurn] = useState(true);

  useEffect(() => {
    let user_cells = [];
    props.user_ships.items.map((ship) => {
      user_cells.push(ship.cells);
      return ship;
    });
    console.log("USER_CELLSssss", user_cells);
    setUserShipsCells(user_cells);
  }, [props.user_ships]);

  useEffect(() => {
    let cpu_cells = [];

    props.cpu_ships.items.map((cpuShip) => {
      if (cpuShip.name === "carrier") {
        switch (cpuShip.direction) {
          case "x":
            cpu_cells.push([1, 1 + 1, 1 + 2, 1 + 3]);
            break;
          case "y":
            cpu_cells.push([2, 2 + 10, 2 + 20, 2 + 30]);
            break;
          default:
        }
      } else if (cpuShip.name === "cruiser") {
        switch (cpuShip.direction) {
          case "x":
            cpu_cells.push([3, 3 + 1, 3 + 2]);
            break;
          case "y":
            cpu_cells.push([4, 4 + 10, 4 + 20]);
            break;
          default:
        }
      } else {
        switch (cpuShip.direction) {
          case "x":
            cpu_cells.push([5, 5 + 1]);
            break;
          case "y":
            cpu_cells.push([5, 5 + 10]);
            break;
          default:
        }
      }
      return cpuShip;
    });

    console.log("CPU_CELLSssss", cpu_cells);
    setCpuShipsCells(cpu_cells);
  }, []);

  const dropBombToCpu = (grid) => {
    let newCpuShipCells = [];
    let newWaterCpuShipCells = [];
    let newHittenCpuShipCells = [];

    let arr = [];
    cpuShipCells.forEach((array) => {
      arr = arr.concat(array);
    });
    console.log("holaaaaaaaaaaa", arr);

    if (arr.includes(grid)) {
      newHittenCpuShipCells.push(grid);
      newCpuShipCells.push(arr.splice(arr.indexOf(grid), 1));
    } else {
      newWaterCpuShipCells.push(grid);
    }

    setCpuShipsCells(newCpuShipCells);
    setWaterCpuShipsCells(newWaterCpuShipCells);
    setHittenCpuShipsCells(newHittenCpuShipCells);
    /* setUserTurn(!userTurn); */
    console.log("water", waterCpuShipCells);
    console.log("hitten", hittenCpuShipCells);
  };

  return (
    <div class="container  my-5 ">
      <div class="header text-center">
        <h1>Start Playing</h1>
      </div>
      <div class="row  d-flex">
        {userTurn ? (
          <div class=" d-flex justify-content-end">
            <Grid
              cells={cpuShipCells}
              waterCells={waterCpuShipCells}
              hittenCells={hittenCpuShipCells}
              /* colorCell="table-warning" */
              userName="CPU"
              onClickGridAction={dropBombToCpu}
            />
          </div>
        ) : (
          <div class=" d-flex justify-content-start">
            <Grid
              cells={userShipsCells}
              colorCell="table-primary"
              userName={props.user_name}
              onClickGridAction={null}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_ships: state.user_ships,
    cpu_ships: state.cpu_ships,
    user_name: state.game.user_name,
  };
};
export default connect(mapStateToProps)(Game);
