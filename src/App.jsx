import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Works also with SSR as expected
const Card = lazy(() => import("./Card"));
const OurGoal = lazy(() => import("./components/OurGoal"));
const Mobile = lazy(() => import("./components/Mobile"));
const PracticeMode = lazy(() => import("./components/PracticeMode"));
const AmazingFeatures = lazy(() => import("./components/AmazingFeatures"));
const ExamPlatform = lazy(() => import("./components/ExamPlatform"));
const WhyStudy = lazy(() => import("./components/WhyStudy"));
const Category = lazy(() => import("./components/Category"));
const InterwovenPractice = lazy(() =>
  import("./components/InterwovenPractice")
);
const QualifiedInstructor = lazy(() =>
  import("./components/QualifiedInstructor")
);
const AbundantQuestionBank = lazy(() =>
  import("./components/AbundantQuestionBank")
);
const AISupport = lazy(() => import("./components/AISupport"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const OurCourses = lazy(() => import("./components/OurCourses"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<p>Loading section...</p>}>
        <OurGoal />
        <Mobile />
        <PracticeMode />
        <AmazingFeatures />
        <OurCourses />
        <ExamPlatform />
        <WhyStudy />
        <Category />
        <InterwovenPractice />
        <QualifiedInstructor />
        <AbundantQuestionBank />
        <AISupport />
        <Testimonial />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
