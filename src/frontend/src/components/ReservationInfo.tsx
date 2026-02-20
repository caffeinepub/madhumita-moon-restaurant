import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ReservationInfo() {
  return (
    <section id="reservation" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-golden mb-4">
            Visit Us
          </h2>
          <p className="text-cream/80 text-lg">
            We look forward to serving you an unforgettable dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-navy-card/80 backdrop-blur-sm border-golden/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-golden/10 rounded-lg">
                  <Clock className="w-5 h-5 text-golden" />
                </div>
                <CardTitle className="text-golden text-xl">Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-cream/90">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="text-golden">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="text-golden">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-golden">12:00 PM - 9:00 PM</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-card/80 backdrop-blur-sm border-golden/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-golden/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-golden" />
                </div>
                <CardTitle className="text-golden text-xl">Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-cream/90">
              <p className="mb-4">
                123 Moonlight Avenue<br />
                Guwahati, Assam 781001<br />
                India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-golden hover:text-golden-light transition-colors underline"
              >
                Get Directions →
              </a>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-br from-golden/10 to-crimson/10 backdrop-blur-sm border-golden/30">
          <CardHeader className="text-center">
            <CardTitle className="text-golden text-2xl font-display mb-2">
              Make a Reservation
            </CardTitle>
            <CardDescription className="text-cream/80">
              Contact us to reserve your table for an exceptional dining experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+918638918243"
                className="flex items-center gap-3 text-cream hover:text-golden transition-colors group"
              >
                <div className="p-3 bg-golden/10 rounded-full group-hover:bg-golden/20 transition-colors">
                  <Phone className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <div className="text-xs text-cream/60">Call Us</div>
                  <div className="font-semibold">+91 863 891 8243</div>
                </div>
              </a>
              
              <div className="hidden md:block w-px h-12 bg-golden/20" />
              
              <a
                href="mailto:reservations@madhumitamoon.com"
                className="flex items-center gap-3 text-cream hover:text-golden transition-colors group"
              >
                <div className="p-3 bg-golden/10 rounded-full group-hover:bg-golden/20 transition-colors">
                  <Mail className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <div className="text-xs text-cream/60">Email Us</div>
                  <div className="font-semibold">reservations@madhumitamoon.com</div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
