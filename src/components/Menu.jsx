import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.jpg";
import img5 from "../assets/img/menu5.jpg";
import img6 from "../assets/img/menu6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Expresso" value="5" />
        <MenuCard img={img2} title="Cappuccino" value="10" />
        <MenuCard img={img3} title="Latte" value="10" />
        <MenuCard img={img4} title="Americano" value="12" />
        <MenuCard img={img5} title="Macchiato" value="15" />
        <MenuCard img={img6} title="Doppio" value="10" />
      </div>
    </div>
  );
};

export default Menu;
