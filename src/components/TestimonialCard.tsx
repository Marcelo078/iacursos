import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

const TestimonialCard = ({ text, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full transition-smooth hover:shadow-medium">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gradient-accent-start text-gradient-accent-start" />
          ))}
        </div>
        
        <blockquote className="text-text-secondary italic leading-relaxed">
          "{text}"
        </blockquote>
        
        <cite className="text-sm font-semibold text-text-hero not-italic">
          — {author}
        </cite>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;