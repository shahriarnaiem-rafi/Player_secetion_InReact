import { use } from "react";

const AvailablePlayers = ({playerPromis}) => {
    const playerData=use(playerPromis);
    console.log(playerData)
    return (
        <>
        
            avail avails players
        </>
    );
};

export default AvailablePlayers;