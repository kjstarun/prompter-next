import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head text-center">
          DISCOVER & SHARE <br className="max-md:hidden" />
          <span className="orange_gradient">INNOVATIVE PROMPTS</span>
        </h1>
        <p className="desc text-center">
          Prompter is an open-source tool for modern world to
          discover, create, innovate and share creative prompts.
        </p>
        <Feed />
      </section>
    </>
  );
};

export default Home;
