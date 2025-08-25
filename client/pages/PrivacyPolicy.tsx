"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our
        platform.
      </p>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We may collect the following types of information when you use our
            services:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal details (name, email, phone number)</li>
            <li>Account and login information</li>
            <li>Usage data and activity logs</li>
            <li>Device and browser information</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Send important updates and notifications</li>
            <li>Protect against fraud, abuse, or security risks</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">3. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share limited information
            with trusted third-party service providers to operate our platform,
            comply with legal obligations, or protect our rights.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your data.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access and update your information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="font-medium">info@adgitmdelhi.ac.in</p>
        </CardContent>
      </Card>
    </div>
  );
}
