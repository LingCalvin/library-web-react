import { useLocation } from 'react-router-dom';

/**
 * This hook gives access to the specified search parameter.
 *
 * @param param - The search parameter
 * @returns The value of the search parameter if it exists. `null` otherwise.
 */
export default function useSearchParam(param: string) {
  const { search } = useLocation();
  return new URLSearchParams(search).get(param);
}
