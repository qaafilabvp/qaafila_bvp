import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo";
import Hero from "../components/hero/Hero";
import AboutSpread from "../components/about/AboutSpread";
import PresidentCard from "../components/members/PresidentCard";
import MemberGrid from "../components/members/MemberGrid";
import TeacherIncharge from "../components/members/TeacherIncharge";
import LegacyTimeline from "../components/legacy/LegacyTimeline";
import EventGrid from "../components/events/EventGrid";
import WriteupGrid from "../components/writeups/WriteupGrid";
import Gallery from "../components/gallery/Gallery";
import JoinSection from "../components/join/JoinSection";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import {
  president,
  namedCoreCommittee,
  hod,
  principal,
  teacherIncharge,
} from "../data/members";
import { legacy } from "../data/legacy";
import { events } from "../data/events";
import { writeups } from "../data/writeups";
import { memories } from "../data/memories";
import { site } from "../data/site";
import { resultsPublished, selectedMembers } from "../data/selectedMembers";
export default function Home() {
  return (
    <>
      <Seo />
      <Hero />

      <section className="border-y border-gold/15 bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-deva text-lg text-parchment/80">
            {site.devanagari}
          </p>
          <p className="text-xs tracking-[0.28em] uppercase text-gold/70">
            A pariwaar of words
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
        <AboutSpread />
        <div className="mt-12">
          <Button to="/about">Read the full note</Button>
        </div>
      </section>

      <section className="bg-ink-2 border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <SectionHeading
            kicker="The people"
            heading="Meet the team"
            subtitle="The people carrying the pariwaar forward."
            roman="II"
          />
          <div className="mt-12">
            <TeacherIncharge members={[principal, hod, teacherIncharge]} />
          </div>
          <div className="mt-16">
            <PresidentCard member={president} />
          </div>
          <div className="mt-20">
            <p className="kicker mb-10">The rest of the table</p>
            <MemberGrid members={namedCoreCommittee} />
          </div>
          <div className="mt-12">
            <Button to="/execom">Meet the team</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
        <SectionHeading
          kicker="Those who came before"
          heading="The Legacy"
          subtitle="Those who carried the Qaafila before us."
          roman="III"
        />
        <div className="mt-12">
          <LegacyTimeline entries={legacy.slice(0, 3)} showFounding />
        </div>
        <div className="mt-10">
          <Button to="/legacy">Walk the timeline</Button>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-gold/15 bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <SectionHeading
            kicker="2026-27"
            heading="Selected members"
            subtitle="The people chosen to walk with Qaafila this year."
            roman="IV"
          />
          <p className="mt-10 max-w-2xl text-cream/70 leading-relaxed">
            {resultsPublished
              ? `${selectedMembers.length} people, across social media, events, design, video, the podcast, content, and performance.`
              : "The selected list will be published here."}
          </p>
          <div className="mt-10">
            <Button to="/results">See the selected members</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            kicker="Evenings kept"
            heading="The Archive"
            subtitle="Moments that became memories."
            roman="V"
          />
          <Link to="/events" className="ghost-btn self-start md:self-auto">
            All evenings <span className="text-gold">→</span>
          </Link>
        </div>
        <div className="mt-16">
          <EventGrid events={events.slice(0, 5)} />
        </div>
      </section>

      <section className="bg-ink-2 border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <SectionHeading
            kicker="The journal"
            heading="Write-ups"
            subtitle="Words that refused to remain unwritten."
            roman="VI"
          />
          <div className="mt-16">
            <WriteupGrid pieces={writeups.slice(0, 6)} layout="row" />
          </div>
          <div className="mt-10">
            <Button to="/write-ups">Open the journal</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            kicker="The eye"
            heading="Memories"
            subtitle="A visual ledger of rooms, stages and afters."
            roman="VII"
          />
          <Link to="/memories" className="ghost-btn self-start">
            The full ledger <span className="text-gold">→</span>
          </Link>
        </div>
        <Gallery photos={memories} />
      </section>

      <section className="border-t border-gold/15 bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <JoinSection />
        </div>
      </section>
    </>
  );
}
