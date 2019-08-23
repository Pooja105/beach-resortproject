import React from "react";
import Roomsfilter from "./Roomsfilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import { withRoomConsumer } from "../context";
import Loading from "../components/Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Roomsfilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import Roomsfilter from "./Roomsfilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "../components/Loading";
// import Room from "./Room";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//           console.log(value)
//           const { sortedRooms,rooms,loading} = value;
//           if(loading) {
//               return <Loading />
//           }
//         return(
//         <div>
//           Hello from rooms container
//           <Roomsfilter rooms={rooms} />
//           <RoomsList  sortedRooms={sortedRooms}/>
//         </div>
//         )
//       }}
//     </RoomConsumer>
//   );
// }
