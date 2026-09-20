import React from "react";
import { Users, Building, BookOpen, Monitor } from "lucide-react";

const IconMap = {
  Building: Building,
  Monitor: Monitor,
  Users: Users,
  BookOpen: BookOpen,
};

const LeadershipCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 bg-card-hover/40 border border-border/40 rounded-xl p-6 hover:border-accent/30 hover:bg-card-hover transition-colors w-44">
      <div className="relative mb-2">
        <div className="absolute inset-0 bg-accent/20 blur-md rounded-full"></div>
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full border border-border/60 object-cover relative z-10"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-base font-bold text-text">
          {member.name}
        </h4>
        <p className="text-xs font-mono text-text-muted mt-1.5">{member.role}</p>
      </div>
    </div>
  );
};

const LeadershipSection = ({ section, className = "", gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }) => {
  const Icon = IconMap[section.icon] || Users;
  return (
    <div
      className={`glass-card rounded-2xl p-6 border border-border/60 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 blur-2xl"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-lg text-accent">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text uppercase tracking-wide">
            {section.title}
          </h3>
          <p className="text-xs text-text-muted mt-1">{section.subtitle}</p>
        </div>
      </div>

      <div className={`flex flex-wrap justify-center gap-4`}>
        {section.members.map((member) => (
          <LeadershipCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

const Leadership = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Row 1: University + Computer Applications side by side */}
      <div className="flex flex-col lg:flex-row gap-6">
        <LeadershipSection
          section={data.universityLeadership}
          className="lg:w-1/2"
          gridClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        />
        <LeadershipSection
          section={data.computerApplications}
          className="lg:w-1/2"
          gridClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        />
      </div>

      {/* Row 2: Club Leadership full width */}
      <LeadershipSection
        section={data.clubLeadership}
        gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      />

      {/* Row 3: Faculty / Mentors full width */}
      <LeadershipSection
        section={data.facultyMentors}
        gridClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      />
    </div>
  );
};

export default Leadership;
