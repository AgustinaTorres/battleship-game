import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Grid from "../../components/commons/Grid";
import SimpleModal from "../../components/customs/Modal";
import "./Game.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as actions from "../../context/actions";

function Game(props) {
  const [userShipsCells, setUserShipsCells] = useState();
  const [userShipsCellsUploaded, setUserShipsCellsUploaded] = useState();
  const [waterShipCells, setWaterShipsCells] = useState([]);
  const [hittenShipCells, setHittenShipsCells] = useState([]);
  const [destroyedShipCells, setDestroyedShipCells] = useState([]);

  const [cpuShipCells, setCpuShipsCells] = useState();
  const [cpuShipCellsUploaded, setCpuShipsCellsUploaded] = useState();
  const [waterCpuShipCells, setWaterCpuShipsCells] = useState([]);
  const [hittenCpuShipCells, setHittenCpuShipsCells] = useState([]);
  const [destroyedCpuCells, setDestroyedCpuCells] = useState([]);

  const [cpuBombs, setCpuBombs] = useState([100]);
  const [lastSuccessBombIndex, setLastSuccessBombIndex] = useState();

  const [userTurn, setUserTurn] = useState(true);
  const [cpuTurn, setCpuTurn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigate();
  useEffect(() => {
    let user_cells = [];

    props.user_ships.items.map((ship) => {
      user_cells.push(ship.cells);
      return ship;
    });
    console.log("USER_CELLS", user_cells);
    setUserShipsCells(user_cells);
    setUserShipsCellsUploaded(user_cells);
  }, [props.user_ships]);

  //sets the cpu ships manually
  useEffect(() => {
    let cpu_cells = [];
    props.cpu_ships.items.map((cpuShip) => {
      if (cpuShip.name === "carrier") {
        cpu_cells.push([1, 1 + 1, 1 + 2, 1 + 3]);
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
        cpu_cells.push([6, 6 + 10]);
      }
      return cpuShip;
    });

    console.log("CPU_CELLS", cpu_cells);
    setCpuShipsCells(cpu_cells);
    setCpuShipsCellsUploaded(cpu_cells);
  }, [props.cpu_ships]);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    let data = {
      gameStatus: "ended",
      gameWinner: "",
    };

    if (destroyedCpuCells.length >= 15 || destroyedShipCells.length >= 15) {
      if (destroyedCpuCells.length >= 15) {
        navigation({ pathname: "/end" });
        props.onFinishGame(data);
        data.gameWinner = props.user_name;
      } else {
        data.gameWinner = "CPU";
        navigation({ pathname: "/end" });
        props.onFinishGame(data);
      }
    }
  }, [destroyedCpuCells, destroyedShipCells]);

  if (cpuTurn) {
    setTimeout(() => {
      setUserTurn(!userTurn);
      setCpuTurn(!cpuTurn);
    }, 1000);
  }

  const dropBombToCpu = (grid) => {
    let arrayOfArraysIndex = cpuShipCellsUploaded.findIndex((cellArray) =>
      cellArray.includes(grid)
    );

    let findedArray = cpuShipCellsUploaded.find((array, index) =>
      array.includes(grid)
    );

    if (findedArray && findedArray.length > 0) {
      if (findedArray.length > 1) {
        let arrayIndex = findedArray.findIndex((x) => x === grid);
        let newCpuShipCells = [...cpuShipCellsUploaded];
        newCpuShipCells[arrayOfArraysIndex] = findedArray.filter((n, index) => {
          return index !== arrayIndex;
        });

        let newHittenCpuShipCells = [...hittenCpuShipCells];
        newHittenCpuShipCells.push(grid);
        setHittenCpuShipsCells(newHittenCpuShipCells);
        setCpuShipsCellsUploaded(newCpuShipCells);
      } else {
        let arrayOfArraysIndex = cpuShipCells.findIndex((cellArray) =>
          cellArray.includes(grid)
        );
        let copyCpuShipCells = [...cpuShipCells];
        let newDestroyedCpuCells = [...destroyedCpuCells];
        copyCpuShipCells[arrayOfArraysIndex].map((destroyedCell) => {
          newDestroyedCpuCells.push(destroyedCell);
          return destroyedCell;
        });
        setDestroyedCpuCells(newDestroyedCpuCells);
        console.log("DESTROYED USER CELLS", destroyedCpuCells);
      }
    } else {
      let newWaterCpuShipCells = [...waterCpuShipCells];
      newWaterCpuShipCells.push(grid);
      setWaterCpuShipsCells(newWaterCpuShipCells);
    }

    let bomb = "";
    if (
      lastSuccessBombIndex &&
      userShipsCellsUploaded[lastSuccessBombIndex].length > 0
    ) {
      bomb = userShipsCellsUploaded[lastSuccessBombIndex][0];
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

    console.log("BOMB IS:", bomb);

    let newCpuBombs = [...cpuBombs];
    newCpuBombs.push(bomb);
    setCpuBombs(newCpuBombs);

    console.log("ARRAY OF BOMBS", newCpuBombs);

    dropBombToUser(bomb);
    setUserTurn(!userTurn);
  };

  const dropBombToUser = (bomb) => {
    //index of the array that includes the bomb
    let arrayOfArraysIndexUser = userShipsCellsUploaded.findIndex((cellArray) =>
      cellArray.includes(bomb)
    );

    //array that includes the bomb

    let findedArrayUser = userShipsCellsUploaded.find((array, index) =>
      array.includes(bomb)
    );

    //THE SHIP HAS MORE THAN 1 SAFE CELL
    //deletes the bomb of the findedArray
    //makes a copy of the initial cell arrays
    //upload the initial cell arrays (without the bomb)
    //saves the bomb on hitten array
    if (findedArrayUser && findedArrayUser.length > 0) {
      if (findedArrayUser.length > 1) {
        let arrayIndex = findedArrayUser.findIndex((x) => x === bomb);
        let newUserShipCells = [...userShipsCellsUploaded];
        newUserShipCells[arrayOfArraysIndexUser] = findedArrayUser.filter(
          (n, index) => {
            return index !== arrayIndex;
          }
        );

        let newHittenShipCells = [...hittenShipCells];
        newHittenShipCells.push(bomb);

        setHittenShipsCells(newHittenShipCells);
        setUserShipsCellsUploaded(newUserShipCells);
        setLastSuccessBombIndex(arrayOfArraysIndexUser);
      } else {
        let arrayOfArraysIndex = userShipsCells.findIndex((cellArray) =>
          cellArray.includes(bomb)
        );
        let copyUserShipCells = [...userShipsCells];
        let newDestroyedUserCells = [...destroyedShipCells];
        copyUserShipCells[arrayOfArraysIndex].map((destroyedUserCell) => {
          newDestroyedUserCells.push(destroyedUserCell);
          return destroyedUserCell;
        });
        setDestroyedShipCells(newDestroyedUserCells);
        setLastSuccessBombIndex();
      }
    } else {
      //NO SHIP ON BOMB - WATER
      //save the bomb on the destroyed array
      let newWaterShipCells = [...waterShipCells];
      newWaterShipCells.push(bomb);
      setWaterShipsCells(newWaterShipCells);
    }

    setCpuTurn(!cpuTurn);
  };

  return (
    <div class="  my-3  justify-items-center">
      <div class="header text-center mb-5">
        <h2>START PLAYING</h2>
      </div>
      <div class=" row-md  d-flex justify-content-center col-sm ">
        <div class="col-md-5 row-sm ">
          <Grid
            cpuCells={cpuShipCellsUploaded}
            waterCells={waterCpuShipCells}
            hittenCells={hittenCpuShipCells}
            destroyedCell={destroyedCpuCells}
            userName="CPU"
            onClickGridAction={dropBombToCpu}
            userTurn={userTurn}
            gameStatus={props.game_status}
            gameWinner={props.game_winner}
          />
        </div>
        <div class="col-md-5 d-none d-md-block">
          <Grid
            cells={userShipsCells}
            waterCells={waterShipCells}
            hittenCells={hittenShipCells}
            destroyedCell={destroyedShipCells}
            userName={props.user_name}
            onClickGridAction={dropBombToUser}
            userTurn={userTurn}
            gameStatus={props.game_status}
            gameWinner={props.game_winner}
          />
        </div>
      </div>
      <div class="message-turn text-center">
        <h4>{userTurn ? "It's your turn!!" : "Wait...CPU is playing"}</h4>
      </div>
      <div class=" d-flex justify-content-center">
        <button
          component={Link}
          to="/"
          disabled={props.game_status === "pending"}
          type="button"
          class="surrender-button btn start btn-danger "
          onClick={openModal}
        >
          SURRENDER
        </button>
      </div>
      <SimpleModal
        surrender={props.onSurrenderGame}
        title="DO YOU WANT TO STOP PLAYING?"
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishGame: (data) => dispatch(actions.finishGame(data)),
    onSurrenderGame: (data) => dispatch(actions.surrenderGame(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
