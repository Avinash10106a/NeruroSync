import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  MessageSquare,
  Star,
  Lightbulb,
  Bug,
  Heart,
  Send,
  CheckCircle,
  Mail,
  User,
  Target
} from 'lucide-react';

const feedbackTypes = [
  { value: 'bug', label: 'Bug Report', icon: Bug, color: 'bg-red-500' },
  { value: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'bg-blue-500' },
  { value: 'general', label: 'General Feedback', icon: MessageSquare, color: 'bg-green-500' },
  { value: 'praise', label: 'Compliment', icon: Heart, color: 'bg-pink-500' },
  { value: 'rewards', label: 'Rewards & Shopping', icon: Star, color: 'bg-yellow-500' },
  { value: 'challenges', label: 'Challenges', icon: Target, color: 'bg-purple-500' },
];

const ratingLabels = [
  'Very Dissatisfied',
  'Dissatisfied', 
  'Neutral',
  'Satisfied',
  'Very Satisfied'
];

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: 0,
    subject: '',
    message: '',
    allowContact: false,
    subscribeUpdates: false,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.feedbackType || !formData.message.trim()) {
      alert('Please select a feedback type and provide a message.');
      return;
    }
    
    // TODO: Implement actual feedback submission logic
    console.log('Feedback submission:', formData);
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    handleChange('rating', rating);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md text-center border-0 shadow-xl">
          <CardContent className="pt-12 pb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve DigitalWell.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline" 
                className="w-full"
              >
                Submit Another Response
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="w-full"
              >
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">We Value Your Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Help us improve DigitalWell by sharing your thoughts about our Analysis, Mindfulness, Videos, Challenges, and Rewards features. Your input shapes our future.
          </p>
        </div>

        {/* Feedback Form */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Share Your Feedback</CardTitle>
            <CardDescription>
              All fields marked with * are required. We read every piece of feedback and appreciate your time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Type of Feedback *
                </h3>
                <RadioGroup 
                  value={formData.feedbackType} 
                  onValueChange={(value) => handleChange('feedbackType', value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {feedbackTypes.map((type) => (
                    <div key={type.value} className="relative">
                      <RadioGroupItem
                        value={type.value}
                        id={type.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={type.value}
                        className="flex items-center space-x-3 rounded-lg border-2 border-muted p-4 cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5"
                      >
                        <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                          <type.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{type.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Rating */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Overall Satisfaction</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingClick(rating)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            rating <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {formData.rating > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {ratingLabels[formData.rating - 1]}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Brief summary of your feedback"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide detailed feedback. The more specific you are, the better we can help!"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="allowContact"
                      checked={formData.allowContact}
                      onCheckedChange={(checked) => handleChange('allowContact', checked)}
                    />
                    <Label htmlFor="allowContact" className="text-sm">
                      Allow our team to contact me about this feedback
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribeUpdates"
                      checked={formData.subscribeUpdates}
                      onCheckedChange={(checked) => handleChange('subscribeUpdates', checked)}
                    />
                    <Label htmlFor="subscribeUpdates" className="text-sm">
                      Subscribe to product updates and announcements
                    </Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Your feedback is important to us. We typically respond within 24-48 hours for questions that require a response.
          </p>
        </div>
      </div>
    </div>
  );
}
