import React from "react";
import { useState } from "react";

function Grid(props) {
  const rowNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rowRange = (rowNumber) => {
    let array = [];
    for (var i = (rowNumber - 1) * 10 + 1; i <= rowNumber * 10; i++) {
      array.push(i);
    }
    return array;
  };

  const {
    userName,
    destroyedCell,
    cells,
    cpuCells,
    userCells,
    waterCells,
    hittenCells,
    gameStatus,
  } = props;

  return (
    <div class="my-2 container-fluid ">
      <div class="player-turn text-center ">
        {gameStatus !== "pending" && (
          <h5>
            {userName === "CPU"
              ? "CLICK HERE - Send a bomb"
              : "Don't click here - CPU"}
          </h5>
        )}
      </div>
      <div>
        <table
          class={
            userName === "CPU" && gameStatus === "started"
              ? "table table-bordered text-center text-secondary bg-secondary "
              : "table table-bordered text-center text-white "
          }
        >
          <tbody>
            {rowNumber.map((rowNum) => {
              return (
                <tr>
                  {rowRange(rowNum).map((grid) => {
                    return (
                      <td
                        class={
                          destroyedCell &&
                          destroyedCell.filter((cell) => cell === grid).length >
                            0
                            ? "bg-danger text-danger"
                            : cells &&
                              cells.filter((cell) => cell === grid).length > 0
                            ? " bg-primary text-primary"
                            : cpuCells &&
                              cpuCells.filter((cell) => cell === grid).length >
                                0
                            ? " bg-primary text-primary"
                            : userCells &&
                              userCells.filter((cell) => cell === grid).length >
                                0
                            ? " bg-primary text-primary"
                            : waterCells &&
                              waterCells.filter((cell) => cell === grid)
                                .length > 0
                            ? "bg-info text-info"
                            : hittenCells &&
                              hittenCells.filter((cell) => cell === grid)
                                .length > 0
                            ? "bg-warning text-warning"
                            : "bg-secondary text-secondary"
                        }
                        key={grid}
                      >
                        <div onClick={() => props.onClickGridAction(grid)}>
                          {grid}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grid;
