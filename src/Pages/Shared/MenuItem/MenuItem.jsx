
const MenuItem = (item) => {
    const {name, recipe, price, image} = item.item;
  return (
    <div>
      
            <img className="w-100 h-70" src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
  )
}

export default MenuItem