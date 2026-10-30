import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import PresidentCard from "../components/members/PresidentCard";
import MemberGrid from "../components/members/MemberGrid";
import TeacherIncharge from "../components/members/TeacherIncharge";
import {
  culturalSecretaries,
  generalSecretaries,
  headTeams,
  hod,
  principal,
  president,
  teacherIncharge,
  vicePresidents,
} from "../data/members";
export default function Execom() {
  return (
    <>
      <Seo
        title="Meet the team"
        description="The people carrying the Qaafila pariwaar forward. Core team and heads, with portraits."
        path="/execom"
      />
      <PageShell>
        <SectionHeading
          kicker="The people"
          heading="Meet the team"
          subtitle="The people carrying the pariwaar forward."
        />

        <div className="mt-12">
          <TeacherIncharge members={[principal, hod, teacherIncharge]} />
        </div>

        <div className="mt-16">
          <PresidentCard member={president} />
        </div>

        <section className="mt-24">
          <p className="kicker mb-8">Vice Presidents</p>
          <MemberGrid members={vicePresidents} />
        </section>

        <section className="mt-24">
          <p className="kicker mb-8">Cultural Secretaries</p>
          <MemberGrid
            members={culturalSecretaries}
            columns="grid-cols-1 sm:grid-cols-2"
          />
        </section>

        <section className="mt-24">
          <p className="kicker mb-8">General Secretaries</p>
          <MemberGrid
            members={generalSecretaries}
            columns="grid-cols-1 sm:grid-cols-2"
          />
        </section>

        {headTeams.map((team) => (
          <section key={team.title} className="mt-24">
            <p className="kicker mb-8">{team.title}</p>
            <MemberGrid
              members={team.members}
              columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              label={team.title}
            />
          </section>
        ))}
      </PageShell>
    </>
  );
}
