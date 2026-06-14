import { Footer } from "@/components/Footer";
import { GetStartedForm } from "@/features/get-started/components/GetStartedForm";
import { BRAND_NAME } from "@/lib/brand";

export function GetStartedPage() {
  return (
    <>
      <main className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
              Get started with {BRAND_NAME}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Share a few details about your project so we can qualify the fit
              and schedule a focused discovery call.
            </p>
          </header>

          <section aria-labelledby="qualification-steps-heading" className="mb-8">
            <h2 id="qualification-steps-heading" className="sr-only">
              How it works
            </h2>
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <li className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <span className="text-sm font-semibold text-xone-violet">
                  Step 1
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us about your goals and timeline
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <span className="text-sm font-semibold text-xone-violet">
                  Step 2
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  We review fit and reach out within one business day
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <span className="text-sm font-semibold text-xone-violet">
                  Step 3
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Book a discovery call to scope your project
                </p>
              </li>
            </ol>
          </section>

          <GetStartedForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
