import { Category } from "@/app/interfaces";
import "./CategoryCard.css";

const CategoryCard = ({ img, name, desc }: Category) => {
  return (
    <div className="card ">
      <img src={img} alt={name} />
      <div className="text">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
