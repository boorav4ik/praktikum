import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

interface ReadOnlyURLSearchParams extends URLSearchParams {
  append: never;
  set: never;
  delete: never;
  sort: never;
}

export function useSearchParams() {
  const { search } = useLocation();

  return useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );
}
