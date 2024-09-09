import React from 'react';
import SongList from '../components/SongList';

const songs = [
  {
    title: 'Dreamer Track 1',
    url: '/songs/dreamer-track1.mp3',
  },
  {
    title: 'Dreamer Track 2',
    url: '/songs/dreamer-track2.mp3',
  },
];

const HomePage = () => {
  return (
    <div className="homepage container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">StRaNgErDrEaMeR's Music</h1>
      <SongList songs={songs} />
    </div>
  );
};

export default HomePage;
