import { useState } from 'react';
import { Anime } from '../types/anime';

type SortField = 'title' | 'year' | 'seasons' | 'streamer' | 'status';
type SortDirection = 'asc' | 'desc';

interface AnimeTableProps {
  animeList: Anime[];
}

const AnimeTable = ({ animeList }: AnimeTableProps) => {
  const [sortField, setSortField] = useState<SortField>('title');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedAnimeList = [...animeList].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const getSortIndicator = (field: SortField) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' ? ' ↑' : ' ↓';
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'status-complete neon-blue';
      case 'Up to Date':
        return 'status-uptodate neon-green';
      case 'Dropped':
        return 'status-dropped neon-orange';
      case 'In Queue':
        return 'status-inqueue neon-purple';
      case 'Missing last Season':
        return 'status-missing neon-pink';
      default:
        return '';
    }
  };

  const getStreamerClass = (streamer: string) => {
    switch (streamer) {
      case 'Netflix':
        return 'streamer-netflix';
      case 'Crunchyroll':
        return 'streamer-crunchyroll';
      case 'Prime':
        return 'streamer-prime';
      case 'Hidive':
        return 'streamer-hidive';
      case 'N/A':
        return 'streamer-na';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="anime-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('title')}>
              <span className="neon-blue">Anime{getSortIndicator('title')}</span>
            </th>
            <th onClick={() => handleSort('year')}>
              <span className="neon-orange">Year{getSortIndicator('year')}</span>
            </th>
            <th onClick={() => handleSort('seasons')}>
              <span className="neon-purple">Seasons{getSortIndicator('seasons')}</span>
            </th>
            <th onClick={() => handleSort('streamer')}>
              <span className="neon-pink">Streamer{getSortIndicator('streamer')}</span>
            </th>
            <th onClick={() => handleSort('status')}>
              <span className="neon-green">Status{getSortIndicator('status')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAnimeList.map((anime) => (
            <tr key={anime.id}>
              <td>{anime.title}</td>
              <td>{anime.year}</td>
              <td>{anime.seasons}</td>
              <td className={getStreamerClass(anime.streamer)}>{anime.streamer}</td>
              <td className={getStatusClass(anime.status)}>{anime.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeTable;
