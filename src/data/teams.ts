import { apiCall } from '../utils/networking';

let cachedAllTeamsList: Promise<any[]>;
export async function getAllTeams(): Promise<Promise<any[]>> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams');

  return await cachedAllTeamsList;
}

const cachedTeamRecords: Record<string, any> = {};

export async function getTeamById(id: string): Promise<any> {
  let cached = cachedTeamRecords[id];
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`);
  return await cached;
}
