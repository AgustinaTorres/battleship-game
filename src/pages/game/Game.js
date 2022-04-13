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
  const [lastSuccessBombIndex, setLastSuccessBombIndex] = useState(0);

  const [userTurn, setUserTurn] = useState(true);
  const [cpuTurn, setCpuTurn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let user_cells = [];

    props.user_ships.items.map((ship) => {
      user_cells.push(ship.cells);
      return ship;
    });
    console.log("USER_CELLSssss", user_cells);
    setUserShipsCells(user_cells);
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

    console.log("CPU_CELLSssss", cpu_cells);
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
        data.gameWinner = props.user_name;
      } else {
        data.gameWinner = "CPU";
      }
      navigate({ pathname: "/end" });
      props.onFinishGame(data);
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
      }
    } else {
      let newWaterCpuShipCells = [...waterCpuShipCells];
      newWaterCpuShipCells.push(grid);
      setWaterCpuShipsCells(newWaterCpuShipCells);
    }

    let bomb = "";

    /*  if (
      lastSuccessBombIndex &&
      lastSuccessBombIndex >= 0 &&
      userShipsCellsUploaded[lastSuccessBombIndex].length > 0
    ) {
      bomb = userShipsCellsUploaded[lastSuccessBombIndex][0];
      console.log("BOMBBBB", bomb);
    } else {
      let ranNum;
      while (true) {
        ranNum = Math.floor(Math.random() * 99) + 1;
        if (![cpuBombs].includes(ranNum)) {
          break;
        }
      }
      bomb = ranNum;
      console.log("BOMBBBB", bomb);
    } */
    let ranNum;
    while (true) {
      ranNum = Math.floor(Math.random() * 100) + 1;
      if (![cpuBombs].includes(ranNum)) {
        break;
      }
    }
    bomb = ranNum;
    console.log("BOMBBBB", bomb);
    console.log(cpuBombs);

    let newCpuBombs = [...cpuBombs];
    newCpuBombs.push(bomb);
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
        console.log("SUCCESSSSSSSSS", arrayOfArraysIndex);
      } else {
        let arrayOfArraysIndex = userShipsCells.findIndex((cellArray) =>
          cellArray.includes(grid)
        );
        let copyUserShipCells = [...userShipsCells];
        let newDestroyedUserCells = [...destroyedShipCells];
        copyUserShipCells[arrayOfArraysIndex].map((destroyedUserCell) => {
          newDestroyedUserCells.push(destroyedUserCell);
          return destroyedUserCell;
        });
        setDestroyedShipCells(newDestroyedUserCells);
        console.log("DESTROYED CPU CELLS", destroyedShipCells);
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
      <div class="row  d-flex justify-content-space-between">
        {/*  {userTurn ? ( */}
        <div class="col-6">
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
        {/* ) : ( */}
        <div class="col-6">
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
        {/*   )} */}
      </div>
      <div class="message-turn">
        <h2>{userTurn ? "It's your turn!!" : "Wait...CPU is playing"}</h2>
      </div>
      <div class="  justify-content-center">
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
        surrender={props.onSurrenderGame}
        title="YOU ARE SURRENDING THE GAME"
        message="Are you sure?"
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
