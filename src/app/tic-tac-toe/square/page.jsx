function Square(props) {
  return (
    <div
      className="border-2 border-b-slate-900  h-24  w-full flex items-center justify-center "
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Square;
