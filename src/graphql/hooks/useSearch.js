import { useLazyQuery, useQuery } from "@apollo/client";
import SEARCH_ENGINE from "../queries/Search";
import { ERROR_POLICY, FETCH_POLICY } from "../../interfaces/index";
import SearchFilterBuilder from "../../libs/search-engine-filters";

export const useSearchService = ({
  fetchPolicy = FETCH_POLICY.CACHE_AND_NETWORK,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}) => {
  const searchFilter = SearchFilterBuilder.getInstance();

  const useSearch = useQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  const [getSearch, lazySearchState] = useLazyQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  const runSearch = async (customVariables) => {
    const searchParams = searchFilter.build();

    const res = await getSearch({
      variables: { ...searchParams, ...customVariables },
      errorPolicy: ERROR_POLICY.ALL,
    });

    return res;
  };

  return {
    useSearch,
    useLazySearch: { getSearch, ...lazySearchState },
    runSearch,
  };
};

export const useSearchEngine = ({
  fetchPolicy = FETCH_POLICY.CACHE_AND_NETWORK,
  notifyOnNetworkStatusChange = true,
  ...restOfProps
}) => {
  const [getSearchEngine, lazySearchState] = useLazyQuery(SEARCH_ENGINE, {
    fetchPolicy,
    notifyOnNetworkStatusChange,
    ...restOfProps,
  });

  return {
    getSearchEngine,
    ...lazySearchState,
  };
};

export default useSearchService;
