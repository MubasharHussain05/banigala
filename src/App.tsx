import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Branches from "@/pages/branches";
import EventCatering from "@/pages/event-catering";
import VenueHire from "@/pages/venue-hire";
import Franchise from "@/pages/franchise";
import Menu from "@/pages/menu";
import Contact from "@/pages/contact";
import FranchiseeLogin from "@/pages/franchisee-login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/branches" component={Branches} />
      <Route path="/event-catering" component={EventCatering} />
      <Route path="/venue-hire" component={VenueHire} />
      <Route path="/franchise" component={Franchise} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
      <Route path="/franchisee-login" component={FranchiseeLogin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
