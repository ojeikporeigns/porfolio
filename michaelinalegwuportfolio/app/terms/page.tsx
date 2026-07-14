import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { LegalBody } from "@/components/sections/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms that govern your use of this website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated 2025. By using this site you agree to the following terms."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms", href: "/terms" },
        ]}
      />
      <section className="container-p py-section">
        <LegalBody
          sections={[
            {
              heading: "Use of this site",
              body: [
                "This website and its content are provided for informational purposes. You may browse and share links freely.",
              ],
            },
            {
              heading: "Intellectual property",
              body: [
                "All original design, code, and written content on this site are the property of Michael Emmanuel Inalegwu unless otherwise credited. Portfolio case studies shown here are illustrative samples.",
              ],
            },
            {
              heading: "Project engagements",
              body: [
                "Client work is governed by a separate written agreement covering scope, timeline, payment, and deliverables. Nothing on this site constitutes a binding offer.",
              ],
            },
            {
              heading: "Limitation of liability",
              body: [
                "This site is provided as is. Reasonable care is taken to keep information accurate, but no warranty is made as to completeness or fitness for a particular purpose.",
              ],
            },
          ]}
        />
      </section>
    </PageTransition>
  );
}
