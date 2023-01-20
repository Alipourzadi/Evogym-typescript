type Props = {
  name: string;
  description: string;
  img: string;
};

const Class = ({ name, description, img }: Props) => {
  const overlayStyles =
    "p-5 absolute z-30 flex flex-col items-center justify-center gap-8 whitespace-normal bg-primery-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 h-[380px] w-[450px] ";
  return (
    <li className="relative inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p>{description}</p>
      </div>
      <img src={`${img}`} alt={img} className="h-full" />
    </li>
  );
};

export default Class;
