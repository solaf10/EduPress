import CategoryCard from "@/components/CategoryCard";
import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      id: 1,
      img: "/assets/images/category-1.svg",
      name: "Art & Design",
      desc: "38 Courses",
    },
    {
      id: 2,
      img: "/assets/images/category-2.svg",
      name: "Development",
      desc: "38 Courses",
    },
    {
      id: 3,
      img: "/assets/images/category-3.svg",
      name: "Communication",
      desc: "38 Courses",
    },
    {
      id: 4,
      img: "/assets/images/category-4.svg",
      name: "Videography",
      desc: "38 Courses",
    },
    {
      id: 5,
      img: "/assets/images/category-5.svg",
      name: "Marketing",
      desc: "38 Courses",
    },
    {
      id: 6,
      img: "/assets/images/category-6.svg",
      name: "Content writing",
      desc: "38 Courses",
    },
    {
      id: 7,
      img: "/assets/images/category-7.svg",
      name: "Finance",
      desc: "38 Courses",
    },
    {
      id: 8,
      img: "/assets/images/category-8.svg",
      name: "Science",
      desc: "38 Courses",
    },
  ];
  const cards = categories.map((category) => (
    <div className="card-holder col-lg-3 col-md-4 " key={category.id}>
      <CategoryCard
        img={category.img}
        name={category.name}
        desc={category.desc}
      />
    </div>
  ));
  return (
    <div className="categories">
      <div className="container">
        <div className="top-title">
          <div className="holder">
            <h2>Top Categories</h2>
            <p>Explore our Popular Categories</p>
          </div>
          <button className="all-btn">All Categories</button>
        </div>
        <div className="cards row">{cards}</div>
        <button className="all-btn">All Categories</button>
      </div>
    </div>
  );
};

export default Categories;
