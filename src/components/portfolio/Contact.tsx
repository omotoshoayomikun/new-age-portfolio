"use client"

import { useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import Mail from "../../../public/svg/Mail";
import Linkedin from "../../../public/svg/Linkedin";
import Github from "../../../public/svg/Github";
import Link from "next/link";

const inputClass =
  "w-full rounded-lg border border-input bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setSending(true);

     try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error("Failed to send message");

            toast.success("Message sent successfully!");
            formElement.reset();
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setSending(false);
            
        }


    // window.setTimeout(() => {
    //   setSending(false);
    //   toast.success("Thanks for reaching out — I'll reply within a day or two.");
    //   form.reset(); 
    // }, 700);
  };

  return (
    <SectionShell
      id="contact"
      index="07"
      title="Contact"
      eyebrow="I'm open to senior engineering roles and selective consulting work. Say hello."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm">
                  Name
                </label>
                <input id="contact-name" name="name" required className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className={inputClass}
                placeholder="What is this about?"
              />

            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className={inputClass}
                placeholder="What are you building?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <MagneticButton type="submit" variant="solid">
              {sending ? "Sending…" : "Send message"}
            </MagneticButton>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 rounded-2xl border border-border bg-surface/40 p-6">
            <div>
              <p className="eyebrow">Direct</p>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline mt-3 inline-flex items-center gap-2 text-base"
              >
                <Mail />
                {profile.email}
              </a>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <Linkedin />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <Github />
                  GitHub
                </a>
              </li>
            </ul>
            <MagneticButton>
              <Link href={profile.resumeUrl} download="Omotosho_Ayomikun_Resume.pdf" className="flex gap-3">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}