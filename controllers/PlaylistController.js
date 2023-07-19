// controllers/playlistController.js
const Playlist = require('../models/PlaylistModel');

const { playlists } = require('../repository/PlaylistRepo');

exports.createPlaylist = (req, res) => {
    const { name } = req.body;
    const newPlaylist = new Playlist(playlists.length + 1, name);
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
};

exports.getAllPlaylists = (req, res) => {
    res.json(playlists);
};


exports.getPlaylistById = (req, res) => {
    const { id } = req.params;
    const playlist = playlists.find((p) => p.id === Number(id));
    const { sorted } = req.query;



    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }

    if (sorted === 'true') {
        playlist.tracks.sort((a, b) => b.playCount - a.playCount);
    }

    res.json(playlist);
};

exports.addTrackToPlaylist = (req, res) => {
    const { id } = req.params;
    const { title, artist, album } = req.body;

    if (!title || !artist || !album) {
        return res.status(400).json({ error: 'Title, artist, and album are required' });
    }
    const playlist = playlists.find((p) => p.id === Number(id));
    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }
    const newTrack = {
        id: playlist.tracks.length + 1,
        title,
        artist,
        album,
    };
    playlist.tracks.push(newTrack);
    res.status(201).json(newTrack);
}

exports.deleteTrackFromPlaylist = (req, res) => {
    const { id, trackId } = req.params;
    const playlist = playlists.find((p) => p.id === Number(id));
    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }
    const trackIndex = playlist.tracks.findIndex((t) => t.id === Number(trackId));
    if (trackIndex === -1) {
        return res.status(404).json({ error: 'Track not found' });
    }
    playlist.tracks.splice(trackIndex, 1);
    res.status(204).end();
}

exports.playTrack = (req, res) => {
    const { id, trackId } = req.params;
    const playlist = playlists.find((p) => p.id === Number(id));
    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }
    const track = playlist.tracks.find((t) => t.id === Number(trackId));
    if (!track) {
        return res.status(404).json({ error: 'Track not found' });
    }
    track.playCount++;
    res.status(200).json(track);
}

