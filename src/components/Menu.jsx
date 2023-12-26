import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/menu1.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <div>
        <MenuCard img={img1} title="Expresso" value="500" />
      </div>
    </div>
  );
};

export default Menu;
