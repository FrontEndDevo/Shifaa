// Next Components:
import Link from "next/link";
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

type TShifaaProps = {
  class?: string;
  text?: string;
};

const Shifaa = (props: TShifaaProps) => {
  const t = useTranslations("brand");

  return (
    <Link href="/">
      <div className="flex gap-2 items-end">
        <Image
          src="/assets/icons/shifaa-icon.png"
          alt="shifaa"
          width={1000}
          height={1000}
          className={`h-12 w-12 ${props?.class}`}
        />
        <p className={`text-3xl font-bold font-mono ${props?.text}`}>
          {t("name")}
        </p>
      </div>
    </Link>
  );
};

export default Shifaa;
