import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-white/20' 
          : 'bg-black/10 backdrop-blur-sm'
      }`}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-white">BANIGALA</h1>
          </div>

          <div className="items-center hidden gap-8 md:flex">
            <Link href="/">
              <button className="transition-colors text-white/90 hover:text-white" data-testid="link-home">
                Home
              </button>
            </Link>
            <Link href="/about">
              <button className="transition-colors text-white/90 hover:text-white" data-testid="link-about">
                About
              </button>
            </Link>
            <Link href="/services">
              <button className="transition-colors text-white/90 hover:text-white" data-testid="link-services">
                Services
              </button>
            </Link>
            <Link href="/menu">
              <button className="transition-colors text-white/90 hover:text-white" data-testid="link-menu">
                Menu
              </button>
            </Link>
            <Link href="/contact">
              <button className="transition-colors text-white/90 hover:text-white" data-testid="link-contact">
                Contact
              </button>
            </Link>

            <Button
              variant="default"
              onClick={() => console.log('Book table clicked')}
              data-testid="button-book-table"
            >
              ORDER ONLINE
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t md:hidden border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            <Link href="/">
              <button className="block w-full py-2 text-left transition-colors text-foreground hover:text-primary" data-testid="mobile-link-home">
                Home
              </button>
            </Link>
            <Link href="/about">
              <button className="block w-full py-2 text-left transition-colors text-foreground hover:text-primary" data-testid="mobile-link-about">
                About
              </button>
            </Link>
            <Link href="/services">
              <button className="block w-full py-2 text-left transition-colors text-foreground hover:text-primary" data-testid="mobile-link-services">
                Services
              </button>
            </Link>
            <Link href="/menu">
              <button className="block w-full py-2 text-left transition-colors text-foreground hover:text-primary" data-testid="mobile-link-menu">
                Menu
              </button>
            </Link>
            <Link href="/contact">
              <button className="block w-full py-2 text-left transition-colors text-foreground hover:text-primary" data-testid="mobile-link-contact">
                Contact
              </button>
            </Link>

            <Button
              variant="default"
              className="w-full"
              onClick={() => console.log('Order online clicked')}
              data-testid="mobile-button-order-online"
            >
              ORDER ONLINE
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
