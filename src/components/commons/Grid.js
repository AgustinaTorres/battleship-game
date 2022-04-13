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
    <div class="my-2">
      {/* ==========  PLAYER TURN - RENDERS ONLY ON THE GAME PAGE ========= */}
      <div class="player-turn">
        <h5>{userName && userName + " ships"}</h5>
      </div>
      <div class="board">
        <table class="table bg-secondary table-bordered text-center">
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
                            ? "table-danger"
                            : cells &&
                              cells.filter((cell) => cell === grid).length > 0
                            ? "table-secondary"
                            : cpuCells &&
                              cpuCells.filter((cell) => cell === grid).length >
                                0
                            ? "table-secondary"
                            : userCells &&
                              userCells.filter((cell) => cell === grid).length >
                                0
                            ? "table-secondary"
                            : waterCells &&
                              waterCells.filter((cell) => cell === grid)
                                .length > 0
                            ? "table-info"
                            : hittenCells &&
                              hittenCells.filter((cell) => cell === grid)
                                .length > 0
                            ? "table-warning"
                            : "cell"
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
