const FoodCard = ({ items }) => {
  const { name, image, price, recipe } = items;

  return (
    <div className="w-full">
      <div className="card bg-base-100 w-full shadow-md hover:shadow-xl transition duration-300">
        
        {/* Image */}
        <figure className="relative">
          <img
            src={image}
            alt={name}
            className="h-56 w-full object-cover"
          />

          {/* Price Badge */}
          <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-md text-sm">
            ${price}
          </span>
        </figure>

        {/* Content */}
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{name}</h2>

          <p className="text-gray-500 text-sm line-clamp-2">
            {recipe}
          </p>

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-outline btn-primary border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;