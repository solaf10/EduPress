import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import AddsOn from "./components/AddsOn/AddsOn";
import Statistics from "./components/Statistics/Statistics";
import SpecialCourse from "./components/SpecialCourse/SpecialCourse";
import AcademyStart from "./components/AcademyStart/AcademyStart";

export default function Home() {
  return (
    <div className="home page">
      <Hero />
      <Categories />
      <FeaturedCourses />
      <AddsOn />
      <Statistics />
      <SpecialCourse />
      <AcademyStart />
    </div>
  );
}
