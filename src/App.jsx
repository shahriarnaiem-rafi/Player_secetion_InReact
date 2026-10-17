import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
  const playerPromis = fetchPlayers();

const App = () => {
  const [toggle, setToggole] = useState(true);

  const [avaiableBalance, setAvailableBalance]=useState(100000);
  const [purchasedPlayers,setPurchasedPlayers]=useState([]);
  const removePlayer=(p)=>{
    const filterdata=purchasedPlayers.filter(ply=> ply.id!==p.id);
    setPurchasedPlayers(filterdata)
    setAvailableBalance(avaiableBalance + parseInt(p.price.split("USD").join("").split(",").join("").split("$").join("")))
  }
  return (
    <>
      <Navbar avaiableBalance={avaiableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between  items-center">
        <h1 className="font-bold text-2xl">{toggle===true? "Available Players":`Selected Players ${purchasedPlayers.length}/6`}</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggole(true)}
            className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0  ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggole(false)}
            className={`py-3  px-4 border-1 border-gray-400 rounded-r-2xl border-l-0  ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}  playerPromis={playerPromis} avaiableBalance={avaiableBalance} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
