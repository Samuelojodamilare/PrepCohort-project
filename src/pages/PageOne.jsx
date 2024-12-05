import ApolloClientInstance from "../services/graphqlClient";
import { ApolloProvider } from "@apollo/client";

import Hero from "./../components/students/Hero";
import OurGoal from "./../components/students/OurGoal";
import Mobile from "./../components/students/Mobile";
import PracticeMode from "./../components/students/PracticeMode";
import AmazingFeatures from "./../components/students/AmazingFeatures";
import ExamPlatform from "./../components/students/ExamPlatform";
import WhyStudy from "./../components/students/WhyStudy";
import Category from "./../components/students/Category";
import InterwovenPractice from "./../components/students/InterwovenPractice";
import QualifiedInstructor from "./../components/students/QualifiedInstructor";
import AbundantQuestionBank from "./../components/students/AbundantQuestionBank";
import AISupport from "./../components/students/AISupport";
import Testimonial from "./../components/students/Testimonial";
import OurCourses from "../components/common/OurCourses";
import PracticeQuestion from "./../components/common/PracticeQuestion";

const PageOne = () => {
  return (
    <ApolloProvider client={ApolloClientInstance}>
      <Hero />
      <OurGoal />
      <Mobile />
      <PracticeMode />
      <AmazingFeatures />
      <OurCourses />
      <PracticeQuestion />
      <ExamPlatform />
      <WhyStudy />
      <Category />
      <InterwovenPractice />
      <QualifiedInstructor />
      <AbundantQuestionBank />
      <AISupport />
      <Testimonial />
    </ApolloProvider>
  );
};

export default PageOne;
