export default function Article(props) {
  return (
    <div className="bg-white rounded-[0.5em] grid grid-rows-1">
      <img
        src={props.image}
        alt=""
        className="w-full h-full rounded-t-[0.5em]"
      />
      <div className="px-[1em] py-[2em] grid gap-[1em]">
        <p className="text-[70%] text-greyish-blue">By {props.author}</p>
        <h2 className="text-[110%] text-dark-blue">{props.heading}</h2>
        <p className="text-greyish-blue text-[75%]">{props.content}</p>
      </div>
    </div>
  );
}
