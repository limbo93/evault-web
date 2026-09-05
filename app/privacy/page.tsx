'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Lock, ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Lock className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">eVault</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              eVault (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains our data practices and your rights regarding the personal information we collect through our mobile application.
            </p>
            <p className="text-muted-foreground">
              By using eVault, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. What Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
            <p className="text-muted-foreground mb-4">
              When you create an account and use eVault, you may provide:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Email address (for account creation and recovery)</li>
              <li>Master password (never stored, only verified)</li>
              <li>Encrypted vault data (notes, passwords, todos)</li>
              <li>Device information (for crash reporting)</li>
              <li>Usage analytics (anonymized)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              We automatically collect certain information about your device and how you interact with eVault:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Device type and operating system version</li>
              <li>App version and build number</li>
              <li>Crash logs and error reports</li>
              <li>General usage patterns (anonymized)</li>
              <li>IP address (for security purposes only)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Protect Your Data</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">3.1 End-to-End Encryption</h3>
            <p className="text-muted-foreground mb-4">
              All your vault data is encrypted locally on your device using AES-256 encryption before it ever leaves your phone. We use a zero-knowledge architecture, meaning:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>We never have access to your unencrypted data</li>
              <li>Only you can decrypt your vault</li>
              <li>Your encryption keys never leave your device</li>
              <li>Even our employees cannot access your data</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Master Password</h3>
            <p className="text-muted-foreground mb-4">
              Your master password is never stored on our servers. We only store a cryptographic hash for verification purposes. This means if our servers were compromised, your data would remain secure.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.3 Offline Functionality</h3>
            <p className="text-muted-foreground">
              eVault works completely offline. Your data is stored locally on your device, and synchronization is optional. You maintain full control over when and if your data is synced.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Providing and improving the eVault service</li>
              <li>Authenticating your account securely</li>
              <li>Syncing your encrypted data across devices (if enabled)</li>
              <li>Diagnosing and fixing technical issues</li>
              <li>Improving app performance and user experience</li>
              <li>Communicating important security updates</li>
              <li>Complying with legal obligations</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do NOT use your information for marketing, advertising, or selling to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing and Third Parties</h2>
            <p className="text-muted-foreground mb-4">
              We do not share, sell, or rent your personal information to third parties. However, we may share information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>With law enforcement when legally required</li>
              <li>To comply with court orders or government requests</li>
              <li>With service providers who help us maintain eVault (under strict confidentiality agreements)</li>
              <li>In case of acquisition or merger (with prior notification)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Any third-party service providers have access only to information necessary to perform their services and are contractually obligated to maintain its confidentiality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your data only as long as necessary to provide eVault services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Your encrypted vault data is stored as long as your account is active</li>
              <li>Crash logs and analytics are deleted after 90 days</li>
              <li>Account metadata is deleted 30 days after account deletion</li>
              <li>If you delete your account, all associated data is permanently deleted</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Right to Access:</strong> You can request a copy of your personal data</li>
              <li><strong>Right to Correction:</strong> You can correct inaccurate information</li>
              <li><strong>Right to Deletion:</strong> You can request deletion of your data</li>
              <li><strong>Right to Portability:</strong> You can request your data in a portable format</li>
              <li><strong>Right to Object:</strong> You can object to certain data processing</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise any of these rights, please contact us at privacy@evault.app
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground">
              eVault is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13 without parental consent, we will delete such information promptly. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Security Measures</h2>
            <p className="text-muted-foreground mb-4">
              We implement multiple layers of security to protect your information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>AES-256 encryption for all vault data</li>
              <li>TLS/SSL encryption for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure authentication protocols</li>
              <li>Biometric authentication support</li>
              <li>Automatic session timeout</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              While we strive to protect your information, no security system is impenetrable. Please use a strong master password and enable biometric authentication for added security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Significant changes will be notified to you via email or through the app. Your continued use of eVault after changes become effective constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <p className="text-foreground"><strong>Email:</strong> privacy@evault.app</p>
              <p className="text-foreground mt-2"><strong>Mailing Address:</strong></p>
              <p className="text-foreground">eVault Privacy Team<br />Security & Privacy Division</p>
            </div>
            <p className="text-muted-foreground">
              We will respond to your inquiry within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Jurisdiction</h2>
            <p className="text-muted-foreground">
              This Privacy Policy is governed by applicable data protection laws including GDPR, CCPA, and other privacy regulations. If you are located in the EU, you have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <p className="text-sm text-muted-foreground text-center">
              Thank you for trusting eVault with your sensitive information. We are committed to maintaining the highest standards of privacy and security.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
