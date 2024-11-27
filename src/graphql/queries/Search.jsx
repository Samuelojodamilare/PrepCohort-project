import { gql } from "@apollo/client";

const SEARCH_ENGINE = gql`
  query Search(
    $page: Int
    $perPage: Int
    $searchItems: [SearchItemType]!
    $searchTerm: String!
    $sortBy: SortByType
    $sortIn: SortInType
    $examTypeIds: [Int]
  ) {
    searchEngine(
      page: $page
      perPage: $perPage
      searchItems: $searchItems
      searchTerm: $searchTerm
      sortBy: $sortBy
      sortIn: $sortIn
      examTypeIds: $examTypeIds
    ) {
      providers {
        total
        providers {
          id
          description
          title
        }
      }
      subjects {
        total
        subjects {
          id
          name
          description
          provider {
            id
            title
          }
          prices {
            amount
            courseDiscount {
              title
              couponCode
              description
              expiryDate
              percentage
              subjectPriceId
            }
            description
            id
            isActive
            numOfDuration
            typeOfDuration
          }
        }
      }
      topics {
        total
        topics {
          id
          name
          description
        }
      }
      questionBank {
        total
        tests {
          provider {
            title
          }
          id
          name
          noOfQuestions
          description
          headerInstruction
          isCancelable
          isRealTest
          isSearchable
          isTestQuestionPool
          isDeleted
          isInUse
          isCompleteSectionsValid
          preventReview
          retakeTimes
          retakePolicy
          status
          testType
          timeAlloted
        }
      }
    }
  }
`;

export default SEARCH_ENGINE;
