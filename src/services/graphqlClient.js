import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from "@apollo/client/link/error";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        announcementComments: {
          merge: true,
        },
        interactionQuestions: {
          merge: true,
        },
      },
    },
  },
});

// 'https://console.prepcohort.com/graphiql'

export const frontendUrl = "https://app.prepcohort.com";
export const consoleUrl = "https://console.prepcohort.com";

// const baseUrl = "study4as-dev.fly.dev";
const baseUrl = "console.prepcohort.com";

const httpLink = createHttpLink({
  uri: `https://${baseUrl}/api`,
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 30000,
    jitter: true,
  },
  attempts: {
    max: 2,
    retryIf: (error, _operation) => !!error,
  },
});

// console.log(process.env.REACT_APP_API_Token, 1);

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    // Check for 401
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === "TokenExpiredError: jwt expired") {
      }
      if (message === "Not authorized.") {
      }
    });
  }
});

const link = ApolloLink.from([errorLink, retryLink, httpLink]);

const ApolloClientInstance = new ApolloClient({
  link,
  cache,
});

export default ApolloClientInstance;
