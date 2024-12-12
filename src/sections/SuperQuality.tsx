import shoe8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section id="about-us">
      <div className=" flex max-lg:flex-col justify-between items-center gap-10 w-full max-container">
        <div className="flex flex-col flex-1 items-start gap-6">
          <h1 className="text-4xl capitalize font-bold lg:max-w-lg font-palanquin">
            We provide you <span className="text-coral-red">super quality</span>{" "}
            shoes
          </h1>
          <p className="lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
            Ensuring premium comfort and style, our meticuliously crafted
            footware is designed to elevate your experience, providing you with
            unmatched quality, innovation and a touch of elegance.
          </p>
          <p className="max-w-lg text-lg font-montserrat text-slate-gray leading-7">
            Our dedication to detail and exellence ensures your satisfaction.
          </p>
          <button className="px-7 py-4 bg-coral-red rounded-full text-white">
            View Details
          </button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
