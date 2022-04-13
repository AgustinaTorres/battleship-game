import React from "react";
import { connect } from "react-redux";

import { useState, useEffect } from "react";
import * as actions from "../../context/actions";

import "./Start.css";
import Grid from "../../components/commons/Grid";
import Ships from "../../components/customs/Ships";
import Form from "../../components/customs/Form";
import { GiSinkingShip } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const StartLayout = (props) => {
  const [ships, setShips] = useState();
  const [currentShip, setCurrentShip] = useState();
  const [activeShip, setActiveShip] = useState(false);
  const [cells, setCells] = useState([]);
  const [userName, setUserName] = useState("");
  const [activeShipId, setActiveShipId] = useState(1);
  const [disableStartButton, setDisableStartButton] = useState(true);

  const navigate = useNavigate();

  //saves the redux user ships on the local state once.
  useEffect(() => {
    console.log("USER_SHIPS", props.user_ships.items);
    setShips(props.user_ships.items);
    /*  setUserName(props.user_name); */
  }, [props.user_ships]);

  //actives the start playing button if all the ships are placed and the user's name written
  useEffect(() => {
    if (userName !== "" && activeShipId === 6) {
      setDisableStartButton(false);
    }
  }, [userName]);

  //changes the direction of the current selected ship
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
    setActiveShip(true);
    const selected_ship = ships.find((ship) => ship.id === ship_id);
    setCurrentShip(selected_ship);
    console.log(currentShip);
  };

  //places the selected ship on the playing board
  const setShipOnGrid = (grid) => {
    if (activeShip) {
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
      setActiveShipId(activeShipId + 1);
      setActiveShip(false);
    } else {
    }
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
    console.log(shipWithCells);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const startPlaying = () => {
    let data = {
      ships,
      userName,
      gameStatus: "started",
    };
    console.log("dataaaaaaaa", data);
    props.onStartGame(data);
    navigate({ pathname: "/game" });
  };

  return (
    <div class=" container ">
      <div class=" title d-flex justify-content-center ">
        <div class="mx-5 my-3">
          <h1>BATTLESHIP GAME</h1>
        </div>
        <div>
          <GiSinkingShip class="big-icon" />
        </div>
      </div>
      <div class="grid">
        <Grid
          userCells={cells}
          onClickGridAction={setShipOnGrid}
          colorCell="table-primary"
          gameStatus={props.game_status}
        />
      </div>

      <div class="settings">
        <Ships
          ships={ships}
          selectShip={selectShip}
          changeShipDirection={changeShipDirection}
          activeShipId={activeShipId}
        />
        <Form
          userName={userName}
          handleChange={handleChange}
          startPlaying={startPlaying}
          disableStartButton={disableStartButton}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_ships: state.user_ships,
    user_name: state.game.user_name,
    game_status: state.game.game_status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartGame: (data) => dispatch(actions.startGame(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartLayout);
