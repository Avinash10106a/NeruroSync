import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Smartphone, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Eye,
  Calendar,
  Target,
  Zap,
  Brain,
  Moon,
  Coffee,
  Lightbulb,
  Droplet,
  Heart,
  Activity
} from 'lucide-react';

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

interface BalanceData {
  metric: string;
  value: number;
}

const todayStats = {
  screenTime: '4h 32m',
  pickups: 67,
  mostUsedApp: 'Instagram',
  firstPickup: '7:23 AM',
  lastUsage: '11:47 PM',
  bedtimeDelay: '1h 12m'
};

const balanceData: BalanceData[] = [
  { metric: "Digital Time", value: 68 },
  { metric: "Physical Activity", value: 45 },
  { metric: "Mindfulness", value: 52 },
  { metric: "Sleep Quality", value: 80 },
  { metric: "Focus Time", value: 61 },
];

const weeklyData = [
  { day: 'Mon', screenTime: 5.2, pickups: 72, productivity: 65 },
  { day: 'Tue', screenTime: 4.8, pickups: 68, productivity: 72 },
  { day: 'Wed', screenTime: 6.1, pickups: 89, productivity: 58 },
  { day: 'Thu', screenTime: 4.3, pickups: 65, productivity: 78 },
  { day: 'Fri', screenTime: 5.8, pickups: 82, productivity: 62 },
  { day: 'Sat', screenTime: 7.2, pickups: 95, productivity: 45 },
  { day: 'Sun', screenTime: 6.5, pickups: 88, productivity: 52 }
];

const appUsage = [
  { name: 'Instagram', time: '1h 23m', percentage: 30, category: 'Social', color: 'bg-pink-500' },
  { name: 'YouTube', time: '58m', percentage: 21, category: 'Entertainment', color: 'bg-red-500' },
  { name: 'Safari', time: '45m', percentage: 16, category: 'Productivity', color: 'bg-blue-500' },
  { name: 'Messages', time: '32m', percentage: 12, category: 'Communication', color: 'bg-green-500' },
  { name: 'TikTok', time: '28m', percentage: 10, category: 'Social', color: 'bg-black' },
  { name: 'Other Apps', time: '26m', percentage: 11, category: 'Various', color: 'bg-gray-500' }
];

const insights = [
  {
    type: 'warning',
    icon: AlertTriangle,
    title: 'Late Night Usage Detected',
    description: 'You used your phone 1h 12m past your bedtime goal. This may affect sleep quality.',
    suggestion: 'Try enabling Do Not Disturb mode 1 hour before bed.',
    color: 'text-yellow-600'
  },
  {
    type: 'success',
    icon: CheckCircle,
    title: 'Great Progress This Week',
    description: 'You reduced your average screen time by 23 minutes compared to last week.',
    suggestion: 'Keep up the momentum with our mindfulness challenges!',
    color: 'text-green-600'
  },
  {
    type: 'info',
    icon: Lightbulb,
    title: 'Peak Usage Pattern',
    description: 'Your highest usage is between 8-10 PM. This is common but consider setting boundaries.',
    suggestion: 'Schedule a relaxing activity during this time instead.',
    color: 'text-blue-600'
  }
];

const goals = [
  { name: 'Daily Screen Time', current: 2.5, target: 4, unit: 'hours', progress: 63 },
  { name: 'Phone Pickups', current: 29, target: 50, unit: 'times', progress: 65 },
  { name: 'Social Media', current: 0.8, target: 2, unit: 'hours', progress: 48 },
  { name: 'Productive Apps', current: 45, target: 60, unit: 'minutes', progress: 75 }
];

