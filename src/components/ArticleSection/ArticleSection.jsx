import Article from "./Article";

export default function ArticleSection() {
  return (
    <div className="bg-very-light-grey py-[10%] px-[5%] grid gap-[5em] landscape:px-[10%]">
      <h1 className="text-[200%] text-dark-blue landscape:text-[250%] portrait:text-center">
        Latest Articles
      </h1>
      <div className="grid gap-[2em] landscape:grid-cols-2 landscape:lg:grid-cols-4">
        <Article
          image="image-currency.jpg"
          author="Claire Robinson"
          heading="Receive money in any currency with no fees"
          content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single ..."
        />
        <Article
          image="image-restaurant.jpg"
          author="Wilson Hutton"
          heading="Treat yourself without worrying about money"
          content="Our simple budgeting feature allows you to seprate out your spending and set realistic limits each month. That means you ..."
        />
        <Article
          image="image-plane.jpg"
          author="Wilson Hutton"
          heading="Take your Easybank card wherever you go"
          content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
        />
        <Article
          image="image-confetti.jpg"
          author="Claire Robinson"
          heading="Our invite-only Beta accounts are now live!"
          content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
}
