import { useState, type FormEvent } from "react";
import { PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { castles } from "@/data/castles";
import { themes } from "@/data/content";

const eventTypes = [
  "Birthday Party",
  "Kids Party",
  "School Event",
  "Family Gathering",
  "Church / Community Event",
  "Corporate Family Day",
  "Other Celebration",
];

const fieldClass =
  "mt-1.5 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function BookingForm({ defaultCastle }: { defaultCastle?: string | undefined }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit — connect to email/backend when the business is ready.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <PartyPopper className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-bold">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          We've received your booking request and will contact you shortly to confirm availability
          and details. This is an enquiry — your booking is only confirmed once our team replies.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <fieldset className="space-y-4">
        <legend className="font-display text-lg font-bold">Your details</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <input id="name" name="name" required className={fieldClass} />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <input id="email" name="email" type="email" required className={fieldClass} />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <input id="phone" name="phone" type="tel" required className={fieldClass} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-lg font-bold">Event information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="date">Event Date *</Label>
            <input id="date" name="date" type="date" required className={fieldClass} />
          </div>
          <div>
            <Label htmlFor="eventType">Event Type</Label>
            <select id="eventType" name="eventType" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select an event type
              </option>
              {eventTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="start">Start Time</Label>
            <input id="start" name="start" type="time" className={fieldClass} />
          </div>
          <div>
            <Label htmlFor="end">End Time</Label>
            <input id="end" name="end" type="time" className={fieldClass} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="location">Event Location *</Label>
            <input
              id="location"
              name="location"
              required
              placeholder="Suburb, city"
              className={fieldClass}
            />
          </div>
          <div>
            <Label htmlFor="children">Number of Children</Label>
            <input id="children" name="children" type="number" min={1} className={fieldClass} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-lg font-bold">Castle & theme</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="castle">Select Jumping Castle</Label>
            <select
              id="castle"
              name="castle"
              className={fieldClass}
              defaultValue={defaultCastle ?? ""}
            >
              <option value="">Not sure yet — please advise</option>
              {castles.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="themeType">Existing Theme or Custom Theme</Label>
            <select id="themeType" name="themeType" className={fieldClass} defaultValue="Existing">
              <option>Existing design</option>
              <option>Custom theme</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="preferredTheme">Preferred Theme</Label>
            <select
              id="preferredTheme"
              name="preferredTheme"
              className={fieldClass}
              defaultValue=""
            >
              <option value="">No preference</option>
              {themes.map((t) => (
                <option key={t.name}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-lg font-bold">Anything else?</legend>
        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea id="notes" name="notes" rows={4} className="mt-1.5 rounded-xl" />
        </div>
      </fieldset>

      <div>
        <Button type="submit" variant="default" size="xl" className="w-full sm:w-auto">
          Request Booking
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Submitting this form sends a booking enquiry. Your date is only reserved once we confirm
          it with you.
        </p>
      </div>
    </form>
  );
}
