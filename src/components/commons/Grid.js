import React from "react";
import { useState } from "react";

function Grid(props) {
  const [grid, setGrid] = useState(
    Array(100)
      .fill()
      .map((el, i) => i)
  );

  const {
    gameStatus,
    destroyedCell,
    userTurn,
    cells,
    cpuCells,
    userCells,
    waterCells,
    hittenCells,
  } = props;

  return (
    <div class="grid  my-2 ">
      <table class="table bg-secondary table-bordered text-center">
        <tbody>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(0, 10)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(10, 20)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(20, 30)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(30, 40)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(40, 50)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(50, 60)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(60, 70)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(70, 80)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(80, 90)}
          </tr>
          <tr>
            {grid
              .map((grid) => {
                return (
                  <td
                    class={
                      cells && cells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : cpuCells &&
                          cpuCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : userCells &&
                          userCells.filter((cell) => cell === grid).length > 0
                        ? "table-secondary"
                        : waterCells &&
                          waterCells.filter((cell) => cell === grid).length > 0
                        ? "table-info"
                        : hittenCells &&
                          hittenCells.filter((cell) => cell === grid).length > 0
                        ? "table-danger"
                        : destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                        ? "table-dark"
                        : "cell"
                    }
                    key={grid}
                  >
                    <div onClick={() => props.onClickGridAction(grid)}>
                      {grid}
                    </div>
                  </td>
                );
              })
              .slice(90, 100)}
          </tr>
        </tbody>
      </table>
      <div>
        <h5>
          {gameStatus === "pending"
            ? null
            : userTurn
            ? "YOUR TURN!"
            : "Wait...CPU is playing"}
        </h5>
      </div>
    </div>
  );
}

export default Grid;
