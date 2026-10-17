import { use } from "react";
import Player from "../PlayerCard/Player";

const AvailablePlayers = ({ playerPromis,setAvailableBalance,avaiableBalance,setPurchasedPlayers,purchasedPlayers }) => {
  const playerData = use(playerPromis);
  console.log(playerData);
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            playerData.map(Playerd=> <Player key={Playerd.id} Playerd={Playerd} avaiableBalance={avaiableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></Player>)
        }
       
      </div>
    </>
  );
};

export default AvailablePlayers;
