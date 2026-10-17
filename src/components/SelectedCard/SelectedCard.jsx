
const SelectedCard = ({player,removePlayer}) => {
  const handleRemove=()=>{
    removePlayer(player);
  }
  return (
    <>
      <div className="border-3 mt-2 border-gray-500 flex justify-between items-center rounded-xl">
        <div className="flex items-center">
          <img src={player.player_img} alt="img" className="h-[50px] w-[50px] rounded-xl" />
          <div className="ml-2">
            <h1>{player.player_name}</h1>
            <p className="text-xs"> {player.playing_role}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SelectedCard;
