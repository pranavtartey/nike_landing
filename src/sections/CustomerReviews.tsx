import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="capitalize font-palanquin text-center text-4xl font-bold">
        what our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Hear genuin stories from our satisfied customers about their excaptional
        experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

{
  /* <div className="flex bg-yellow-300">
  <div className="h-[20px] w-64 bg-green-300"></div>
  <div className="h-[20px] w-32 bg-red-300"></div>
</div> */
}
