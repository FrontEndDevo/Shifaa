import Image from "next/image";

const Shifaa = () => {
  return (
    <div className="flex gap-2 items-end">
      <Image
        src="/assets/icons/shifaa-icon.png"
        alt="shifaa"
        width={1000}
        height={1000}
        className="h-12 w-12"
      />
      <p className="text-3xl font-bold font-mono">Shifaa</p>
    </div>
  );
};

export default Shifaa;
