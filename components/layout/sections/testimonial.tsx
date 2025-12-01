"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Samantha K.",
    userName: "Sunnyvale Resident",
    comment:
      "They diagnosed my check engine light in under an hour and explained exactly what needed to be fixed. Honest, fast, and friendly.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Miguel R.",
    userName: "Local Business Owner",
    comment:
      "TD Auto Repair keeps our delivery vans running. Their fleet maintenance plan saves us downtime every month.",
    rating: 4.9,
  },
  {
    image: "https://i.pravatar.cc/150?img=46",
    name: "Priya S.",
    userName: "Parent & Commuter",
    comment:
      "Appreciated the shuttle ride to work and the photo report on my brakes. Pricing was exactly what they quoted.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=7",
    name: "Alex D.",
    userName: "Subaru Outback Owner",
    comment:
      "I finally found a shop I trust with my AWD. They use OEM parts and stand behind their work.",
    rating: 4.8,
  },
  {
    image: "https://i.pravatar.cc/150?img=58",
    name: "Jenna L.",
    userName: "New Driver",
    comment:
      "They walked me through every item on the inspection and never talked down to me. I won’t take my car anywhere else.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=18",
    name: "Howard M.",
    userName: "Classic Car Enthusiast",
    comment:
      "They sourced quality parts for my ’67 Mustang and treated it with care. The attention to detail is unmatched.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Sunnyvale drivers rely on us
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                        <AvatarImage src={review.image} alt={review.name} />
                        <AvatarFallback>
                          {review.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
