const Subscribe = () => {
  return (
    <section id="contact-us" className="flex justify-around items-center gap-4 max-lg:flex-col">
      <h2 className="capitalize flex-1 text-4xl font-semibold font-palanquin max-w-lg">
        sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <form className="flex-1 border border-slate-gray p-2 rounded-full max-w-lg flex justify-between max-lg:w-full">
        <input className="flex-1 outline-none" placeholder="subscribe@nike.com" />
        <button className="bg-coral-red px-4 py-2 rounded-full text-white tracking-wide font-semibold">Sign up</button>
      </form>
    </section>
  );
};

export default Subscribe;
