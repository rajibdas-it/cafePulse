import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";
const About = () => {
  return (
    <div className="min-h-screen px-5 md:px-32 flex flex-col items-center justify-center bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>
      <div>
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <h2>What Makes Our Coffee Special?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            ex dicta architecto, labore porro facilis enim ullam odio
            reiciendis, mollitia at corrupti quo accusamus neque voluptates
            similique esse tempora aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolores voluptas ducimus nulla cum fugiat voluptatibus. Unde beatae
            eligendi fuga.
          </p>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
