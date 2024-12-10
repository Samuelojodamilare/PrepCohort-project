import { useEffect } from "react";

const useIntersectionObserver = (targetSelector, animationClass) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const element = document.querySelectorAll(targetSelector);
    if (element.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("visibles", animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    element.forEach((el) => observer.observe(el));
    return () => {
      element.forEach((el) => observer.unobserve(el));
    };
  }, [targetSelector, animationClass]);
};

export default useIntersectionObserver;
