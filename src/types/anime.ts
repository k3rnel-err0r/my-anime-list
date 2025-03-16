export type StreamerType = 
  | 'Netflix'
  | 'Crunchyroll'
  | 'Prime'
  | 'Hidive'
  | 'N/A';

export type StatusType =
  | 'Complete'
  | 'Up to Date'
  | 'Dropped'
  | 'In Queue'
  | 'Missing last Season'
  | 'Ongoing';

export interface Anime {
  id: number;
  title: string;
  year: number;
  seasons: number;
  streamer: StreamerType;
  status: StatusType;
}
