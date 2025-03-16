import { Anime, StreamerType, StatusType } from '../types/anime';

// Define the type for anime data without IDs
type AnimeWithoutId = Omit<Anime, 'id'>;

// Anime data without IDs - they will be generated at runtime
export const animeDataWithoutIds: AnimeWithoutId[] = [
  {
    title: 'Candy Candy',
    year: 1976,
    seasons: 1,
    streamer: 'N/A' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Saint Seiya',
    year: 1986,
    seasons: 3,
    streamer: 'N/A' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Seinto Seiya: Meiô Hâdesu jûnikyû-hen',
    year: 2002,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Dragon Ball',
    year: 1995,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Dragon Ball Z',
    year: 1996,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Dragon Ball GT',
    year: 1996,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Inuyasha',
    year: 2000,
    seasons: 1,
    streamer: 'Netflix' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Ranma ½',
    year: 1989,
    seasons: 1,
    streamer: 'Netflix' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Attack on Titan',
    year: 2013,
    seasons: 4,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Demon Slayer',
    year: 2019,
    seasons: 4,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Up to Date' as StatusType
  },
  {
    title: 'My Hero Academia',
    year: 2016,
    seasons: 8,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Dropped' as StatusType
  },
  {
    title: 'One Punch Man',
    year: 2015,
    seasons: 2,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Dropped' as StatusType
  },
  {
    title: 'Jujutsu Kaisen',
    year: 2020,
    seasons: 2,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Up to Date' as StatusType
  },
  {
    title: 'Spy x Family',
    year: 2022,
    seasons: 2,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Up to Date' as StatusType
  },
  {
    title: 'Vinland Saga',
    year: 2019,
    seasons: 2,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'In Queue' as StatusType
  },
  {
    title: 'Made in Abyss',
    year: 2017,
    seasons: 2,
    streamer: 'Prime' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Chainsaw Man',
    year: 2022,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Up to Date' as StatusType
  },
  {
    title: 'Ronin Warriors',
    year: 1998,
    seasons: 1,
    streamer: 'N/A' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'My Dress-up Darling',
    year: 2022,
    seasons: 1,
    streamer: 'Crunchyroll' as StreamerType,
    status: 'Up to Date' as StatusType
  },
  {
    title: 'Violet Evergarden',
    year: 2018,
    seasons: 1,
    streamer: 'Netflix' as StreamerType,
    status: 'Complete' as StatusType
  },
  {
    title: 'Orb: On the Movements of the Earth',
    year: 2024,
    seasons: 1,
    streamer: 'Netflix' as StreamerType,
    status: 'Ongoing' as StatusType
  }
];

// Generate anime data with IDs
export const animeData: Anime[] = animeDataWithoutIds.map((anime, index) => ({
  id: index + 1,
  ...anime
}));
