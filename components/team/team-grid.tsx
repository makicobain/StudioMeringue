"use client";

import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Emmanuelle Guérin",
    role: "Fondatrice & UI/UX Designer",
    bio: "Créative et curieuse, Emmanuelle s'est d'abord formée en graphisme, notamment en identités visuelles et en design interfaces. Aujourd'hui, elle suit un Master en UX/UI Design en parallèle d'un contrat en alternance et de son activité indépendante au sein du Studio Meringué.",
    photo: "/profile.jpg",
    initials: "EG",
    linkedin: "https://www.linkedin.com/in/emmanuelle-guerin/",
    portfolio: "https://emmanuelleguerin.com",
  },
  {
    id: 2,
    name: "Antoine Brun",
    role: "Graphiste",
    bio: "Spécialisé en mise en page, typographie et identités visuelles, Antoine cherche desormais à donner un nouveau souffle frais à sa carrière avec une formation en UX/UI Design qu'il débutera dès Septembre. Il est donc à la recherche d'une entreprise qui pourra l'accueillir dans son apprentissage !",
    photo: "/antopp.png",
    initials: "AB",
    linkedin: "https://www.linkedin.com/in/antoine-brun-lovera/",
    portfolio: "",
  },
];

function MemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="member-card"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="photo-wrapper">
        <div className={`gradient-ring ${hovered ? "ring-active" : ""}`} />
        <div className="photo-container">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="photo" />
          ) : (
            <div className="avatar-placeholder">
              <span className="initials">{member.initials}</span>
            </div>
          )}
          <div className={`photo-overlay ${hovered ? "overlay-visible" : ""}`}>
            <div className="social-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              )}
              {member.portfolio && (
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Portfolio">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-content">
        <p className="member-role gradient-text">{member.role}</p>
        <h3 className="member-name">{member.name}</h3>
        <p className="member-bio">{member.bio}</p>
      </div>

      <style jsx>{`
        .member-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 2.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 24px;
          cursor: default;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.3s ease,
                      border-color 0.3s ease;
          animation: fadeUp 0.6s ease both;
        }
        .member-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(168, 85, 247, 0.3);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .photo-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
        }
        .gradient-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--gradient-1),
            var(--gradient-2),
            var(--gradient-3),
            var(--gradient-4),
            var(--gradient-5),
            var(--gradient-1)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .ring-active { opacity: 1; }
        .photo-container {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          overflow: hidden;
        }
        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
        }
        .initials {
          font-size: 2rem;
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.05em;
        }
        .photo-overlay {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .overlay-visible { opacity: 1; }
        .social-links { display: flex; gap: 0.75rem; }
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(168, 85, 247, 0.5);
          transform: scale(1.1);
        }
        .card-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .member-role {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0;
        }
        .member-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.02em;
          margin: 0;
          font-family: var(--font-grifter);
        }
        .member-bio {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          line-height: 1.7;
          margin: 0.5rem 0 0;
          max-width: 280px;
        }
      `}</style>
    </div>
  );
}

export function TeamGrid() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}