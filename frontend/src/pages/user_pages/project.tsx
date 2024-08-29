const Project = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-400 to-purple-500 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-extrabold mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-white">We’d love to hear from you!</p>
        </div>
      </div>

      {/* Project Section */}
      <div className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project Card 1 */}
          <div className="flex flex-col md:flex-row items-center overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full md:w-1/2 h-[20rem] object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="flex flex-col md:flex-row items-center overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full md:w-1/2 h-[20rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
