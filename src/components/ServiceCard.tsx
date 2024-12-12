const ServiceCard = ({
  imgURL,
  label,
  subtext,
}: {
  imgURL: string;
  label: string;
  subtext: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg py-10 px-5 gap-4 justify-center sm:min-w-[350px] sm:w-[350px] w-full shadow-3xl ">
      <div>
        <img src={imgURL} className="bg-coral-red rounded-full p-2" />
      </div>
      <h3 className="font-palanquin text-lg font-semibold">{label}</h3>
      <p className="text-slate-gray font-palanquin text-base leading-6 break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
