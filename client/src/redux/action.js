import { SEARCH_DRIVERS, FILTER_TEAMS, ORDER_DIVERS } from '../types';

// Acción para buscar conductores
export const searchDrivers = (name) => ({
    type: SEARCH_DRIVERS,
    payload: name,
  });

export const filterTeams = (team) => ({
    type: FILTER_TEAMS,
    payload: name,
});

export const orderDrivers = (order) => ({
    type: ORDER_DIVERS,
    payload: name,
});
  
