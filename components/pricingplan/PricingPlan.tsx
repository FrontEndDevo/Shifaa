// Next Intl:
import { useTranslations } from "next-intl";

// Customised Next Components:
import { useRouter } from "@/i18n/navigation";
// Lucide Icons:
import { CircleCheck, DollarSign } from "lucide-react";

// Shadcn UI:
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Constants:
import { PRICING_PLAN } from "@/constants/PricingPlan";

// Components:
import SectionHeading from "../common/SectionHeading";

const PricingPlan = () => {
  const t = useTranslations("Pricing");
  const router = useRouter();

  return (
    <section className="bg-card">
      <div className="container px-6 py-20">
        <SectionHeading
          icon={DollarSign}
          heading={t("heading")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 sm:mt-16 lg:grid-cols-3">
          {PRICING_PLAN.map((plan) => (
            <div
              className={cn(
                "relative rounded-lg border border-line bg-card p-6 shadow-xs/3",
                {
                  "border-2 border-emerald-600 py-10": plan.isPopular,
                },
              )}
              key={plan.id}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 font-bold text-xl z-10 bg-emerald-600 p-4 rounded-full">
                  {t("mostPopular")}
                </Badge>
              )}
              <h3 className="font-medium text-lg">
                {t(`plans.${plan.id}.name`)}
              </h3>
              <p className="mt-2 font-satoshi font-semibold text-4xl">
                ${plan.price}
              </p>
              <p className="mt-4 font-medium text-soft">
                {t(`plans.${plan.id}.description`)}
              </p>

              <Separator className="my-4" />

              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-2" key={feature}>
                    <CircleCheck className="mt-1 h-4 w-4 text-green-500" />
                    {t(`features.${feature}`)}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => router.push("/contact")}
                className="mt-6 w-full text-main hover:text-page dark:text-main border-emerald-800 hover:bg-emerald-800"
                size="lg"
                variant="outline"
              >
                {t(`plans.${plan.id}.button`)}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
