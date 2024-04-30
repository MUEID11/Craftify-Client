import { Helmet } from "react-helmet";
import logo from "./../../public/vitelogo.png";

const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <Helmet><title>About</title></Helmet>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-left">
        <div className="md:w-1/2">
          <img
            className="mx-auto h-auto w-full rounded-lg"
            src={logo}
            alt="Residential Building"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to our website! We are dedicated to providing high-quality
            residential buildings that cater to your needs and lifestyle.
          </p>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Our mission is to build homes that not only meet the highest
              standards of quality and craftsmanship but also reflect the unique
              personality and preferences of each homeowner.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-600">
              Our vision is to create vibrant communities where residents feel a
              sense of belonging and pride in their homes, surrounded by
              amenities and green spaces that enhance their quality of life.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Our Values
            </h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Quality craftsmanship</li>
              <li>Customer satisfaction</li>
              <li>Community engagement</li>
              <li>Sustainability</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
