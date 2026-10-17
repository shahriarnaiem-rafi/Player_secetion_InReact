import { use } from "react";
import userIcon from "../../assets/userIcon.png";
import flagIcon from "../../assets/flag.png";
const AvailablePlayers = ({ playerPromis }) => {
  const playerData = use(playerPromis);
  console.log(playerData);
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            playerData.map(Player=> <div className="card bg-base-100 shadow-sm p-4 ">
          <figure>
            <img
              src={Player["player_img"]}
              alt="Shoes"
              className="w-full  h-[300px] object-cover"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userIcon} alt="" />
              <h2 className="card-title ml-2">{Player.player_name}</h2>
            </div>{" "}
            <div className="justify-between flex mt-4 border-b-1 border-gray-400px pb-2 ">
              <div className="flex">
                <img src={flagIcon} className="w-[20px] h-[20px]" alt="" />
                <p className="ml-2">{Player.player_country}</p>
              </div>
              <button className="btn">{Player.playing_role}</button>
            </div>
            <div className="flex justify-between  font-bold">
                <span>Rating</span>
                <span>{Player.rating}</span>
            </div>
            <div className="flex justify-between  ">
                <span className="font-bold">{Player.batting_style} </span>
                <span>{Player.bowling_style}</span>
            </div>



            <div className="card-actions flex justify-between items-center">
                <p className="font-bold">Price: {Player.price}</p>
              <button className="btn ">Chose Now</button>
            </div>
          </div>
        </div>)
        }
       
      </div>
    </>
  );
};

export default AvailablePlayers;
