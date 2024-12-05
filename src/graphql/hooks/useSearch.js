import { useLazyQuery, useQuery } from "@apollo/client";
import SEARCH_ENGINE from "../queries/Search";
import SearchFilterBuilder from "../../libs/search-engine-filters";

export const useSearchService = ({
  fetchPolicy = "cache-and-network",
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
      errorPolicy: "all",
    });

    return res;
  };

  return {
    useSearch,
    useLazySearch: { getSearch, ...lazySearchState },
    runSearch,
  };
};

// export const useSearchEngine = ({
//   fetchPolicy = "cache-and-network",
//   notifyOnNetworkStatusChange = true,
//   ...restOfProps
// }) => {
//   const [getSearchEngine, lazySearchState] = useLazyQuery(SEARCH_ENGINE, {
//     fetchPolicy,
//     notifyOnNetworkStatusChange,
//     ...restOfProps,
//   });

//   return {
//     getSearchEngine,
//     ...lazySearchState,
//   };
// };

export default useSearchService;