export default function Analysis() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Digital Usage Analysis</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand your digital habits with AI-powered insights and personalized recommendations for healthier screen time.
          </p>
        </div>

        {/* 🔥 Health Vitals Section */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  <Card>
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <Heart className="w-6 h-6 text-red-500 mb-2" />
      <div className="text-2xl font-bold text-red-500">72 bpm</div>
      <div className="text-sm text-muted-foreground">Heart Rate</div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <Activity className="w-6 h-6 text-blue-500 mb-2" />
      <div className="text-2xl font-bold text-blue-500">120/80</div>
      <div className="text-sm text-muted-foreground">Blood Pressure</div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <Moon className="w-6 h-6 text-purple-500 mb-2" />
      <div className="text-2xl font-bold text-purple-500">7h 15m</div>
      <div className="text-sm text-muted-foreground">Sleep & Stress</div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <Droplet className="w-6 h-6 text-green-500 mb-2" />
      <div className="text-2xl font-bold text-green-500">98%</div>
      <div className="text-sm text-muted-foreground">SpO₂</div>
    </CardContent>
  </Card>
</div>



        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{todayStats.screenTime}</div>
                  <div className="text-sm text-muted-foreground">Screen Time Today</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-wellness-sky" />
                <div>
                  <div className="text-2xl font-bold">{todayStats.pickups}</div>
                  <div className="text-sm text-muted-foreground">Phone Pickups</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-lg font-bold">{todayStats.mostUsedApp}</div>
                  <div className="text-sm text-muted-foreground">Most Used App</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5 text-wellness-lavender" />
                <div>
                  <div className="text-lg font-bold">{todayStats.bedtimeDelay}</div>
                  <div className="text-sm text-muted-foreground">Past Bedtime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


        <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Part - Wellness Balance */}
      <div>
        <Card className="card-shadow border-0 bg-white/80 backdrop-blur-sm h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              Your Wellness Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={balanceData} outerRadius="80%">
                <defs>
                  <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9C89B8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#9C89B8" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#e0e0e0" />
                <PolarAngleAxis dataKey="metric" stroke="#666" />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Balance"
                  dataKey="value"
                  stroke="#9C89B8"
                  fill="url(#radarGradient)"
                  fillOpacity={1}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Right Part - Goals */}
      <div>
        <Card className="card-shadow border-0 bg-white/80 backdrop-blur-sm h-full">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6" />
              <span>Your Goals</span>
            </CardTitle>
            <CardDescription>
              Track your progress towards healthier digital habits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {goals.map((goal) => (
              <div key={goal.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{goal.name}</span>
                  <span className="text-sm font-bold">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{goal.progress}% of goal</span>
                  <span
                    className={
                      goal.progress >= 80
                        ? "text-green-600"
                        : goal.progress >= 60
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                  >
                    {goal.progress >= 80
                      ? "On track"
                      : goal.progress >= 60
                      ? "Close"
                      : "Needs attention"}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>

        

        {/* Main Content Tabs */}

        
        <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-0 mb-8">
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Charts and Usage */}
            <div className="lg:col-span-2 space-y-8">
              {/* Weekly Overview Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Weekly Screen Time Overview</span>
                  </CardTitle>
                  <CardDescription>
                    Your daily screen time and device pickups this week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyData.map((day, index) => (
                      <div key={day.day} className="flex items-center space-x-4">
                        <div className="w-12 text-sm font-medium">{day.day}</div>
                        <div className="flex-1 flex items-center space-x-2">
                          <div className="w-20 text-sm">{day.screenTime}h</div>
                          <Progress value={(day.screenTime / 8) * 100} className="flex-1" />
                          <div className="w-16 text-sm text-muted-foreground">{day.pickups}x</div>
                        </div>
                        <div className={`w-16 text-sm font-medium ${day.productivity >= 70 ? 'text-green-600' : day.productivity >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {day.productivity}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* App Usage Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6" />
                    <span>App Usage Breakdown</span>
                  </CardTitle>
                  <CardDescription>
                    Time spent in different apps today
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appUsage.map((app, index) => (
                      <div key={app.name} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${app.color}`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{app.name}</span>
                            <span className="text-sm font-bold">{app.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Progress value={app.percentage} className="flex-1" />
                            <span className="text-sm text-muted-foreground">{app.percentage}%</span>
                          </div>
                          <Badge variant="secondary" className="text-xs mt-1">{app.category}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Usage Patterns */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6" />
                    <span>Daily Usage Pattern</span>
                  </CardTitle>
                  <CardDescription>
                    When you use your device most throughout the day
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-12 gap-1 mb-4">
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i;
                      const usage = Math.random() * 100; // Simulated data
                      return (
                        <div key={hour} className="text-center">
                          <div 
                            className="w-full bg-primary/20 rounded-sm mb-1"
                            style={{ height: `${Math.max(usage * 0.8, 10)}px` }}
                          />
                          <div className="text-xs text-muted-foreground">
                            {hour === 0 ? '12AM' : hour === 12 ? '12PM' : hour > 12 ? `${hour-12}PM` : `${hour}AM`}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    Peak usage: 8:00 PM - 10:00 PM
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Goals and Insights */}
            <div className="space-y-8">
              {/* Goals Progress */}

              {/* AI Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-6 w-6" />
                    <span>AI Insights</span>
                  </CardTitle>
                  <CardDescription>
                    Personalized recommendations based on your usage patterns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-muted/30">
                      <div className="flex items-start space-x-3">
                        <insight.icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                          <p className="text-xs text-primary font-medium">{insight.suggestion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Set App Time Limits
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Moon className="mr-2 h-4 w-4" />
                    Configure Bedtime Mode
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Coffee className="mr-2 h-4 w-4" />
                    Schedule Focus Time
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Export Usage Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
