import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { LegalBody } from "@/components/sections/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How this site collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated 2025. Your privacy matters. Here's how information is handled on this site."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />
      <section className="container-p py-section">
        <LegalBody
          sections={[
            {
              heading: "Information collected",
              body: [
                "When you submit the contact form, the details you provide (name, email, and message) are used solely to respond to your enquiry.",
                "Anonymous analytics may be collected to understand how visitors use the site so the experience can keep improving.",
              ],
            },
            {
              heading: "How information is used",
              body: [
                "Your information is used to reply to you, deliver requested services, and improve the site. It is never sold.",
              ],
            },
            {
              heading: "Cookies",
              body: [
                "This site uses minimal cookies for analytics and to remember your preferences. You control what you allow through the consent banner.",
              ],
            },
            {
              heading: "Your rights",
              body: [
                "You may request access to, correction of, or deletion of your personal data at any time by emailing the address on the contact page.",
              ],
            },
          ]}
        />
      </section>
    </PageTransition>
  );
}
