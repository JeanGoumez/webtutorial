function MainTitle({ titleleft, titleright, descripcion, className }) {
  const mainTitleClassName = descripcion ? "my-8" : "mt-8";

  return (
    <div
      className={
        "flex flex-col gap-2 text-center " +
        mainTitleClassName +
        " " +
        className
      }
    >
      <h1 className="pt-2 text-2xl font-bold">
        <span className="text-gray-300">{titleleft}</span>
        <span className="text-yellow-500">{titleright}</span>
      </h1>

      <h2 className="text-gray-400 font-medium">{descripcion}</h2>
    </div>
  );
}

export default MainTitle;
