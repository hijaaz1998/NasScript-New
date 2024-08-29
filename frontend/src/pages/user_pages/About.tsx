const About = () => {
  return (
    <div className="px-8 pt-10">
      <div className="flex flex-col md:h-[55vh]">
        <h1 className="text-4xl font-bold mb-4">Swimming Pools</h1>
        <p className="max-w-lg">
          We started as a small interior design firm in downtown Michigan,
          aiming to help home buyers make do with the new space that they had
          acquired. It soon became obvious that it would make sense to help our
          clients see beyond the walls and floor plans and be there with them
          from the get-go. Currently, we offer house realtor, interior design,
          and architecture services in order to help our customers find their
          forever homes as seamlessly and painlessly as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:h-[40vh] ">
        <h1 className="text-4xl font-bold md:mb-4">
          International <br /> Business Partners
        </h1>
        <p className="max-w-lg">
          We are a group of three companies working together to provide
          international business solutions. With our expertise and global
          network, we help businesses connect and thrive in the global market.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[60vh]">
        <h1 className="text-4xl font-bold md:mb-4">Summerwind</h1>
        <h1 className="text-4xl font-bold md:mb-4">Astral Spain</h1>
        <h1 className="text-4xl font-bold md:mb-4">Astral Spain</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1532547616536-557a0d4d29ad?auto=format&fit=crop&w=1224&h=544"
        alt=""
        className="w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div>
          <h1 className="text-4xl font-bold md:mb-4">Our mission</h1>
          <p className="max-w-lg">
            We're on a mission to change the way the housing market works.
            Rather than offering one service or another, we want to combine as
            many and make our clients' lives easy and carefree. Our goal is to
            match our clients with the perfect properties that fit their tastes,
            needs, and budgets.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold md:mb-4">Our vision</h1>
          <p className="max-w-lg">
            We want to live in a world where people can buy homes that match
            their needs rather than having to find a compromise and settle on
            the second-best option. That's why we take a lot of time and care in
            getting to know our clients from the moment they reach out to us and
            ask for our help.
          </p>
        </div>
      </div>
      <img
        className="w-full py-10"
        src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1224&h=544"
        alt=""
      />
      <div className="py-11">
        <h1 className="text-4xl font-bold md:mb-4">Our team</h1>
        <p className="max-w-lg">
          Our strength lies in our individuality. Set up by Esther Bryce, the
          team strives to bring in the best talent in various fields, from
          architecture to interior design and sales.
        </p>
      </div>
      <div className="py-12 grid grid-cols-1 gap-5 md:grid-cols-4">
        <div>
          <h1 className="text-xl font-bold md:mb-4">A. Kumar</h1>
          <p className="max-w-lg">Founder</p>
        </div>
        <div>
          <h1 className="text-xl font-bold md:mb-4">Lianne Wilson</h1>
          <p className="max-w-lg">Broker</p>
        </div>
        <div>
          <h1 className="text-xl font-bold md:mb-4">Jaden Smith</h1>
          <p className="max-w-lg">Architect</p>
        </div>
        <div>
          <h1 className="text-xl font-bold md:mb-4">Jessica Kim</h1>
          <p className="max-w-lg">Photographer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
