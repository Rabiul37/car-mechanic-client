import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="px-10 pt-10 pb-5 mt-4 bg-gray-100 w-3/4 m-auto flex justify-center rounded-xl">
          <img src={img} alt="Shoes" className=" w-40" />
        </div>
        <div className="card-body items-center text-center">
          <div>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-xl font-bold text-[#FF3811]">Price : {price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
