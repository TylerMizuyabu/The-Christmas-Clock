var   songList = ['carol-of-the-bells.mp3','we-wish-you-a-merry-christmas.mp3',
  'deck-the-halls.mp3',
  'joy-to-the-world.mp3',
  'jingle-bell-piano.mp3',
  'o-christmas-tree.mp3',
  'silent-night-piano.mp3' ];


function loadSong(){
    console.log('loading song');
    let i = Math.floor(Math.random()*this.songList.length)
    if (i == this.songList.length){
      i --;
    }
    
    document.getElementById('song').setAttribute('src','./assets/audio/'+this.songList[i]);
    document.getElementById('musician').load();
    document.getElementById('musician').play();
};