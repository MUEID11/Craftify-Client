import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import contactus from "./../assets/contactus.json"
const Contact = () => {
  return (
    <div className=" grid shadow-sm m-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Want to buy a estate? Go ahead.
          </div>
        </div>
        <div>
          <Lottie animationData={contactus}></Lottie>
        </div>
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            placeholder="message"
            className="w-full p-3 border rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full btn bg-blue-500 text-white border-none p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
