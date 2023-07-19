const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/PlaylistController');

// curl example
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Coding Soundtrack"}' http://localhost:3000/api/v1/playlists
router.post('/playlists', playlistController.createPlaylist);
// curl -X GET http://localhost:3000/api/v1/playlists
router.get('/playlists', playlistController.getAllPlaylists);
// curl -X GET http://localhost:3000/api/v1/playlists/1?sorted=true
router.get('/playlists/:id', playlistController.getPlaylistById);
// curl -X POST -H "Content-Type: application/json" -d '{"title":"The Less I Know The Better", "artist":"Tame Impala", "album":"Currents"}' http://localhost:3000/api/v1/playlists/1/tracks
router.post('/playlists/:id/tracks', playlistController.addTrackToPlaylist);
// curl -X DELETE http://localhost:3000/api/v1/playlists/1/tracks/1
router.delete('/playlists/:id/tracks/:trackId', playlistController.deleteTrackFromPlaylist);
// curl -X GET http://localhost:3000/api/v1/playlists/1/tracks/1/
router.get('/playlists/:id/tracks/:trackId', playlistController.playTrack);


module.exports = router;
