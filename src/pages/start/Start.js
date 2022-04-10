import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import startGame from "../../context/actions";
/* import { history } from "../../index"; */
import "./Start.css";
import Grid from "../../components/commons/Grid";
import Ships from "../../components/customs/Ships";
import Form from "../../components/customs/Form";
import { GiSinkingShip } from "react-icons/gi";

const StartLayout = (props) => {
  const [ships, setShips] = useState();
  const [currentShip, setCurrentShip] = useState();
  const [activeShip, setActiveShip] = useState(false);
  const [cells, setCells] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log("USE_EFFECT");
    console.log("SHIPS", props.user_ships.items);
    setShips(props.user_ships.items);
    setUserName(props.user_name);
  }, []);

  const changeShipDirection = (ship_id, index) => {
    const new_ships = ships.map((ship) => {
      if (ship.id === ship_id) {
        return {
          ...ship,
          direction: ship.direction === "y" ? "x" : "y",
        };
      }
      return ship;
    });
    setShips(new_ships);
  };

  const selectShip = (ship_id, index) => {
    setActiveShip(!activeShip);
    const selected_ship = ships.find((ship) => ship.id === ship_id);
    setCurrentShip(selected_ship);
    console.log(currentShip);
  };

  const setShipOnGrid = (grid) => {
    let currentShipCells = [];
    if (currentShip.name === "carrier") {
      switch (currentShip.direction) {
        case "x":
          currentShipCells.push(grid, grid + 1, grid + 2, grid + 3);
          break;
        case "y":
          currentShipCells.push(grid, grid + 10, grid + 20, grid + 30);
          break;
        default:
      }
    } else if (currentShip.name === "cruiser") {
      switch (currentShip.direction) {
        case "x":
          currentShipCells.push(grid, grid + 1, grid + 2);
          break;
        case "y":
          currentShipCells.push(grid, grid + 10, grid + 20);
          break;
        default:
      }
    } else {
      switch (currentShip.direction) {
        case "x":
          currentShipCells.push(grid, grid + 1);
          break;
        case "y":
          currentShipCells.push(grid, grid + 10);
          break;
        default:
      }
    }
    saveShipCells(currentShipCells);
    setCells(cells.concat(currentShipCells));
    console.log("CELLS", cells);
  };

  const saveShipCells = (currentShipCells) => {
    const shipWithCells = ships.map((ship) => {
      if (ship.id === currentShip.id) {
        return {
          ...ship,
          cells: currentShipCells,
        };
      }
      return ship;
    });
    setShips(shipWithCells);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
    console.log("USER_NAME", userName);
  };

  const startPlaying = () => {
    let data = {
      ships,
      userName,
    };
    props.onStartGame(data);
    /*  history.push("/game"); */
  };

  return (
    <div class=" container ">
      <div class="d-flex justify-content-center ">
        <div class="mx-5">
          <h1>BattleShip Game</h1>
        </div>
        <div>
          <GiSinkingShip class="big-icon" />
        </div>
      </div>
      <Grid
        cells={cells}
        onClickGridAction={setShipOnGrid}
        colorCell="table-primary"
      />
      <div class="elements">
        <Ships
          ships={ships}
          selectShip={selectShip}
          changeShipDirection={changeShipDirection}
        />
        <Form
          userName={userName}
          handleChange={handleChange}
          startPlaying={startPlaying}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_ships: state.user_ships,
    user_name: state.game.user_name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartGame: (data) => dispatch(startGame(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartLayout);
