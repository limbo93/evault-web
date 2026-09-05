import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Lock, Smartphone, Shield, CheckCircle2, Download, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">eVault</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Button variant="default" size="sm">
              Download
            </Button>
          </div>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Your <span className="text-primary">Secure Vault</span> in Your Pocket
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Store notes, passwords, and todo lists with military-grade encryption. Your data stays yours, always encrypted, completely private.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://play.google.com/store/apps/details?id=com.wecoders.evault" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 w-full">
                <Download className="w-5 h-5" />
                Download Now
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              { icon: Lock, text: 'End-to-end Encryption' },
              { icon: Smartphone, text: 'Works Offline' },
              { icon: Shield, text: 'Zero-knowledge' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Everything You Need
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          eVault combines secure note-taking, password management, and task tracking into one beautiful app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Secure Notes</h3>
            <p className="text-muted-foreground">
              Write anything without worry. Your notes are encrypted end-to-end, visible only to you.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="w-4 h-4" />
              Rich text formatting
            </div>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Password Manager</h3>
            <p className="text-muted-foreground">
              Store passwords and sensitive information securely. Auto-fill support for convenience.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="w-4 h-4" />
              Military-grade encryption
            </div>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Todo Lists</h3>
            <p className="text-muted-foreground">
              Organize your tasks, set reminders, and track your productivity. All encrypted.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="w-4 h-4" />
              Categories & reminders
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl my-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Security You Can Trust</h2>
          <p className="text-lg text-muted-foreground mb-8">
            eVault uses industry-standard encryption protocols to ensure your data is always protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'End-to-End Encryption',
                desc: 'Your data is encrypted on your device before leaving it. Even we cannot see your data.',
              },
              {
                title: 'Zero-Knowledge Architecture',
                desc: 'We never have access to your unencrypted data. You\'re the only one who can decrypt it.',
              },
              {
                title: 'Offline-First',
                desc: 'Works completely offline. Sync securely when you have internet.',
              },
              {
                title: 'Free with Premium Option',
                desc: 'Enjoy eVault free with ads, or go ad-free with a premium subscription. No tracking ever.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Secure Your Data?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download eVault today from the Google Play Store and experience true security and privacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download on Play Store
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <span className="font-bold text-foreground">eVault</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure storage for your notes, passwords, and todos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors flex items-center gap-2"><Code className="w-4 h-4" /> GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} eVault. All rights reserved. Security and privacy first.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
