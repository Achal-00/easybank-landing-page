import Feature from "./Feature";

export default function FeatureSection() {
  return (
    <div className="bg-light-greyish-blue py-[10%] px-[5%] grid gap-[5em] landscape:px-[10%]">
      <div className="text-center grid gap-[1em] landscape:text-left">
        <h1 className="text-[200%] leading-[1.2em] text-dark-blue landscape:text-[250%]">
          Why choose
          <br className="landscape:hidden" /> Easybank?
        </h1>
        <p className="text-greyish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br className="hidden landscape:block" /> Control your finance like
          never before.
        </p>
      </div>
      <div className="grid gap-[2em] landscape:grid-cols-2 landscape:lg:grid-cols-4">
        <Feature
          image="icon-online.svg"
          heading="Online Banking"
          content="Our modern web and mobile applications allow you to keep track of your
        finances wherever you are in the world."
        />
        <Feature
          image="icon-budgeting.svg"
          heading="Simple Budgeting"
          content="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        />
        <Feature
          image="icon-onboarding.svg"
          heading="Fast Onboarding"
          content="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <Feature
          image="icon-api.svg"
          heading="Open API"
          content="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </div>
  );
}
