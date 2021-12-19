import { AxiosResponse } from 'axios';

import { instance } from 'api/apiConfig';

export type addNewDeckType = {
  name: 'mine';
};

export const decksAPI = {
  fetchDecks() {
    return instance.get<any, AxiosResponse<any>>('cards/pack');
  },
  addNewDeck(params: addNewDeckType) {
    return instance.post<addNewDeckType, AxiosResponse<any>>('cards/pack', params);
  },

  removeDeck(id: string) {
    return instance.delete<string, any>(`cards/pack/${id}`);
  },

  updateDeck(id: string) {
    return instance.put<string, any>('cards/pack', { id });
  },
};
