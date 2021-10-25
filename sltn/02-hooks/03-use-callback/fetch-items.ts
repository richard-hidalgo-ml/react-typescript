import { useCallback } from 'react';

const fetchItems = (siteId: string, query: string) => fetch(`https://api.mercadolibre.com/sites/${siteId}/search?q=${query}`)
  .then((response) => response.json())
  .catch((error) => console.error('Error:', error.statusText));

export const useItemSearch = async (siteId: string, query: string) => {
  const searchItems = useCallback(() => fetchItems(siteId, query), [siteId, query]);
  return searchItems;
};
