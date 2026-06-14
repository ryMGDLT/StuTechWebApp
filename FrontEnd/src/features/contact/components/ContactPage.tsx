import { Footer } from "@/components/Footer";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { BRAND_NAME } from "@/lib/brand";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export function ContactPage() {
  return (
    <>
      <main className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
              Contact {BRAND_NAME}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us about your project. We&apos;ll respond within one business
              day to schedule a discovery call.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <section aria-labelledby="contact-details-heading">
              <h2
                id="contact-details-heading"
                className="mb-6 text-2xl font-semibold text-foreground"
              >
                Get in touch
              </h2>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <FaEnvelope
                    className="mt-1 h-5 w-5 shrink-0 text-xone-violet"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@xonesoftware.dev"
                      className="transition-colors hover:text-xone-violet"
                    >
                      hello@xonesoftware.dev
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone
                    className="mt-1 h-5 w-5 shrink-0 text-xone-violet"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="transition-colors hover:text-xone-violet"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    className="mt-1 h-5 w-5 shrink-0 text-xone-violet"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>Remote-first team serving clients worldwide</p>
                  </div>
                </li>
              </ul>
            </section>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
