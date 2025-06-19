/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = rooms => {
  const roomsToVisit = new Set();
  for (let i = 0; i < rooms.length; i++) {
    roomsToVisit.add(i);
  }
  return helper(rooms, 0, roomsToVisit);
};

const helper = (rooms, index, roomsToVisit) => {
  
  roomsToVisit.delete(index);

  if (roomsToVisit.size === 0) {
    return true;
  }

  for (let roomIndex of rooms[index]) {
    if (roomsToVisit.has(roomIndex)) {
      if (helper(rooms, roomIndex, roomsToVisit)) {
        return true;
      }
    }
  }
  return false;
};


