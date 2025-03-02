const IntroSection = ({ data }) => {
    const { title, description } = data;
  
    return (
      <div className="px-32 py-32 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container px-10 mx-auto text-center">
          <h2 className="mb-6 md:text-[42px] text-[30px] font-bold text-gray-800">{title}</h2>
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default IntroSection;