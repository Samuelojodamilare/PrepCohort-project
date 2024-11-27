export const GraphiqlProps = {
  variables: null,
  fetchPolicy: FETCH_POLICY.CACHE_FIRST,
  onCompleted: (e) => {
    console.log("completed:", e);
  },
  notifyOnNetworkStatusChange: false,
};

export const ERROR_POLICY = {
  ALL: "all",
  NONE: "none",
  IGNORE: "ignore",
};

export const FETCH_POLICY = {
  CACHE_FIRST: "cache-first",
  CACHE_ONLY: "cache-only",
  CACHE_AND_NETWORK: "cache-and-network",
  NETWORK_ONLY: "network-only",
  NO_CACHE: "no-cache",
  STANDBY: "standby",
};

export const SEARCH_CATEGORIES = {
  COURSES: "Courses",
  INSTITUTION: "Institutions",
  TOPICS: "Topics",
  LESSONS: "Lessons",
  QUESTION_BANK: "Question Banks",
};

export const SearchItemType = {
  LESSONS: "LESSONS",
  PROVIDERS: "PROVIDERS",
  SUBJECTS: "SUBJECTS",
  TOPICS: "TOPICS",
  QUESTION_BANK: "QUESTION_BANK",
};

export const SearchInputType = {
  page: 1,
  perPage: 10,
  searchItems: [SearchItemType],
  searchTerm: "",
  sortBy: null,
  sortIn: null,
};

export const SearchEngineResult = {
  providers: {
    providers: [],
    total: 0,
  },
  subjects: {
    subjects: [],
    total: 0,
  },
  topics: {
    topics: [],
    total: 0,
  },
  questionBank: {
    tests: [],
    total: 0,
  },
};

export const Provider = {
  description: "",
  id: "",
  masterGroupId: "",
  title: "",
};

export const SubTopic = {
  description: "",
  id: "",
  name: "",
};

export const Topic = {
  id: "",
  description: "",
  name: "",
  subTopics: [],
};

export const Visibility = {
  id: 0,
  name: "",
  visibleTo: "ALL",
};

export const QuestionBank = {
  id: "",
  name: "",
  noOfQuestions: 0,
  description: "",
  headerInstruction: "",
  isCancelable: false,
  isRealTest: false,
  isSearchable: false,
  isTestQuestionPool: false,
  isDeleted: false,
  isInUse: false,
  isCompleteSectionsValid: false,
  preventReview: false,
  retakeTimes: 0,
  retakePolicy: "",
  status: "",
  testType: "",
  timeAlloted: 0,
  provider: {
    title: "",
  },
};

export const Subject = {
  id: "",
  name: "",
  description: "",
  syllabusId: 0,
  oneOnOneMeetingFee: "",
};

export const SubjectFull = {
  ...Subject,
  provider: Provider,
  topics: [],
  prices: [],
};

export const SubjectPriceObj = {
  amount: 0,
  courseDiscount: {},
  description: "",
  id: 0,
  isActive: false,
  numOfDuration: 0,
  typeOfDuration: "",
};

export const CourseDiscountObj = {
  couponCode: "",
  description: "",
  expiryDate: "",
  percentage: "",
  subjectPriceId: "",
  title: "",
};
