import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Book, Shield, Zap, Users, Mail } from 'lucide-react';

const faqCategories = [
  {
    title: "Getting Started",
    icon: Zap,
    color: "bg-primary/20",
    questions: [
      {
        question: "What is DigitalWell and how does it work?",
        answer: "DigitalWell is a comprehensive digital wellness platform that helps you build healthier relationships with technology. We use AI-powered analytics to track your digital habits, provide personalized recommendations, and offer gamified challenges to help reduce screen time and improve mental health. Our platform combines usage tracking, mindfulness activities, expert video content, and community support to create a holistic approach to digital wellness."
      },
      {
        question: "How do I get started with DigitalWell?",
        answer: "Getting started is simple! Create your free account, complete the initial wellness assessment, and connect your devices for tracking. Our onboarding process will guide you through setting up your first wellness goals and introduce you to key features like mindfulness activities, usage analysis, and community challenges."
      },
      {
        question: "Is DigitalWell free to use?",
        answer: "DigitalWell offers a free 14-day trial with full access to all features. After the trial, we have flexible subscription plans starting at $9.99/month. Our free tier includes basic usage tracking and limited access to mindfulness content, while premium plans unlock advanced analytics, unlimited video content, and exclusive community features."
      },
      {
        question: "What devices and platforms are supported?",
        answer: "DigitalWell works across iOS, Android, Windows, macOS, and web browsers. Our app integrates with your device's built-in screen time tools and provides additional insights through our browser extension and mobile apps. Cross-platform sync ensures your data stays consistent across all your devices."
      },
      {
        question: "How do I earn and redeem rewards?",
        answer: "You earn points by completing challenges, maintaining wellness streaks, and achieving personal goals. Points can be redeemed in our Rewards store for event tickets, merchandise, premium app subscriptions, and wellness experiences. Higher-tier achievements unlock exclusive rewards and recognition within the community."
      }
    ]
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    color: "bg-wellness-sky/40",
    questions: [
      {
        question: "How is my personal data protected?",
        answer: "Your privacy is our top priority. We use end-to-end encryption for all data transmission and storage. Personal information is anonymized for analytics, and we never sell your data to third parties. Our blockchain-based approach ensures you maintain full control over your data, with the ability to export or delete it at any time."
      },
      {
        question: "What data does DigitalWell collect?",
        answer: "We collect usage data (screen time, app usage patterns), wellness activity completion, and anonymized interaction data to improve our recommendations. We only collect data necessary to provide our services and with your explicit consent. Location data, personal messages, and sensitive information are never accessed or stored."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you can delete your account and all associated data at any time through your account settings. Data deletion is processed within 30 days, and we provide a data export option if you want to keep a copy of your wellness journey before deletion."
      },
      {
        question: "How do you ensure data security?",
        answer: "We implement bank-level security measures including AES-256 encryption, regular security audits, multi-factor authentication, and compliance with GDPR and CCPA regulations. Our infrastructure is hosted on secure cloud servers with 24/7 monitoring and automated threat detection."
      }
    ]
  },
  {
    title: "Features & Usage",
    icon: Book,
    color: "bg-wellness-mint/40",
    questions: [
      {
        question: "How does the usage analysis work?",
        answer: "Our AI-powered usage analysis monitors your screen time, app usage patterns, and digital habits across all connected devices. It provides insights into your most-used apps, peak usage times, and behavioral patterns. The system learns your habits and provides personalized recommendations for healthier digital behavior, including suggested break times and app usage limits."
      },
      {
        question: "What types of mindfulness activities are available?",
        answer: "We offer guided meditations (2-30 minutes), breathing exercises, digital detox challenges, mindful tech use practices, and gamified wellness activities. Content is categorized by difficulty level, duration, and specific goals like reducing anxiety, improving focus, or better sleep. New content is added weekly by certified wellness experts."
      },
      {
        question: "How do peer challenges and leaderboards work?",
        answer: "Join wellness challenges with friends or the broader community to achieve goals like screen-free hours, mindfulness streaks, or healthy habit building. Leaderboards track progress anonymously, and you can earn badges, points, and real-world rewards. Challenges range from daily goals to month-long transformative programs."
      },
      {
        question: "What kind of video coaching content is available?",
        answer: "Our library includes short-form videos (2-15 minutes) covering digital wellness strategies, mental health tips, productivity techniques, and expert interviews. Content is created by licensed therapists, digital wellness coaches, and technology experts. Videos are organized by topics like 'Breaking Social Media Addiction' and 'Healthy Work-from-Home Habits.'"
      },
      {
        question: "What types of challenges are available?",
        answer: "We offer various challenges including quick 5-30 minute activities (like '30-Min No Instagram'), productivity challenges (Pomodoro technique), daily habits (morning phone-free hour), and advanced challenges (24-hour social media detox). Challenges range from beginner to expert difficulty levels and cover categories like focus, mindfulness, sleep, and digital detox."
      },
      {
        question: "How does the video library work?",
        answer: "Our video library contains expert-guided content on mindfulness, breathing techniques, digital wellness tips, and productivity strategies. Videos range from 2-20 minutes and are categorized by topic, difficulty, and instructor. You can create playlists, track your progress, and access both free and premium content."
      },
      {
        question: "What insights does the analysis provide?",
        answer: "The Analysis section provides detailed insights into your digital habits including screen time patterns, app usage breakdown, peak usage hours, and goal tracking. Our AI analyzes your behavior to provide personalized recommendations for healthier digital habits and identifies areas for improvement."
      },
      {
        question: "How are real-world rewards earned and redeemed?",
        answer: "Complete challenges, maintain wellness streaks, and achieve personal goals to earn points. Redeem points for rewards like event tickets, wellness merchandise, premium app subscriptions, coaching sessions, and exclusive experiences. Our Rewards store features both digital and physical items, with new rewards added regularly based on community feedback."
      }
    ]
  },
  {
    title: "Community & Support",
    icon: Users,
    color: "bg-wellness-lavender/40",
    questions: [
      {
        question: "How can I connect with other users?",
        answer: "Join community forums, participate in group challenges, attend virtual wellness events, and connect with accountability partners. Our community guidelines ensure a supportive, judgment-free environment focused on mutual growth and encouragement in digital wellness journeys."
      },
      {
        question: "What support options are available?",
        answer: "We offer multiple support channels: in-app help center, email support (response within 24 hours), live chat during business hours, video tutorials, and community forums. Premium subscribers get priority support and access to one-on-one wellness coaching sessions."
      },
      {
        question: "Can I invite friends and family?",
        answer: "Yes! Invite friends and family to join your wellness journey. Create private groups, share achievements, and support each other's goals. Family plans offer discounted rates for multiple accounts and include parental controls for younger users."
      },
      {
        question: "How do I report issues or inappropriate content?",
        answer: "Use the report feature within the app or contact our moderation team directly. We have zero tolerance for harassment, spam, or inappropriate content. Our community team reviews reports within 4 hours and takes appropriate action to maintain a safe, supportive environment."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything you need to know about DigitalWell and your digital wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/feedback">
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Still Have Questions?
              </Button>
            </Link>
            <Link to="/signup">
              <Button>
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <Badge variant="secondary">{category.questions.length} questions</Badge>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-b last:border-b-0">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-16 bg-gradient-to-r from-wellness-mint/20 to-wellness-sky/20 border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Mail className="h-6 w-6" />
              Still Need Help?
            </CardTitle>
            <CardDescription className="text-base">
              Our support team is here to help you succeed on your digital wellness journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help! Contact our support team or browse our help resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="mailto:support@digitalwell.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </a>
              </Button>
              <Link to="/feedback">
                <Button>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Feedback
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
