import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Timer, 
  Users, 
  Target, 
  Calendar, 
  CheckCircle,
  Clock,
  Zap,
  Smartphone,
  Brain,
  Eye,
  Moon,
  Coffee,
  Book,
  Heart,
  Shield,
  Star,
  TrendingUp,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Award,
  Crown,
  Flame,
  Users2,
} from 'lucide-react';

const activeWorkChallenges = [
  {
    id: 1,
    title: '30-Min No Instagram',
    description: 'Avoid Instagram for 30 consecutive minutes',
    type: 'instant',
    duration: '30 minutes',
    difficulty: 'Easy',
    points: 50,
    participants: 700,
    icon: '📱',
    category: 'Social Media',
    timeLeft: '12:34',
    isActive: true,
    progress: 60
  },
  {
    id: 2,
    title: 'Pomodoro Focus Session',
    description: 'Complete a 25-minute focused work session without phone distractions',
    type: 'timed',
    duration: '25 minutes',
    difficulty: 'Medium',
    points: 50,
    participants: 850,
    icon: '🍅',
    category: 'Productivity',
    timeLeft: '08:45',
    isActive: true,
    progress: 35
  },
  {
    id: 3,
    title: 'Evening Digital Sunset',
    description: 'No screens 2 hours before your bedtime',
    type: 'evening',
    duration: '2 hours',
    difficulty: 'Hard',
    points: 100,
    participants: 520,
    icon: '🌅',
    category: 'Sleep',
    timeLeft: '1h 23m',
    isActive: true,
    progress: 45
  }
];

const availableChallenges = [
  {
    id: 4,
    title: 'Morning Phone-Free Hour',
    description: 'Start your day without checking your phone for the first hour',
    type: 'daily',
    duration: '1 hour',
    difficulty: 'Medium',
    points: 75,
    participants: 2100,
    icon: '☀️',
    category: 'Morning Routine',
    completionRate: 78,
    trending: true
  },
  {
    id: 5,
    title: 'Deep Work Marathon',
    description: 'Complete 4 consecutive Pomodoro sessions with 5-min breaks',
    type: 'extended',
    duration: '2 hours',
    difficulty: 'Hard',
    points: 200,
    participants: 340,
    icon: '🎯',
    category: 'Productivity',
    completionRate: 45,
    featured: true
  },
  {
    id: 6,
    title: 'Social Media Sabbath',
    description: 'Go 24 hours without any social media platforms',
    type: 'daily',
    duration: '24 hours',
    difficulty: 'Expert',
    points: 300,
    participants: 180,
    icon: '🚫',
    category: 'Digital Detox',
    completionRate: 35,
    premium: true
  },
  {
    id: 7,
    title: 'Mindful Meal Time',
    description: 'Eat one meal without any digital devices',
    type: 'instant',
    duration: '30 minutes',
    difficulty: 'Easy',
    points: 30,
    participants: 950,
    icon: '🍽️',
    category: 'Mindfulness',
    completionRate: 85
  },
  {
    id: 8,
    title: 'News Detox Day',
    description: 'Avoid all news consumption for 24 hours',
    type: 'daily',
    duration: '24 hours',
    difficulty: 'Medium',
    points: 150,
    participants: 420,
    icon: '📰',
    category: 'Mental Health',
    completionRate: 60
  },
  {
    id: 9,
    title: 'Walking Meeting Challenge',
    description: 'Take your next call while walking outside',
    type: 'instant',
    duration: '30 minutes',
    difficulty: 'Easy',
    points: 40,
    participants: 680,
    icon: '🚶‍♀️',
    category: 'Movement',
    completionRate: 90
  },
  {
    id: 10,
    title: 'Airplane Mode Evening',
    description: 'Put your phone in airplane mode after 8 PM',
    type: 'evening',
    duration: '3 hours',
    difficulty: 'Medium',
    points: 80,
    participants: 750,
    icon: '✈️',
    category: 'Sleep',
    completionRate: 55
  },
  {
    id: 11,
    title: 'Notification Purge',
    description: 'Turn off all non-essential notifications for a week',
    type: 'weekly',
    duration: '7 days',
    difficulty: 'Medium',
    points: 250,
    participants: 290,
    icon: '🔕',
    category: 'Focus',
    completionRate: 40,
    trending: true
  }
];

