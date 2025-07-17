import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Brain, Users, Lightbulb, Compass, Mail } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { BionicText } from "@/components/ui/bionic-text";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-background" id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="text-primary" size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-6">
              <span className="soul-text-gradient">Welcome to Soul Made AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              <BionicText>A home for heart-led creators building with soul and strategy.</BionicText>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🌱</span>
              Our Story
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <p className="text-xl font-medium text-[hsl(var(--dark-gray))]">
                  <BionicText>Soul Made AI began with a simple but powerful truth:</BionicText>
                </p>
                <p className="text-2xl font-bold text-center text-primary italic">
                  "The world doesn't need more noise. It needs more meaningful creations."
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <BionicText>Our founder Penelope Silver had spent years behind the scenes – supporting others, selling for others, helping them shine. But when it came to her own ideas? That felt harder.</BionicText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <BionicText>So, she flipped the script. Instead of trying to become the loudest voice in the room, she built a space where quiet brilliance is seen, celebrated, and supported.</BionicText>
                </p>
                <p className="text-xl font-semibold text-center text-secondary">
                  <BionicText>And that became Soul Made AI.</BionicText>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Believe */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🔮</span>
              What We Believe
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={32} />
                </div>
                <p className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>You don't need to go viral to have value.</BionicText>
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="text-secondary" size={32} />
                </div>
                <p className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>You don't need to hustle harder to be seen.</BionicText>
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="text-accent" size={32} />
                </div>
                <p className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>You don't need to sell your soul to scale.</BionicText>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              <BionicText>We believe in aligned tools, soulful strategy, and using AI in a way that feels authentic, supportive, and human.</BionicText>
            </p>
          </div>
        </section>

        {/* What Is Soul Made AI */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">💡</span>
              What Is Soul Made AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              <BionicText>It's not just a product. It's a platform. A movement. A mindset.</BionicText>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">✨</span>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))]">For creators:</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <BionicText>We give you tools that get you – from soulful prompt packs to custom GPTs that sound like you (not a corporate robot).</BionicText>
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🧠</span>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))]">For coaches, writers, and healers:</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <BionicText>We help you automate, organise, and express your brilliance – without burning out.</BionicText>
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">❤️‍🔥</span>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))]">For curious humans:</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <BionicText>We teach you how to work with AI, not against your intuition.</BionicText>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🌍</span>
              Who It's For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              <BionicText>You'll love Soul Made AI if you're:</BionicText>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center p-4 bg-primary/5 rounded-lg">
              <span className="text-xl mr-4">🌟</span>
              <p className="font-medium text-[hsl(var(--dark-gray))]">
                <BionicText>A quiet rebel with a message that matters</BionicText>
              </p>
            </div>
            <div className="flex items-center p-4 bg-secondary/5 rounded-lg">
              <span className="text-xl mr-4">🧩</span>
              <p className="font-medium text-[hsl(var(--dark-gray))]">
                <BionicText>A neurospicy visionary who struggles with structure</BionicText>
              </p>
            </div>
            <div className="flex items-center p-4 bg-accent/5 rounded-lg">
              <span className="text-xl mr-4">💫</span>
              <p className="font-medium text-[hsl(var(--dark-gray))]">
                <BionicText>A soulful seller who wants to scale without selling out</BionicText>
              </p>
            </div>
            <div className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="text-xl mr-4">🌱</span>
              <p className="font-medium text-[hsl(var(--dark-gray))]">
                <BionicText>A beginner or builder looking for smart, gentle tech that works with your flow</BionicText>
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Find Inside */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🧰</span>
              What You'll Find Inside
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <CardContent>
                <span className="text-3xl mb-4 block">🪄</span>
                <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>Soul-Led Prompt Packs</BionicText>
                </h3>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <span className="text-3xl mb-4 block">🛠️</span>
                <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>Custom GPTs made for real-life work</BionicText>
                </h3>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <span className="text-3xl mb-4 block">📦</span>
                <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>Templates, trainings + tutorials</BionicText>
                </h3>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <span className="text-3xl mb-4 block">🤝</span>
                <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>Supportive community (coming soon)</BionicText>
                </h3>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <span className="text-3xl mb-4 block">🎓</span>
                <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">
                  <BionicText>Future courses + spiritual tech tools</BionicText>
                </h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why We Do This */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4 flex items-center justify-center gap-3">
              <Compass className="text-primary" size={32} />
              Why We Do This
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              <BionicText>We're here to help creators like you...</BionicText>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">
                <BionicText>Get seen without shouting</BionicText>
              </h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">
                <BionicText>Sell without sleaze</BionicText>
              </h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">
                <BionicText>Show up without self-doubt</BionicText>
              </h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 max-w-2xl mx-auto">
              <CardContent>
                <p className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">
                  <BionicText>This is AI done differently.</BionicText>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  <BionicText>Rooted in soul.</BionicText>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <BionicText>Built for now.</BionicText>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-6 flex items-center justify-center gap-3">
              <span className="text-2xl">💌</span>
              Come Build With Us
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              <BionicText>Whether you're just starting or ready to scale with soul, Soul Made AI is here to help you stay true to your vision, your voice, and your values — while letting tech do the heavy lifting.</BionicText>
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-primary">
                <BionicText>You're not too late. You're right on time.</BionicText>
              </p>
              <p className="text-lg font-semibold text-secondary">
                <BionicText>And we saved you a seat.</BionicText>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                  Explore Our Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-3 flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}