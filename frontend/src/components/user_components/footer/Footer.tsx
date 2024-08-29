import SocialMedia from "../common/SocialMedia";
import isoImg from "../../../assets/IMS-vision.png";

const Footer = () => {
  return (
    <div className="sm:px-12 py-16 bg-[#0e0d0d]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-2xl font-bold text-gray-200">
            Subscribe to our newsletter
          </h1>
          <p className="text-gray-300 mt-2">
            Stay updated with our latest news and offers.
          </p>
          <form action="" className="mt-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300">
                Your email
              </label>
              <input
                id="email"
                className="border border-gray-300 px-4 py-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#2E994D] w-full sm:w-[70%]"
                type="email"
                placeholder="Your email address"
                required
              />
            </div>
            <button className="mt-6 px-6 py-3 bg-[#2E994D] text-white font-medium rounded-md hover:bg-[#24803b] transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-200">Contacts</h1>
            <p className="text-gray-300 mt-4">
              info@alnaqshqatar.com <br />
              +974 41439515
            </p>
            <p className="text-gray-300 mt-4">
              Office No B 262, 2nd floor, Entrance 6, Building 43, Souq Al
              Nayef, Street 100, Zone 56 Ain Khaled Qatar
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-200">Socials</h1>
            <div className="mt-6 space-x-4">
              <SocialMedia className="text-white" />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-200">AWARDS & AFFILIATIONS</h1>
              <div className="w-28 h-20 mt-6">
                <img className="w-full h-full object-cover" src={isoImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
