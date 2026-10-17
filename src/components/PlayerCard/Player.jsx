import userIcon from "../../assets/userIcon.png";
import flagIcon from "../../assets/flag.png";
import { useState } from "react";
const Player = ({ Playerd, setAvailableBalance, avaiableBalance }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice=parseInt(playerData.price.split("USD").join("").split(",").join("").split("$").join(""));

    if(avaiableBalance<playerPrice){
        alert("Not enough balance");
        return 
    }
    setIsSelected(true);
    setAvailableBalance(
      avaiableBalance - playerPrice
    );
  };
  return (
    <>
      <div className="card bg-base-100 shadow-sm p-4 ">
        <figure>
          <img
            src={Playerd["player_img"]}
            alt="Shoes"
            className="w-full  h-[300px] object-cover"
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img src={userIcon} alt="" />
            <h2 className="card-title ml-2">{Playerd.player_name}</h2>
          </div>{" "}
          <div className="justify-between flex mt-4 border-b-1 border-gray-400px pb-2 ">
            <div className="flex">
              <img src={flagIcon} className="w-[20px] h-[20px]" alt="" />
              <p className="ml-2">{Playerd.player_country}</p>
            </div>
            <button className="btn">{Playerd.playing_role}</button>
          </div>
          <div className="flex justify-between  font-bold">
            <span>Rating</span>
            <span>{Playerd.rating}</span>
          </div>
          <div className="flex justify-between  ">
            <span className="font-bold">{Player.batting_style} </span>
            <span>{Playerd.bowling_style}</span>
          </div>
          <div className="card-actions flex justify-between items-center">
            <p className="font-bold">Price: {Playerd.price}</p>
            <button disabled={isSelected} className="btn" onClick={() => {handleSelected(Playerd)}}>
              {isSelected === true ? "Selected" : "Chose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
