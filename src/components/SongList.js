import React from 'react';
import Player from './Player';

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div key={index} className="song mb-4">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <Player songUrl={song.url} />
          <a
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
            href={song.url}
            download
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default SongList;
