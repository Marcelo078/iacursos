import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
  variant?: "cta" | "accent" | "hero";
  featured?: boolean;
}

const ProductCard = ({ 
  title, 
  description, 
  benefits, 
  ctaText, 
  ctaUrl, 
  variant = "cta",
  featured = false 
}: ProductCardProps) => {
  return (
    <Card className={`relative transition-smooth hover:shadow-large hover:-translate-y-1 ${
      featured ? 'ring-2 ring-gradient-primary-start shadow-glow' : ''
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="gradient-accent px-4 py-1 rounded-full text-xs font-bold text-white">
            ⭐ DESTAQUE
          </span>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-text-hero leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-gradient-secondary-start flex-shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button 
          variant={variant} 
          size="lg" 
          className="w-full"
          onClick={() => window.open(ctaUrl, '_blank')}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;