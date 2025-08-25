"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-8">
        Please read these Terms and Conditions carefully before using our
        platform. By accessing or using our services, you agree to be bound by
        these terms.
      </p>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our platform, you confirm that you accept
            these Terms and Conditions and that you agree to comply with them.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">2. User Accounts</h2>
          <p>
            To access certain features, you may be required to create an
            account. You agree to provide accurate and complete information and
            to keep this information up-to-date.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">3. Use of Services</h2>
          <p>You agree not to use our services for any unlawful purposes or:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To violate any applicable laws or regulations</li>
            <li>To infringe on the rights of others</li>
            <li>To transmit harmful or malicious software</li>
            <li>To engage in fraud, harassment, or abusive conduct</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and materials available on this platform
            are the property of their respective owners. You may not copy,
            modify, or distribute content without prior written consent.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            We are not liable for any direct, indirect, or consequential damages
            that result from your use of our services, including but not limited
            to data loss, service interruptions, or unauthorized access.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate these Terms and Conditions or engage in harmful activities.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p className="font-medium">support@yourapp.com</p>
        </CardContent>
      </Card>
    </div>
  );
}
