import { home } from "../../Content";
const Home = () => {
  const { title, firstName, lastName, btnText, hero_content, img } = home;
  return (
    <section className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="rotate-90 absolute md:top-[40%] top-[30%] right-[-15%] text-[#EAF2FA]">
            {firstName} <span className="text-dark_primary">{lastName}</span>
          </h1>
        </div>
        {/* first col */}
        <div className="pb-16 px-6 pt-5">
          <h2>{title}</h2>
          <br />
          <div className="">
            <button className="btn">{btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero_content.map((content, ind) => {
              return (
                <div
                  key={ind}
                  className={`flex items-center w-80 gap-5 ${
                    ind === 1 && "flex-row-reverse text-right"
                  }`}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* second col */}
        <div className="md:h-[36rem] h-96">
          <img className="h-full object-cover" src={img} alt="..." />
        </div>
      </div>
    </section>
  );
};

export default Home;
