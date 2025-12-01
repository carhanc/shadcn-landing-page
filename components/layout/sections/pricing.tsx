import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Full Synthetic Oil Change",
    popular: 1,
    price: 59,
    description:
      "Includes premium oil, OEM filter, fluid top-off, tire rotation, and digital inspection.",
    buttonText: "Book Oil Change",
    benefitList: [
      "Up to 5 quarts full synthetic",
      "Multi-point inspection report",
      "Factory maintenance reset",
      "Complimentary car wash",
    ],
  },
  {
    title: "Brake Service Package",
    popular: 0,
    price: 169,
    description:
      "Resurface rotors or replace as needed, install premium pads, and road test for safety.",
    buttonText: "Schedule Brake Service",
    benefitList: [
      "Front or rear axle",
      "OEM-equivalent pads",
      "Brake fluid check",
      "24-month/24K warranty",
    ],
  },
  {
    title: "Diagnostic & Repair Credit",
    popular: 0,
    price: 149,
    description:
      "Advanced scan, smoke test, and estimate. Diagnostic fee applied toward approved repairs.",
    buttonText: "Book Diagnostic Visit",
    benefitList: [
      "Check engine & warning lights",
      "Road test & data logging",
      "Detailed repair roadmap",
      "Estimate review with technician",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Service specials
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Transparent pricing before you arrive
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Call or book online to lock in these popular services. We&apos;ll confirm
        pricing for your exact vehicle before any work begins.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> starting</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
