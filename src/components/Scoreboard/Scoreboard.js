import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from '../AddPlayerForm';


function compare_score(player_a, player_b) {
  return player_b.score - player_a.score; // Should return a negative or positive number, to pass into the sort()
}
function compare_name(a, b){
  return a.name.localeCompare(b.name, 'en', {ignorePunctuation: true}) // Should return a negative or positive number, to pass into the sort()
}

export default function Scoreboard() {
    const [players, set_players] = useState([
      { id: 1, name: "Violeta", score: 11 },
      { id: 2, name: "Eszter", score: 14 },
      { id: 3, name: "Jeroen v2", score: 4 },
      { id: 4, name: "Lisa", score: 42 },
    ]);

    // Add player
    const addPlayer = (name) => {
        console.log('Add new')
        const newPlayer = {
          id: players.length + 1,
          name: name,
          score: 0
        }
        console.log(newPlayer)
        
        set_players(players.concat(newPlayer))
    }


    const [sort_by, set_sort_by] = useState("score");
    // Get value from FORM
    const change_sorting = event => {
      console.log("new sort order:", event.target.value);
      set_sort_by(event.target.value);
    };
    // Set player SORT
    const players_sorted = sort_by === "score" 
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name)

    // Increment scores
    const incrementScore = (id) => {
      const newPlayers = players.map(player => {
        if (player.id === id) {
            player.score++
        }
        return player;
    });
      set_players(newPlayers)
    }

    const resetScores = () => {
      const newPlayers = players.map(player => {
        player.score = 0;
        return player;
    });
      set_players(newPlayers)
    }

    const randomScores = () => {
      const newPlayers = players.map(player => {
        player.score = Math.round(Math.random() * 100)
        return player;
    });
      set_players(newPlayers)
    }

    return (
      <div className="Scoreboard">
        <h2>Scoreboard</h2>
        <p>
          Sort order:{" "}
          <select onChange={change_sorting}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
          </select>
        </p>
        <p>
          <button onClick={resetScores}>Reset All Scores</button>
          <button onClick={randomScores}>Randomize All Scores</button>
        </p>
        <p>Player's scores:</p>
        <ul>
        {players_sorted.map(player => (
          <Player key={player.id} id={player.id} name={player.name} score={player.score} incrementScore={incrementScore} />
          )
        )
      }
      </ul>
      <p>
        <AddPlayerForm add={addPlayer}/>
      </p>
      </div>
  );
}
