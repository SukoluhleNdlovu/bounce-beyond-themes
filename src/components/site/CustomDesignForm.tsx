import { useState, type FormEvent } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { castles } from "@/data/castles";
import { themes } from "@/data/content";

const fieldClass =
  "mt-1.5 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function CustomDesignForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <Sparkles className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-bold">Your custom design request is in!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you! Our team will contact you shortly to chat through your theme, colours and
          decorations, and to confirm availability and pricing.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="cd-name">Full Name *</Label>
          <input id="cd-name" name="name" required className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cd-email">Email Address *</Label>
          <input id="cd-email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cd-phone">Phone Number *</Label>
          <input id="cd-phone" name="phone" type="tel" required className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cd-date">Event Date *</Label>
          <input id="cd-date" name="date" type="date" required className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cd-eventType">Event Type</Label>
          <input
            id="cd-eventType"
            name="eventType"
            placeholder="Birthday party, school event…"
            className={fieldClass}
          />
        </div>
        <div>
          <Label htmlFor="cd-castle">Preferred Jumping Castle</Label>
          <select id="cd-castle" name="castle" className={fieldClass} defaultValue="">
            <option value="">Not sure yet — please advise</option>
            {castles.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="cd-theme">Birthday Theme</Label>
          <select id="cd-theme" name="theme" className={fieldClass} defaultValue="">
            <option value="">Select a theme</option>
            {themes.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="cd-colours">Preferred Colours</Label>
          <input
            id="cd-colours"
            name="colours"
            placeholder="e.g. pink, gold and white"
            className={fieldClass}
          />
        </div>
        <div>
          <Label htmlFor="cd-age">Child's Age</Label>
          <input id="cd-age" name="age" type="number" min={1} className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cd-children">Number of Children</Label>
          <input id="cd-children" name="children" type="number" min={1} className={fieldClass} />
        </div>
      </div>

      <div>
        <Label htmlFor="cd-requirements">Additional Requirements</Label>
        <Textarea
          id="cd-requirements"
          name="requirements"
          rows={3}
          placeholder="Decor, props, bunting, matching colours…"
          className="mt-1.5 rounded-xl"
        />
      </div>

      <div>
        <Label htmlFor="cd-notes">Additional Notes</Label>
        <Textarea id="cd-notes" name="notes" rows={3} className="mt-1.5 rounded-xl" />
      </div>

      <Button type="submit" variant="default" size="xl" className="w-full sm:w-auto">
        Submit Custom Design Request
      </Button>
    </form>
  );
}
