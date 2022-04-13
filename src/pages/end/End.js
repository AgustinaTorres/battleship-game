import React from "react";
import { connect } from "react-redux";
import { GiTrophyCup } from "react-icons/gi";
import { RiEmotionSadLine } from "react-icons/ri";

function End(props) {
  return (
    <div class="container   text-center my-5">
      <h1 class="py-5">
        {props.game_winner === "CPU" ? (
          <div>
            <h1>YOU LOST</h1>
            <h1 class="my-5">BUT IT'S JUST A GAME</h1>
            <h1 class="my-5">Keep playing and having fun</h1>
            <RiEmotionSadLine size={130} />
          </div>
        ) : (
          <div>
            <h1>CONGRATULATIONS!!!</h1>
            <h1 class="my-5">YOU ARE THE WINNER</h1>
            <h1 class="my-5">Keep playing and having fun </h1>

            <GiTrophyCup size={130} />
          </div>
        )}
        <button
          disabled={props.disableStartButton}
          type="button"
          class="my-5 btn start btn-success btn-sm "
          /* onClick={props.startPlaying} */
        >
          PLAY AGAIN
        </button>
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_ships: state.user_ships,
    user_name: state.game.user_name,
    game_status: state.game.game_status,
    game_winner: state.game_winner,
  };
};

export default connect(mapStateToProps)(End);
