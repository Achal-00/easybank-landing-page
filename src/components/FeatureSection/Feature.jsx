export default function Feature(props) {
  return (
    <div className="grid gap-[1em] portrait:text-center landscape:grid-rows-[0.2fr_0.2fr_0.6fr]">
      <img
        src={props.image}
        alt=""
        className="w-[5em] portrait:justify-self-center"
      />
      <h1 className="text-dark-blue text-[150%]">{props.heading}</h1>
      <p className="text-greyish-blue text-[90%]">{props.content}</p>
    </div>
  );
}
