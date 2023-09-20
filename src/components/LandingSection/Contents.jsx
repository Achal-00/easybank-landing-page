export default function Contents() {
  return (
    <div className="landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 grid gap-[2em] self-center text-center landscape:text-left landscape:pl-[20%]">
      <h1 className="text-[250%] text-dark-blue landscape:lg:text-[400%] leading-[1.1em] font-light">
        Next generation
        <br />
        digital banking
      </h1>
      <p className="px-[5%] text-greyish-blue landscape:px-0 landscape:pr-[10%]">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button className="bg-gradient-to-r from-lime-green to-bright-cyan text-white rounded-full py-[0.5em] px-[1.5em] w-[10em] mx-auto landscape:mx-0 hover:opacity-80">
        Request Invite
      </button>
    </div>
  );
}
