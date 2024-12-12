import offer from "../assets/images/offer.svg";
import rightArrow from "../assets/icons/arrow-right.svg";
const SpecialOffer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col gap-8 justify-center items-start">
        <h1 className="capitalize text-4xl font-palanquin font-bold">
          <span className="text-coral-red">special</span> offer
        </h1>
        <p className="text-lg leading-7 text-slate-gray xl:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparellel value that sets apart.
        </p>
        <p className="text-lg leading-7 text-slate-gray xl:max-w-lg">
          Navigate a realm of possibilities designed to fufill your unique
          desires, surpassing the loftist expectations. Your with us is nothing
          short of excaptional
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="flex items-center justify-center gap-4 bg-coral-red px-8 py-4 rounded-full text-white tracking-wide text-lg ">
            Shop now
            <img src={rightArrow} alt="right-arrow" />
          </button>
          <button className="px-10 py-4 rounded-full tracking-wide border border-slate-gray text-slate-gray">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
