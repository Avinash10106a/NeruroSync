import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from "framer-motion";
import { 
  Brain, 
  Timer, 
  Heart, 
  Waves,
  TreePine,
  PlayCircle,
  Leaf, 
  Wind, 
  Sun, 
  Moon, 
  Cloud,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Star,
  TrendingUp,
  Calendar,
  Target,
  Sparkles,
  Headphones,
  BookOpen
} from 'lucide-react';

const breathingPattern = {
  'Box Breathing': { inhale: 4, hold: 4, exhale: 4, hold2: 4 },
  '4-7-8 Technique': { inhale: 4, hold: 7, exhale: 8, hold2: 0 },
  'Simple Breath': { inhale: 4, hold: 0, exhale: 6, hold2: 0 },
  'Energizing': { inhale: 3, hold: 0, exhale: 3, hold2: 0 }
};

interface Activity {
  title: string;
  description: string;
  duration: string;
  color: string;
  icon: React.ElementType; // Any React component (icon)
}

const activities = [
  { title: "Guided Meditation", description: "Follow a guided session to calm your mind and find inner peace. Perfect for beginners.", icon: Brain, duration: "10 min", color: "from-purple-400 to-pink-500" },
  { title: "Breathing Exercise", description: "Use the box breathing technique to reduce stress and improve focus in just a few minutes.", icon: Wind, duration: "5 min", color: "from-blue-400 to-cyan-500" },
  { title: "Calm Ocean Sounds", description: "Listen to the soothing sounds of ocean waves to relax, study, or fall asleep.", icon: Waves, duration: "30 min", color: "from-cyan-400 to-teal-500" },
  { title: "Forest Ambience", description: "Immerse yourself in the gentle sounds of a forest to reconnect with nature.", icon: TreePine, duration: "20 min", color: "from-green-400 to-emerald-500" },
];

const meditationSessions = [
  {
    id: 1,
    title: 'Morning Awakening',
    description: 'Start your day with intention and clarity',
    duration: '10 min',
    difficulty: 'Beginner',
    category: 'Morning',
    image: '☀️',
    instructor: 'Sarah Chen',
    completed: true
  },
  {
    id: 2,
    title: 'Digital Detox Focus',
    description: 'Break free from digital distractions and find inner peace',
    duration: '15 min',
    difficulty: 'Intermediate',
    category: 'Focus',
    image: '📱',
    instructor: 'Dr. Mark Williams',
    completed: false,
    popular: true
  },
  {
    id: 3,
    title: 'Stress Relief at Work',
    description: 'Quick stress-busting techniques for busy professionals',
    duration: '5 min',
    difficulty: 'Beginner',
    category: 'Stress Relief',
    image: '💼',
    instructor: 'Lisa Park',
    completed: false
  },
  {
    id: 4,
    title: 'Evening Wind Down',
    description: 'Prepare your mind and body for restful sleep',
    duration: '20 min',
    difficulty: 'Beginner',
    category: 'Sleep',
    image: '🌙',
    instructor: 'Michael Torres',
    completed: true
  },
  {
    id: 5,
    title: 'Anxiety Management',
    description: 'Tools and techniques to manage anxiety and worry',
    duration: '12 min',
    difficulty: 'Intermediate',
    category: 'Anxiety',
    image: '🌸',
    instructor: 'Dr. Emma Thompson',
    completed: false
  },
  {
    id: 6,
    title: 'Loving Kindness',
    description: 'Cultivate compassion for yourself and others',
    duration: '18 min',
    difficulty: 'Intermediate',
    category: 'Compassion',
    image: '💝',
    instructor: 'James Rodriguez',
    completed: false,
    featured: true
  }
];

const quickActivities = [
  {
    title: '1-Minute Reset',
    description: 'Quick centering technique',
    duration: '1 min',
    icon: RotateCcw,
    color: 'bg-wellness-mint'
  },
  {
    title: 'Gratitude Moment',
    description: 'Reflect on three good things',
    duration: '2 min',
    icon: Heart,
    color: 'bg-wellness-lavender'
  },
  {
    title: 'Body Scan',
    description: 'Check in with your physical state',
    duration: '3 min',
    icon: Target,
    color: 'bg-wellness-sky'
  },
  {
    title: 'Mindful Observation',
    description: 'Notice your surroundings',
    duration: '2 min',
    icon: Sun,
    color: 'bg-wellness-warm'
  }
];

const userProgress = {
  totalSessions: 47,
  totalMinutes: 623,
  currentStreak: 12,
  longestStreak: 28,
  level: 'Mindful Explorer',
  nextMilestone: 'Zen Apprentice'
};

