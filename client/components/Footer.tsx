import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DigitalWell</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering your journey to digital wellness through mindful technology use and mental health improvement.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/darshit.jain08?utm_source=ig_web_button_share_sheet&igsh=aHVjcmx3aDh6Z3Zx" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/himansh_vasisht/?utm_source=ig_web_button_share_sheet" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/abhishekbansalp?utm_source=ig_web_button_share_sheet&igsh=MW1ycG4yZWQ2Z3o2cw==" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="/Analysis" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Usage Analysis
                </Link>
              </li>
              <li>
                <Link to="/mindfulness" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mindfulness Activities
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Video Coaching
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Peer Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <a href="/HelpCenter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/PrivacyPolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/TermsAndConditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@adgitmdelhi.ac.in</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span> (+91) 85278-97799</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>FC-26<br />Shastri Park, New Delhi - 110 053</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 DigitalWell. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