const weeklyChallenge = {
  id: 'weekly-1',
  title: 'Digital Wellness Week',
  description: 'Complete 5 different types of challenges this week',
  progress: 3,
  target: 5,
  timeLeft: '3 days',
  reward: 500,
  participants: 2400
};

const leaderboard = [
  { rank: 1, name: 'Himansh', points: 2850, level: 'Digital Zen Master', avatar: '👩‍💼' },
  { rank: 2, name: 'Darshit', points: 2720, level: 'Mindful Warrior', avatar: '👨‍💻' },
  { rank: 3, name: 'Abhishek', points: 2680, level: 'Focus Champion', avatar: '👩‍🎓' },
  { rank: 4, name: 'You', points: 2450, level: 'Wellness Explorer', avatar: '👩‍💼' },
  { rank: 5, name: 'JainCommunity', points: 2380, level: 'Digital Nomad', avatar: '👨‍🎨' }
];

const achievements = [
  { name: 'First Steps', description: 'Complete your first challenge', earned: true, icon: '🎯', rarity: 'Common' },
  { name: 'Streak Master', description: '7-day challenge streak', earned: true, icon: '🔥', rarity: 'Rare' },
  { name: 'Social Media Slayer', description: 'Complete 10 social media challenges', earned: false, icon: '⚔️', rarity: 'Epic' },
  { name: 'Zen Master', description: 'Complete 50 mindfulness challenges', earned: false, icon: '🧘‍♀️', rarity: 'Legendary' }
];

