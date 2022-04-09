import React from "react";
import { connect, ReactReduxContext } from "react-redux";
import { useState, useEffect } from 'react';
import './Step1.css';

const Step1 = (props) =>  {

  const [ships, setShips] = useState();
  const [currentShip, setCurrentShip] = useState()
  const [grid, setGrid] = useState(Array(100).fill().map((el, i) => i))
 /*  const [cells, setCells] = useState([]) */
  const [disabledButton, setDisabledButton] = useState(-1)

  useEffect(() => {
    console.log("USE_EFFECT");
    console.log("SHIPS", props.user_ships.items);
    setShips (props.user_ships.items);
  },[] )

  const changeShipDirection = (ship_id) => {
    const new_ships = ships.map((ship) => {
      if(ship.id === ship_id){
        return {
          ...ship,
          direction: ship.direction ==="y" ? "x" : "y"
        }
      }
      return ship
    })
    setShips(new_ships)
  }

  const selectShip = (ship_id,index) => {
    setDisabledButton(index)
    const selected_ship = ships.find(ship => ship.id === ship_id);
    setCurrentShip(selected_ship)
    console.log(currentShip)
  }

  const setShipOnGrid = (grid) => {
  let currentShipCells = [];
   if(currentShip.name === "carrier"){
     switch(currentShip.direction) {
      case "x": 
        currentShipCells.push(grid,grid+1,grid+2,grid+3)
        break;
      case "y":
        currentShipCells.push(grid,grid+10,grid+20,grid+30)
        break;
        default:
     }}
    else if (currentShip.name === "cruiser") {

    switch(currentShip.direction) {
      case "x":
        currentShipCells.push(grid,grid+1,grid+2)
        break;
      case "y":
        currentShipCells.push(grid,grid+10,grid+20)
        break;
        default:
    }
    }else {
      switch(currentShip.direction) {
        case "x":
          currentShipCells.push(grid,grid+1) 
          break;
        case "y":
          currentShipCells.push(grid,grid+10)
          break;
        default:
      }
     }
     saveShipCells(currentShipCells)
   }

   const saveShipCells = (currentShipCells) => {
    const shipWithCells = ships.map((ship) => {
      if(ship.id === currentShip.id){
        return {
          ...ship,
          cells: currentShipCells
        }
      }
      return ship
    })
    setShips(shipWithCells)
  }
  

  return (
    <div class=" container flex">

      <div class="grid bg-secondary my-2 ">
        <table class="table table-bordered text-center">
          <tbody>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(0,10)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(10,20)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(20,30)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(30,40)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(40,50)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(50,60)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(60,70)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(70,80)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(80,90)}
            </tr>
            <tr>
            {grid.map((grid) => {
              return(<td key={grid}><div class="cell" onClick={()=>setShipOnGrid(grid)}>{grid}</div></td>)
            }).slice(90,100)}
            </tr>

          </tbody>
        </table>
      </div>
      
      <div class="elements">

        <div class="ships row ">
        {ships && ships !== " "? ships.map((ship,index) => {
        return(
          <div class="col">
            <button type="button" class="btn btn-primary btn-sm mx-5 my-1"   disabled={disabledButton === index} onClick={() => selectShip(ship.id,index)}>{ship.name}</button>
            <button type="button" class="btn btn-secondary btn-sm " onClick={() => changeShipDirection(ship.id)} >Change Direction</button>
            <p>{ship.direction} direction</p>
            <p>{String(ship.cells)}</p>
          </div>
        )}):null}
        </div>

        <div class="form">
          <div class="row-4">
            <input class="text" placeholder='name' ></input>
            <button type="button" class="btn btn-success btn-sm" onClick={()=>setShipOnGrid()} >START PLAYING</button>
          </div>
        </div>
      </div>
    </div>
  );
}

      
const mapStateToProps = (state) => {
  return {
    user_ships: state.ships.list,
    user_ship: state.ships.current
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllProducts: (params) => dispatch(productsActions.getAll(params)),
  };
}; */

export default connect(
  mapStateToProps,
  /* mapDispatchToProps */
)(Step1);

