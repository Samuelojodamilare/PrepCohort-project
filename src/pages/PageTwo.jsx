import { Suspense, lazy } from "react";
import ApolloClientInstance from "../services/graphqlClient";
import { ApolloProvider } from "@apollo/client";
import Hero from "../components/school/Hero";
import Offer from "../components/school/Offer";
import FacilitatedTeaching from "../components/school/FacilitatedTeaching";
import InterwovenCourses from "../components/school/InterwovenCourses";
import MultipleDevice from "../components/school/MultipleDevice";
import WhyPrepcohort from "../components/school/WhyPrepcohort";
import QuestionBankPage from "../components/school/QuestionBankPage";
import StaffAppointment from "../components/school/StaffAppointment";
import MoreStudent from "../components/school/MoreStudent";
import EffortlessGrading from "../components/school/EffortlessGrading";
import Testimonial from "../components/school/Testimonial";
import Statistics from "../components/school/Statistics";

const PageTwo = () => {
  return (
    <ApolloProvider client={ApolloClientInstance}>
      <Hero />
      <Offer />
      <FacilitatedTeaching />
      <InterwovenCourses />
      <MultipleDevice />
      <WhyPrepcohort />
      <Statistics />
      <QuestionBankPage />
      <StaffAppointment />
      <MoreStudent />
      <EffortlessGrading />
      <Testimonial />
    </ApolloProvider>
  );
};

export default PageTwo;
