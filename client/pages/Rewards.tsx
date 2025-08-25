import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Gift, 
  Star, 
  ShoppingBag, 
  Ticket, 
  Shirt, 
  Coffee, 
  Book,
  Trophy,
  Crown,
  Zap,
  Calendar,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

const userStats = {
  points: 2450,
  level: "Wellness Warrior",
  streak: 14,
  achievements: 12
};

const rewards = [
  {
    id: 1,
    category: 'events',
    title: 'Mindfulness Workshop',
    description: 'Join a 2-hour guided mindfulness session with certified instructors',
    points: 500,
    price: '$25',
    originalPrice: '$50',
    image: '🧘‍♀️',
    location: 'Online & In-Person',
    date: 'Next Saturday',
    available: true,
    popular: true
  },
  {
    id: 2,
    category: 'events',
    title: 'Digital Detox Retreat',
    description: 'Weekend retreat focused on healthy digital habits and mindfulness',
    points: 1500,
    price: '$149',
    originalPrice: '$299',
    image: '🏞️',
    location: 'Mountain View Resort',
    date: 'Jan 15-17',
    available: true,
    premium: true
  },
  {
    id: 3,
    category: 'merchandise',
    title: 'DigitalWell Wellness T-Shirt',
    description: 'Comfortable organic cotton t-shirt with motivational wellness design',
    points: 300,
    price: '$15',
    originalPrice: '$25',
    image: '👕',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Gray', 'White'],
    available: true
  },
  {
    id: 4,
    category: 'merchandise',
    title: 'Mindfulness Journal',
    description: 'Premium guided journal for tracking your wellness journey',
    points: 200,
    price: '$12',
    originalPrice: '$20',
    image: '📔',
    available: true,
    popular: true
  },
  {
    id: 5,
    category: 'experiences',
    title: 'Coffee with a Wellness Coach',
    description: 'One-on-one session with a certified digital wellness expert',
    points: 800,
    price: '$35',
    originalPrice: '$70',
    image: '☕',
    duration: '45 minutes',
    format: 'Video Call',
    available: true
  },
  {
    id: 6,
    category: 'digital',
    title: 'Premium Meditation App Access',
    description: '3-month subscription to top-rated meditation and mindfulness app',
    points: 600,
    price: '$20',
    originalPrice: '$40',
    image: '📱',
    duration: '3 months',
    available: true
  },
  {
    id: 7,
    category: 'events',
    title: 'Wellness Conference 2024',
    description: 'Early bird ticket to the annual digital wellness conference',
    points: 2000,
    price: '$99',
    originalPrice: '$199',
    image: '🎤',
    location: 'San Francisco',
    date: 'March 20-22',
    available: true,
    premium: true
  },
  {
    id: 8,
    category: 'merchandise',
    title: 'Blue Light Blocking Glasses',
    description: 'Stylish glasses designed to reduce eye strain from screens',
    points: 400,
    price: '$18',
    originalPrice: '$35',
    image: '🤓',
    available: true
  }
];

const achievements = [
  { name: 'First Steps', description: 'Complete your first week', points: 50, earned: true },
  { name: 'Streak Master', description: '30-day wellness streak', points: 200, earned: true },
  { name: 'Challenge Champion', description: 'Complete 10 challenges', points: 150, earned: false },
  { name: 'Community Leader', description: 'Help 5 users in forums', points: 100, earned: true },
];

export default function Rewards() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const filteredRewards = selectedCategory === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  const addToCart = (rewardId: number) => {
    setCart(prev => [...prev, rewardId]);
  };

  const removeFromCart = (rewardId: number) => {
    setCart(prev => prev.filter(id => id !== rewardId));
  };

  const isInCart = (rewardId: number) => cart.includes(rewardId);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header with User Stats */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Rewards Store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Redeem your wellness points for amazing rewards and experiences that support your digital wellness journey.
            </p>
          </div>

          {/* User Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{userStats.points}</div>
                <div className="text-sm text-muted-foreground">Points Available</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-wellness-sky/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Crown className="h-6 w-6 text-wellness-sky" />
                </div>
                <div className="text-lg font-bold">{userStats.level}</div>
                <div className="text-sm text-muted-foreground">Current Level</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-wellness-mint/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-wellness-mint" />
                </div>
                <div className="text-2xl font-bold">{userStats.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-wellness-lavender/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-6 w-6 text-wellness-lavender" />
                </div>
                <div className="text-2xl font-bold">{userStats.achievements}</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs for different sections */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:mx-auto mb-8">
            <TabsTrigger value="all">All Rewards</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="merchandise">Merch</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory}>
            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredRewards.map((reward) => (
                <Card key={reward.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  {reward.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-yellow-500 text-black">
                      Popular
                    </Badge>
                  )}
                  {reward.premium && (
                    <Badge className="absolute top-4 left-4 z-10 bg-purple-500">
                      Premium
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="text-6xl mb-4">{reward.image}</div>
                    <CardTitle className="text-xl">{reward.title}</CardTitle>
                    <CardDescription>{reward.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold text-primary">{reward.points} pts</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{reward.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{reward.originalPrice}</div>
                      </div>
                    </div>

                    {/* Category-specific details */}
                    {reward.category === 'events' && (
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{reward.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{reward.date}</span>
                        </div>
                      </div>
                    )}

                    {reward.category === 'experiences' && (
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{reward.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>{reward.format}</span>
                        </div>
                      </div>
                    )}

                    {reward.category === 'merchandise' && reward.sizes && (
                      <div className="text-sm text-muted-foreground">
                        <span>Sizes: {reward.sizes.join(', ')}</span>
                      </div>
                    )}

                    <Button 
                      className="w-full" 
                      onClick={() => isInCart(reward.id) ? removeFromCart(reward.id) : addToCart(reward.id)}
                      variant={isInCart(reward.id) ? "secondary" : "default"}
                      disabled={!reward.available || userStats.points < reward.points}
                    >
                      {isInCart(reward.id) ? (
                        <>Remove from Cart</>
                      ) : userStats.points >= reward.points ? (
                        <>
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Add to Cart
                        </>
                      ) : (
                        <>Not Enough Points</>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Achievements Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-6 w-6" />
              <span>Recent Achievements</span>
            </CardTitle>
            <CardDescription>
              Complete challenges and milestones to earn more points
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border ${achievement.earned ? 'bg-green-50 border-green-200' : 'bg-muted/50'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-green-500' : 'bg-muted'}`}>
                    {achievement.earned ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <Star className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{achievement.name}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">+{achievement.points} pts</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6" />
                <span>Cart Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {cart.map(rewardId => {
                  const reward = rewards.find(r => r.id === rewardId);
                  return reward ? (
                    <div key={rewardId} className="flex justify-between items-center">
                      <span>{reward.title}</span>
                      <span className="font-bold">{reward.points} pts</span>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">Total Points:</span>
                  <span className="font-bold text-lg text-primary">
                    {cart.reduce((total, rewardId) => {
                      const reward = rewards.find(r => r.id === rewardId);
                      return total + (reward?.points || 0);
                    }, 0)} pts
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  <Gift className="mr-2 h-5 w-5" />
                  Redeem Rewards
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
