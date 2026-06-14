import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-xone-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="cta-heading"
          className="mb-4 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl lg:text-4xl"
        >
          Let&apos;s Build Something Great Together!
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:mb-12 sm:text-lg">
          Ready to transform your ideas into powerful digital solutions? Get in
          touch with us today.
        </p>
        <div className="mx-auto mb-6 flex max-w-md flex-col gap-2 rounded-lg bg-white p-2 shadow-lg sm:mb-8 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder="What's your work email?"
            className="h-11 flex-1 border-0 bg-white px-4 shadow-none focus-visible:ring-0"
            aria-label="Work email"
          />
          <Button
            size="lg"
            className="h-11 px-6 font-semibold"
            onClick={() => navigate("/get-started")}
          >
            Get started
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          <em>Your email is safe with us — we only send what matters.</em>
        </p>
      </div>
    </section>
  );
}
