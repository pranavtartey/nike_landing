const Button = ({ label, iconUrl }: { label: string; iconUrl: any }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white border-coral-red bg-coral-red">
      {label}
      <img
        className="ml-2 rounded-full w-5 h-5"
        src={iconUrl}
        alt="arrow right icon"
      />
    </button>
  );
};

export default Button;
