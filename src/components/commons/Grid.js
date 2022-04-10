import React from "react";
import { useState } from "react";

function Grid(props) {
  const [grid, setGrid] = useState(
    Array(100)
      .fill()
      .map((el, i) => i)
  );
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
                      props.cells && props.cells.includes(grid)
                        ? props.colorCell
                        : props.waterCells && props.waterCells.includes(grid)
                        ? "table-primary"
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
        <h5>{props.userName} BOARD</h5>
      </div>
    </div>
  );
}

export default Grid;
