const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-full md:w-4/12 mb-2 text-center mx-auto">
      <p className="text-yellow-600 mt-10 uppercase">
        --- {subHeading} ---
      </p>
      <h2 className="text-3xl uppercase border-y border-gray-200 py-2">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;