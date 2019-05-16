var  playlist= { Rahman: 'Urvasi' }
function updatePlaylist(playlist,artistName,songTitle){
  Object.assign({}, playlist, { artistName: [songTitle] });
}