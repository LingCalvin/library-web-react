import { useLocation } from 'react-router-dom';

export default function useSearchParam(param: string) {
  const { search } = useLocation();
  return new URLSearchParams(search).get(param);
}
