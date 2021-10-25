/* eslint-disable */

import { FC, useCallback, useMemo } from 'react';

interface Item {
  id: string;
  name: string;
}

const fetchItems = (siteId: string, query: string): Promise<Item> =>
  fetch(`https://api.mercadolibre.com/sites/${siteId}/search?q=${query}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error.statusText));

interface ItemListProps {
  siteId: string;
  query: string
}

const ItemList: FC<ItemListProps> = ({ siteId, query }) => {
  //const searchItems = useCallback(() => fetchItems(siteId, query), [siteId, query]);
  //const searchItems = useMemo(() => fetchItems(siteId, query), [siteId, query]);
  return null;
}
