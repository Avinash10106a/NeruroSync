import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from '@/components/ui/carousel';
import { 
  BarChart3, 
  Brain, 
  Video, 
  Trophy, 
  Shield, 
  Smartphone, 
  Zap, 
  Users, 
  Target,
  CheckCircle,
  Star,
  PlayCircle,
  TrendingUp,
  Award
} from 'lucide-react';

const heroSlides = [
  {
    title: "Track Your Digital Wellness",
    subtitle: "AI-Powered Usage Analysis",
    description: "Get deep insights into your digital habits with on-chain tracking and personalized recommendations.",
    icon: BarChart3,
    gradient: "from-wellness-sage to-wellness-mint",
    image: "/images/mentalH.webp"
  },
  {
    title: "Mindful Technology Use",
    subtitle: "Meditation & Activities", 
    description: "Discover guided meditations, breathing exercises, and mindful games to reduce digital addiction.",
    icon: Brain,
    gradient: "from-wellness-sky to-wellness-lavender",
    image: "/images/MindfulTech.jpg"
  },
  {
    title: "Expert Video Coaching",
    subtitle: "Short-Form Content",
    description: "Access bite-sized wellness tips and strategies from mental health professionals.",
    icon: Video,
    gradient: "from-wellness-lavender to-wellness-warm",
    image: "/images/Coachh.png"
  },
  {
    title: "Gamified Challenges",
    subtitle: "Compete & Win Rewards",
    description: "Join peer challenges, climb leaderboards, and earn real-world rewards for healthy habits.",
    icon: Trophy,
    gradient: "from-wellness-mint to-wellness-sky",
    image: "/images/Games.jpg"
  },
  {
    title: "Community Support",
    subtitle: "Connect & Grow Together",
    description: "Join a supportive community focused on digital wellness and mental health improvement.",
    icon: Users,
    gradient: "from-wellness-warm to-wellness-sage",
    image: "/images/Mind.jpg"
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Smart Usage Tracking",
    description: "Monitor screen time, app usage, and digital patterns with AI insights."
  },
  {
    icon: Brain,
    title: "Mindfulness Tools",
    description: "Access meditation guides, breathing exercises, and mindful tech practices."
  },
  {
    icon: Trophy,
    title: "Gamified Rewards",
    description: "Earn points, badges, and real-world rewards for achieving wellness goals."
  },
  {
    icon: Users,
    title: "Peer Challenges",
    description: "Compete with friends in wellness challenges and community leaderboards."
  },
  {
    icon: Video,
    title: "Expert Content",
    description: "Learn from mental health professionals through short, actionable videos."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays secure with blockchain-based privacy protection."
  }
];

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "65%", label: "Reduced Screen Time" },
  { number: "500+", label: "Wellness Challenges" },
  { number: "4.8★", label: "User Rating" }
];

export default function Index() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden py-12 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-wellness-mint/20 to-wellness-sky/30" />
        <div className="container relative mx-auto px-8 lg:px-16">
          <Carousel setApi={setApi} className="w-full max-w-8xl mx-auto">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[200px]">
                    <div className="flex-1 text-center lg:text-left lg:pl-12">
                      <Badge variant="secondary" className="mb-4">
                        {slide.subtitle}
                      </Badge>
                      <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="/signup">
                          <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Get Started Free
                          </Button>
                        </Link>
                        <Link to="/videos">
                          <Button size="lg" variant="outline">
                            <PlayCircle className="mr-2 h-5 w-5" />
                            Watch Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end">
                      <div className={`h-60 bg-gradient-to-br ${slide.gradient} flex items-center justify-center text-8xl shadow-2xl`}>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 === current ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need for Digital Wellness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and features designed to help you build healthier relationships with technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-15 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-mint/20 to-wellness-sky/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Transform Your Digital Life
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands who have improved their mental health through mindful technology use.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Reduce Screen Time by 40%</h3>
                    <p className="text-muted-foreground">Our users see significant improvements in their digital habits within the first week.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Improve Sleep Quality</h3>
                    <p className="text-muted-foreground">Better digital boundaries lead to improved sleep patterns and mental clarity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Build Healthy Habits</h3>
                    <p className="text-muted-foreground">Gamified challenges make it fun to develop lasting wellness practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Connect with Community</h3>
                    <p className="text-muted-foreground">Find support and motivation from like-minded individuals on the same journey.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-wellness-sage to-wellness-sky flex items-center justify-center text-6xl shadow-2xl">
                   <img src="/images/sleep.jpg" alt="Better_Sleep" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Award className="h-14 w-18 mx-auto text-primary mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join DigitalWell today and take the first step towards a healthier relationship with technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/analysis">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
