import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, Smartphone, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            We craft innovative digital experiences that drive growth and engagement
            for forward-thinking brands.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Monitor className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                <p className="text-gray-600">
                  Beautiful, responsive websites that convert visitors into customers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-600">
                  Native and cross-platform apps that deliver exceptional user experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-600">
                  Data-driven strategies that boost your online presence and ROI.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
                <p className="text-gray-600">
                  Compelling brand narratives that resonate with your audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch with our team
            to discuss your next project.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold">DigitalCraft</h3>
              <p className="text-gray-400 mt-2">Crafting digital excellence</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-purple-400">About</a>
              <a href="#" className="hover:text-purple-400">Services</a>
              <a href="#" className="hover:text-purple-400">Work</a>
              <a href="#" className="hover:text-purple-400">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}