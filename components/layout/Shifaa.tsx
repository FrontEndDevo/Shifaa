import Image from "next/image";

const Shifaa = () => {
  return (
    <div className="flex gap-2 mb-10 items-end">
      <Image
        src="/assets/icons/shifaa-icon.png"
        alt="shifaa"
        width={1000}
        height={1000}
        className="h-16 w-16"
      />
      <p className="text-4xl font-bold font-mono">Shifaa</p>
    </div>
  );
};

export default Shifaa;