export default function Mindfulness() {
  const [selectedBreathingPattern, setSelectedBreathingPattern] = useState('Box Breathing');
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Morning', 'Focus', 'Stress Relief', 'Sleep', 'Anxiety', 'Compassion'];

  const filteredSessions = selectedCategory === 'all' 
    ? meditationSessions 
    : meditationSessions.filter(session => session.category === selectedCategory);

  const startBreathing = () => {
    setIsBreathing(true);
    setBreathingTimer(0);
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    setBreathingTimer(0);
  };

  return (

    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mindfulness & Meditation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover peace and clarity through guided meditations, breathing exercises, and mindful practices designed to reduce digital overwhelm.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">{userProgress.totalSessions}</div>
                  <div className="text-sm text-muted-foreground">Sessions Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Timer className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{userProgress.totalMinutes}m</div>
                  <div className="text-sm text-muted-foreground">Total Minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-wellness-sky" />
                <div>
                  <div className="text-2xl font-bold">{userProgress.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-lg font-bold">{userProgress.level}</div>
                  <div className="text-sm text-muted-foreground">Current Level</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guided Meditations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-6 w-6" />
                  <span>Guided Meditations</span>
                </CardTitle>
                <CardDescription>
                  Expert-led sessions for every moment and mood
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </Button>
                  ))}
                </div>

                {/* Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSessions.map((session) => (
                    <Card key={session.id} className="relative overflow-hidden hover:shadow-md transition-all">
                      {session.popular && (
                        <Badge className="absolute top-3 left-3 z-10 bg-yellow-500 text-black">
                          Popular
                        </Badge>
                      )}
                      {session.featured && (
                        <Badge className="absolute top-3 left-3 z-10 bg-purple-500">
                          Featured
                        </Badge>
                      )}
                      
                      <CardHeader className="pb-3">
                        <div className="text-center mb-3">
                          <div className="text-4xl mb-2">{session.image}</div>
                          <CardTitle className="text-lg">{session.title}</CardTitle>
                          <CardDescription className="text-sm">{session.description}</CardDescription>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm">
                            <Badge variant="secondary">{session.category}</Badge>
                            <span className="font-medium">{session.duration}</span>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>by {session.instructor}</span>
                            <span className={`capitalize ${session.difficulty === 'Beginner' ? 'text-green-600' : session.difficulty === 'Intermediate' ? 'text-yellow-600' : 'text-red-600'}`}>
                              {session.difficulty}
                            </span>
                          </div>

                          <Button 
                            className="w-full" 
                            variant={session.completed ? "outline" : "default"}
                          >
                            {session.completed ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Play Again
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Start Session
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Breathing Exercises */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="h-6 w-6" />
                  <span>Breathing Exercises</span>
                </CardTitle>
                <CardDescription>
                  Guided breathing patterns to calm your mind and reduce stress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Pattern Selection */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.keys(breathingPattern).map(pattern => (
                      <Button
                        key={pattern}
                        variant={selectedBreathingPattern === pattern ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedBreathingPattern(pattern)}
                        className="h-auto py-3 text-center"
                      >
                        <div>
                          <div className="font-semibold text-sm">{pattern}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {pattern === 'Box Breathing' && '4-4-4-4'}
                            {pattern === '4-7-8 Technique' && '4-7-8'}
                            {pattern === 'Simple Breath' && '4-0-6'}
                            {pattern === 'Energizing' && '3-0-3'}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Breathing Visualizer */}
                  <div className="text-center space-y-6 py-8">
                    <div className="relative mx-auto w-48 h-48">
                      <div className={`absolute inset-0 rounded-full border-4 border-primary/20 ${isBreathing ? 'animate-pulse' : ''}`} />
                      <div className={`absolute inset-4 rounded-full bg-primary/10 ${isBreathing ? 'animate-ping' : ''}`} />
                      <div className="absolute inset-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Wind className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{selectedBreathingPattern}</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        {selectedBreathingPattern === 'Box Breathing' && 'Equal counts for inhale, hold, exhale, hold. Perfect for stress relief.'}
                        {selectedBreathingPattern === '4-7-8 Technique' && 'Powerful technique for quick relaxation and better sleep.'}
                        {selectedBreathingPattern === 'Simple Breath' && 'Basic pattern focusing on longer exhales for calmness.'}
                        {selectedBreathingPattern === 'Energizing' && 'Quick breaths to boost energy and alertness.'}
                      </p>
                      
                      <div className="flex justify-center space-x-4">
                        {!isBreathing ? (
                          <Button onClick={startBreathing} className="px-8">
                            <Play className="mr-2 h-4 w-4" />
                            Start Breathing
                          </Button>
                        ) : (
                          <Button onClick={stopBreathing} variant="outline" className="px-8">
                            <Pause className="mr-2 h-4 w-4" />
                            Stop
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions and Progress */}
          <div className="space-y-8">
            {/* Quick Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6" />
                  <span>Quick Activities</span>
                </CardTitle>
                <CardDescription>
                  Short practices for busy moments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActivities.map((activity, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full h-auto p-4 justify-start"
                  >
                    <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center mr-3`}>
                      <activity.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{activity.title}</div>
                      <div className="text-sm text-muted-foreground">{activity.description}</div>
                      <div className="text-xs text-primary font-medium">{activity.duration}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Progress Towards Next Level */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6" />
                  <span>Progress</span>
                </CardTitle>
                <CardDescription>
                  Your journey to {userProgress.nextMilestone}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sessions this month</span>
                    <span className="font-bold">12 / 20</span>
                  </div>
                  <Progress value={60} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mindful minutes</span>
                    <span className="font-bold">180 / 300</span>
                  </div>
                  <Progress value={60} />
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-2">Next milestone rewards:</div>
                  <ul className="text-sm space-y-1">
                    <li>• Unlock advanced meditations</li>
                    <li>• Exclusive instructor content</li>
                    <li>• Special achievement badge</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Today's Reflection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6" />
                  <span>Daily Reflection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm italic">
                      "How are you feeling right now? What would serve you best in this moment?"
                    </p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Open Reflection Journal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mindful Reminders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <span>Mindful Reminders</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Moon className="mr-2 h-4 w-4" />
                  Set Evening Meditation
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Sun className="mr-2 h-4 w-4" />
                  Morning Mindfulness
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Cloud className="mr-2 h-4 w-4" />
                  Breathing Break Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