export default function Challenges() {
  const [selectedTab, setSelectedTab] = useState('active');
  const [timerActive, setTimerActive] = useState(false);

  const startChallenge = (challengeId: number) => {
    console.log(`Starting challenge ${challengeId}`);
    // Here you would implement challenge start logic
  };

  const pauseChallenge = (challengeId: number) => {
    console.log(`Pausing challenge ${challengeId}`);
    setTimerActive(false);
  };

  const completeChallenge = (challengeId: number) => {
    console.log(`Completing challenge ${challengeId}`);
    // Here you would implement challenge completion logic
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Digital Wellness Challenges</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands in building healthier digital habits through fun, engaging challenges that fit your lifestyle.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold">2,450</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-lg font-bold">#4</div>
                  <div className="text-sm text-muted-foreground">Leaderboard</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="active">Active ({activeWorkChallenges.length})</TabsTrigger>
                <TabsTrigger value="available">Available</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Active Challenges</h2>
                  <Button variant="outline" size="sm">
                    <PauseCircle className="mr-2 h-4 w-4" />
                    Pause All
                  </Button>
                </div>

                {activeWorkChallenges.length === 0 ? (
                  <Card className="text-center py-12">
                    <CardContent>
                      <Timer className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Active Challenges</h3>
                      <p className="text-muted-foreground mb-4">
                        Start a challenge to begin building healthier digital habits
                      </p>
                      <Button onClick={() => setSelectedTab('available')}>
                        Browse Challenges
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {activeWorkChallenges.map((challenge) => (
                      <Card key={challenge.id} className="overflow-hidden">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="text-3xl">{challenge.icon}</div>
                              <div>
                                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                                <CardDescription>{challenge.description}</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary">{challenge.category}</Badge>
                              <Badge className={
                                challenge.difficulty === 'Easy' ? 'bg-green-500' :
                                challenge.difficulty === 'Medium' ? 'bg-yellow-500' :
                                'bg-red-500'
                              }>
                                {challenge.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Time Remaining: <span className="font-bold text-primary">{challenge.timeLeft}</span></span>
                            <span>{challenge.participants.toLocaleString()} participants</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{challenge.progress}%</span>
                            </div>
                            <Progress value={challenge.progress} />
                          </div>

                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => pauseChallenge(challenge.id)}
                            >
                              <PauseCircle className="mr-2 h-4 w-4" />
                              Pause
                            </Button>
                            <Button 
                              size="sm" 
                              onClick={() => completeChallenge(challenge.id)}
                              disabled={challenge.progress < 100}
                            >
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Complete
                            </Button>
                            <div className="flex-1" />
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span>{challenge.points} pts</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="available" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Available Challenges</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Trending
                    </Button>
                    <Button variant="outline" size="sm">
                      Difficulty
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableChallenges.map((challenge) => (
                    <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-3xl">{challenge.icon}</div>
                          <div className="flex space-x-1">
                            {challenge.trending && <Badge className="bg-orange-500">Trending</Badge>}
                            {challenge.featured && <Badge className="bg-purple-500">Featured</Badge>}
                            {challenge.premium && <Badge className="bg-yellow-500 text-black">Premium</Badge>}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant="secondary">{challenge.category}</Badge>
                          <span className="font-medium">{challenge.duration}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span>{challenge.participants.toLocaleString()} joined</span>
                          <span className={`font-medium ${
                            challenge.completionRate >= 70 ? 'text-green-600' :
                            challenge.completionRate >= 50 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {challenge.completionRate}% success rate
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-bold text-primary">{challenge.points} points</span>
                          </div>
                          <Badge className={
                            challenge.difficulty === 'Easy' ? 'bg-green-500' :
                            challenge.difficulty === 'Medium' ? 'bg-yellow-500' :
                            challenge.difficulty === 'Hard' ? 'bg-red-500' :
                            'bg-purple-500'
                          }>
                            {challenge.difficulty}
                          </Badge>
                        </div>

                        <Button 
                          className="w-full" 
                          onClick={() => startChallenge(challenge.id)}
                        >
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Start Challenge
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="weekly" className="space-y-6">
                <h2 className="text-2xl font-bold">Weekly Challenge</h2>
                
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-4xl">🏆</div>
                      <div>
                        <CardTitle className="text-2xl">{weeklyChallenge.title}</CardTitle>
                        <CardDescription className="text-base">{weeklyChallenge.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{weeklyChallenge.progress}/{weeklyChallenge.target}</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{weeklyChallenge.timeLeft}</div>
                        <div className="text-sm text-muted-foreground">Remaining</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{weeklyChallenge.reward}</div>
                        <div className="text-sm text-muted-foreground">Bonus Points</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{weeklyChallenge.participants.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weekly Progress</span>
                        <span>{weeklyChallenge.progress}/{weeklyChallenge.target} challenges</span>
                      </div>
                      <Progress value={(weeklyChallenge.progress / weeklyChallenge.target) * 100} />
                    </div>

                    <div className="flex space-x-4">
                      <Button>Continue Challenge</Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-6 w-6 text-yellow-500" />
                  <span>Leaderboard</span>
                </CardTitle>
                <CardDescription>This week's top performers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center space-x-3 p-2 rounded ${user.name === 'You' ? 'bg-primary/10 border border-primary/20' : ''}`}>
                    <div className="text-2xl">{user.avatar}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">#{user.rank}</div>
                      <div className="text-xs text-muted-foreground">{user.points} pts</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${achievement.earned ? 'bg-green-50 border-green-200' : 'bg-muted/50'}`}>
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant={achievement.earned ? "default" : "secondary"} className="text-xs">
                        {achievement.rarity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Start */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6" />
                  <span>Quick Start</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Timer className="mr-2 h-4 w-4" />
                  5-Min Break Challenge
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Phone-Free Lunch
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Brain className="mr-2 h-4 w-4" />
                  Mindful Minute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
