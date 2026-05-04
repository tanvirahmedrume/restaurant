
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-4/12 mb-2 items-center text-center mx-auto">
        <p className="text-center text-yellow-600 mt-10 uppercase ">---{subHeading}---</p>
        <h2 className="text-center text-3xl uppercase border-y-1 border-gray-200 py-2 ">{heading}</h2>
    </div>
  )
}

export default SectionTitle