import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Grid from "../../components/commons/Grid";
import SimpleModal from "../../components/customs/Modal";
import "./Game.css";
import { Link } from "react-router-dom";

function Game(props) {
  /* const [userShips, setUserShips] = useState(); */
  const [userShipsCells, setUserShipsCells] = useState();
  const [waterShipCells, setWaterShipsCells] = useState([]);
  const [hittenShipCells, setHittenShipsCells] = useState([]);
  const [destroyedShipCells, setDestroyedShipCells] = useState([]);

  /* const [cpuShips, setCpuShips] = useState(); */
  const [cpuShipCells, setCpuShipsCells] = useState();
  const [waterCpuShipCells, setWaterCpuShipsCells] = useState([]);
  const [hittenCpuShipCells, setHittenCpuShipsCells] = useState([]);
  const [destroyedCpuCells, setDestroyedCpuCells] = useState([]);
  const [cpuBombs, setCpuBombs] = useState([100]);
  const [lastSuccessBombIndex, setLastSuccessBombIndex] = useState(0);

  const [userTurn, setUserTurn] = useState(true);
  const [cpuTurn, setCpuTurn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gameWinner, setGameWinner] = useState("");
  const [gameStatus, setGameStatus] = useState(props.game_status);

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
          case "x1":
            cpu_cells.push([92, 92 + 1, 92 + 2]);
            break;
          case "x2":
            cpu_cells.push([35, 35 + 1, 35 + 2]);
            break;
          case "x3":
            cpu_cells.push([81, 81 + 1, 81 + 2]);
            break;
          default:
        }
      } else {
        switch (cpuShip.direction) {
          case "x":
            cpu_cells.push([5, 5 + 1]);
            break;
          case "y":
            cpu_cells.push([6, 6 + 10]);
            break;
          default:
        }
      }
      return cpuShip;
    });

    console.log("CPU_CELLSssss", cpu_cells);
    setCpuShipsCells(cpu_cells);
    setGameStatus("started");
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (destroyedCpuCells.length >= 5) {
      setGameStatus("finished");
      openModal();
    } else if (destroyedShipCells.length >= 5) {
      setGameStatus("finished");
      openModal();
    }
  }, [destroyedCpuCells, destroyedShipCells]);

  if (cpuTurn) {
    setTimeout(() => {
      setUserTurn(!userTurn);
      setCpuTurn(!cpuTurn);
    }, 1000);
  }

  const dropBombToCpu = (grid) => {
    console.log("hitten", hittenCpuShipCells);
    console.log("water", waterCpuShipCells);

    let arrayOfArraysIndex = cpuShipCells.findIndex((cellArray) =>
      cellArray.includes(grid)
    );

    let findedArray = cpuShipCells.find((array, index) => array.includes(grid));

    if (findedArray && findedArray.length > 0) {
      if (findedArray.length > 1) {
        let arrayIndex = findedArray.findIndex((x) => x === grid);
        let newCpuShipCells = [...cpuShipCells];
        newCpuShipCells[arrayOfArraysIndex] = findedArray.filter((n, index) => {
          return index !== arrayIndex;
        });

        let newHittenCpuShipCells = [...hittenCpuShipCells];
        newHittenCpuShipCells.push(grid);
        setHittenCpuShipsCells(newHittenCpuShipCells);
        setCpuShipsCells(newCpuShipCells);
      } else {
        let newDestroyedCpuCells = [...destroyedCpuCells];
        newDestroyedCpuCells.push(grid);
        setDestroyedCpuCells(newDestroyedCpuCells);
      }
    } else {
      let newWaterCpuShipCells = [...waterCpuShipCells];
      newWaterCpuShipCells.push(grid);
      setWaterCpuShipsCells(newWaterCpuShipCells);
    }

    let bomb = "";

    if (lastSuccessBombIndex > 0) {
      bomb = userShipsCells[lastSuccessBombIndex][0];
    } else {
      let ranNum;
      while (true) {
        ranNum = Math.floor(Math.random() * 99) + 1;
        if (![cpuBombs].includes(ranNum)) {
          break;
        }
      }
      bomb = ranNum;
    }
    console.log("booooomb", bomb);
    console.log("cpuBombs", cpuBombs);

    let newCpuBombs = [...cpuBombs];
    newCpuBombs.push(bomb);
    setCpuBombs(newCpuBombs);

    setCpuBombs(newCpuBombs);
    setUserTurn(!userTurn);
    dropBombToUser(bomb);
  };

  const dropBombToUser = (grid) => {
    //index of the array that includes the bomb
    let arrayOfArraysIndex = userShipsCells.findIndex((cellArray) =>
      cellArray.includes(grid)
    );

    //array that includes the bomb
    let findedArray = userShipsCells.find((array, index) =>
      array.includes(grid)
    );

    //THE SHIP HAS MORE THAN 1 SAFE CELL
    //deletes the bomb of the findedArray
    //makes a copy of the initial cell arrays
    //upload the initial cell arrays (without the bomb)
    //saves the bomb on hitten array
    if (findedArray && findedArray.length > 0) {
      if (findedArray.length > 1) {
        let arrayIndex = findedArray.findIndex((x) => x === grid);
        let newUserShipCells = [...userShipsCells];
        newUserShipCells[arrayOfArraysIndex] = findedArray.filter(
          (n, index) => {
            return index !== arrayIndex;
          }
        );

        let newHittenShipCells = [...hittenShipCells];
        newHittenShipCells.push(grid);

        setHittenShipsCells(newHittenShipCells);
        setUserShipsCells(newUserShipCells);
        setLastSuccessBombIndex(arrayOfArraysIndex);
        console.log("se encontro el arraaaaaay:", arrayOfArraysIndex);
      } else {
        //THE LAST CELL ON THE SHIP
        //save the bomb on the destroyed array
        let newDestroyedShipCells = [...destroyedShipCells];
        newDestroyedShipCells.push(grid);
        setDestroyedShipCells(newDestroyedShipCells);
        setLastSuccessBombIndex(0);

        console.log("ultimo numero del arraaaay");
      }
    } else {
      //NO SHIP ON BOMB - WATER
      //save the bomb on the destroyed array
      let newWaterShipCells = [...waterShipCells];
      newWaterShipCells.push(grid);
      setWaterShipsCells(newWaterShipCells);
    }

    setCpuTurn(!cpuTurn);
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
              cpuCells={cpuShipCells}
              waterCells={waterCpuShipCells}
              hittenCells={hittenCpuShipCells}
              destroyedCell={destroyedCpuCells}
              userName="CPU"
              onClickGridAction={dropBombToCpu}
              userTurn={userTurn}
              gameStatus={props.game_status}
            />
          </div>
        ) : (
          <div class=" d-flex justify-content-start">
            <Grid
              cells={userShipsCells}
              waterCells={waterShipCells}
              hittenCells={hittenShipCells}
              destroyedCell={destroyedShipCells}
              userName={props.user_name}
              onClickGridAction={dropBombToUser}
              userTurn={userTurn}
              gameStatus={props.game_status}
            />
          </div>
        )}
      </div>
      <div class=" d-flex justify-content-center">
        <button
          component={Link}
          to="/"
          disabled={props.game_status === "pending"}
          type="button"
          class="surrender-button btn start btn-danger btn-sm "
          onClick={openModal}
        >
          SURRENDER
        </button>
      </div>
      <SimpleModal
        title={
          gameStatus === "started"
            ? "YOU ARE SURRENDING THE GAME"
            : gameWinner === props.user_name
            ? "CONGRATULATIONS, YOU WON!!"
            : "WE ARE VERY SORRY, YOU LOST"
        }
        message={
          gameStatus === "started"
            ? "Are you sure?"
            : gameWinner !== props.user_name
            ? "Keep playing and scoring!!"
            : "ake another chance, you can do it!"
        }
        gameStatus={gameStatus}
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_ships: state.user_ships,
    cpu_ships: state.cpu_ships,
    user_name: state.game.user_name,
    game_status: state.game.game_status,
    game_winner: state.game.game_winner,
  };
};
export default connect(mapStateToProps)(Game);
