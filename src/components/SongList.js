import React from 'react';
import Player from './Player';

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div key={index} className="song mb-4 text-cyberpunkPurple hover:text-cyberpunkGreen transition-colors">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <Player songUrl={song.url} />
          <a
            className="bg-cyberpunkPink hover:bg-cyberpunkBlue text-white font-bold py-2 px-4 rounded mt-2 inline-block transition-transform transform hover:scale-110"
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
