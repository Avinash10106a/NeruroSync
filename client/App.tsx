import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Analysis from "./pages/Analysis";
import Mindfulness from "./pages/Mindfulness";
import Videos from "./pages/Videos";
import Challenges from "./pages/Challenges";
import Rewards from "./pages/Rewards";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="mindfulness" element={<Mindfulness />} />
            <Route path="videos" element={<Videos />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="HelpCenter" element={<HelpCenter />} />
            <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="TermsAndConditions" element={<TermsAndConditions/>} />
            <Route path="Community" element={<Community/>} />
          </Route>
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
