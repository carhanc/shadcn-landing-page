import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <Wrench className="size-12 text-primary mb-4" />
                <div>
                  Fleet or rideshare driver?
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    We have you covered.
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Ask about priority maintenance, monthly reporting, and on-site
              service options tailored to your business vehicles.
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="tel:14087350541">Talk with our service manager</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
