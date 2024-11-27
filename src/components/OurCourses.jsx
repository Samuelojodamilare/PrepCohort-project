import { layout } from "../style";
import { useSearchService } from "../graphql/hooks/useSearch";
import SearchFilterBuilder from "../libs/search-engine-filters";
import { useCallback, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourCourses from "./design/ourCourses";

const OurCourses = () => {
  const searchFilter = SearchFilterBuilder.getInstance();
  const { runSearch } = useSearchService({});
  const [searchEngineCourses, setSearchEngineCourses] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [Slider, setSlider] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-slick").then((module) => {
        setSlider(() => module.default);
      });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!Slider) return null;

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = useCallback(async () => {
    searchFilter.reset();
    searchFilter.addToSearchItems("SUBJECTS");
    searchFilter.setSearchTerm("");

    setError("");
    setLoading(true);
    try {
      let listingVariable = {
        perPage: 30,
        page: 1,
      };

      const { data, error: respError } = await runSearch({
        ...listingVariable,
      });

      if (respError) {
        console.log(respError, "respError");
      }

      const res = data.searchEngine; // No type annotation

      if (res) {
        setSearchEngineCourses({ subjects: res.subjects });
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching courses."); // Better error message
      setLoading(false);
    }
  }, [runSearch]);

  if (loading) {
    return <p className="mx-auto">Loading...</p>;
  } else if (searchEngineCourses && searchEngineCourses.subjects) {
    return (
      <section className={`${layout.section}`}>
        <div className={`${layout.container}`}>
          <h3 className="font-workSans text-black">Course (Recommended)</h3>
          <Slider {...settings}>
            {searchEngineCourses.subjects.subjects.map((item) => (
              <ourCourses
                key={item.id}
                label={item.name}
                institutionName={item.provider.title}
                id={item.id}
              />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
};

export default OurCourses;
