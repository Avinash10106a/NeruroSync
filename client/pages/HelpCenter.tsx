"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HelpCenter() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* 🔍 Search Bar */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-muted-foreground mb-4">
          Need assistance? Use the search bar, explore quick links, or contact our team.
        </p>
        <Input
          placeholder="Search help topics..."
          className="max-w-md mx-auto"
        />
      </div>

      {/* 📞 Contact Support */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <textarea
              className="w-full rounded-md border p-2"
              placeholder="Describe your issue..."
              rows={4}
              required
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ⚡ Quick Links */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/account" className="p-4 border rounded-lg hover:bg-accent">
              👤 Account Settings
            </a>
            <a href="/privacy" className="p-4 border rounded-lg hover:bg-accent">
              🔒 Privacy & Security
            </a>
            <a href="/guides" className="p-4 border rounded-lg hover:bg-accent">
              📘 User Guides
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
