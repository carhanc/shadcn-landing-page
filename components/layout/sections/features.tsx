import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ClipboardList",
    title: "Digital Inspections",
    description:
      "Photos and notes delivered straight to your phone so you can approve work remotely.",
  },
  {
    icon: "Wrench",
    title: "OEM-Grade Parts",
    description:
      "We stock high-quality OEM and dealer-approved parts for reliable, long-lasting repairs.",
  },
  {
    icon: "Coffee",
    title: "Comfortable Lounge",
    description:
      "Complimentary Wi-Fi, refreshments, and workspace while you wait for quick services.",
  },
  {
    icon: "Truck",
    title: "Fleet Programs",
    description:
      "Tailored maintenance schedules and priority scheduling for commercial vehicles.",
  },
  {
    icon: "Car",
    title: "Complimentary Shuttle",
    description:
      "Free local rides to home or work so you never miss a meeting or school pickup.",
  },
  {
    icon: "Smartphone",
    title: "Text Updates",
    description:
      "Real-time status updates and reminders to keep you informed from drop-off to pick-up.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Shop highlights
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything you need in one shop
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We combine modern diagnostics with neighborly service so your vehicle
        gets dealership-quality care without the dealership hassle.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
