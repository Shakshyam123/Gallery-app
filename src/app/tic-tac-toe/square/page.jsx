function Square(props) {
  return (
    <div
      className="border-2  rounded-lg   h-24 w-24 bg-blue-200 flex items-center justify-center "
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Square;
