// supposed to be abstraction towards database
// however since It's module 2, I'll just use this
const Playlist = require('../models/PlaylistModel');


const playlists = [
    new Playlist(1, 'Coding Soundtrack', [
        {
            id: 1,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 1,
        },
        {
            id: 2,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 2,
        },
    ]),
    new Playlist(2, 'Chill', [
        {
            id: 3,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 200,
        },
        {
            id: 4,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 120,
        },
        {
            id: 5,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 150,
        },
        {
            id: 6,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 110,
        },
        {
            id: 7,
            title: 'The Less I Know The Better',
            artist: 'Tame Impala',
            album: 'Currents',
            playCount: 124,
        },
    ]),
];

module.exports = {
    playlists,
};
