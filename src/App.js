import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header/Header";
import PlayerCard from "./components/playerCard/PlayerCard";
import PlayerCart from "./components/playerCart/PlayerCart";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers] = useState([])
  const [cart, setCart] = useState([]);


  useEffect(() => {
    async function fetchPlayers() {
      await fetch('players.json')
        .then(res => res.json())
        .then(data => {
          setPlayers(data)
          console.log(data)
        })
    }
    fetchPlayers()
  }, [])


  const handleAddToClub = (selectedPlayer) => {
    console.log(selectedPlayer);
    let newCart = [];
    const exists = cart.find(player => player.id === selectedPlayer.id);
    if (!exists) {
      selectedPlayer.quantity = 1;
      newCart = [...cart, selectedPlayer];
    }
    else {
      //  toastify add korte hobe
    }

    setCart(newCart);

  }

  return (
    <div >
      <Header />

      <div className='home-container'>
        <div className="player-container">
          {
            players.length > 0 && players.map(player =>
              <PlayerCard key={player.id}
                player={player}
                handleAddToClub={handleAddToClub} />
            )
          }
          {/* <PlayerCard /> */}
        </div>
        <div className="cart-container">
          <PlayerCart cart={cart} />
        </div>

      </div>
    </div>
  );
}

export default App;
