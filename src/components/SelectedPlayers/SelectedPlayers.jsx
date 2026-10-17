import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers,removePlayer }) => {
  return (
    <>
      <div className="w-[1200px] mx-auto">
        {purchasedPlayers.map((player) => (
          <SelectedCard key={player.id} removePlayer={removePlayer} player={player} ></SelectedCard>
        ))}
      </div>
    </>
  );
};

export default SelectedPlayers;
