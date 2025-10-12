import {
  personalInfo,
  experience,
  education,
  skillsData,
  specializations,
  projects,
  getSortedCertifications,
} from "../data/constants";

const Resume = () => {
  const sortedCertifications = getSortedCertifications();

  return (
    <div
      id="resume-content"
      className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="resume-container bg-white text-black p-12 max-w-[8.5in] mx-auto font-sans">
        {/* Header */}
        <header className="text-center mb-6 pb-4 border-b-2 border-gray-800">
          <h1 className="text-4xl font-bold mb-2">
            {personalInfo.name.toUpperCase()}
          </h1>
          <h2 className="text-xl text-gray-700 mb-3">{personalInfo.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>📧 {personalInfo.email}</span>
            <span>📍 {personalInfo.location}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm mt-2">
            <a href={personalInfo.linkedin} className="text-blue-600">
              LinkedIn: {personalInfo.linkedin.split("/").pop()}
            </a>
            <a href={personalInfo.github} className="text-blue-600">
              GitHub: {personalInfo.github.split("/").pop()}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">
            {personalInfo.title} with 3+ years of experience building secure,
            scalable enterprise web applications. Expert in React.js frontend
            development with strong Django backend capabilities. Proven track
            record in implementing authentication systems, RBAC, and
            microservices architecture. Recognized as Top Performer 2024 for
            exceptional contributions. Currently leading development teams on
            critical enterprise projects.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            TECHNICAL SKILLS
          </h3>
          <div className="space-y-2 text-sm">
            {skillsData.map((category, index) => (
              <div key={index}>
                <strong className="text-gray-800">
                  {category.title} ({category.level}):
                </strong>
                <span className="text-gray-700">
                  {" "}
                  {category.skills.map((skill) => skill.name).join(", ")}
                </span>
              </div>
            ))}
            <div>
              <strong className="text-gray-800">Specializations:</strong>
              <span className="text-gray-700">
                {" "}
                {specializations.join(", ")}
              </span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            PROFESSIONAL EXPERIENCE
          </h3>

          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="font-bold text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-600">
                    {job.company} | {job.location}
                  </p>
                </div>
                <span className="text-sm text-gray-600">{job.period}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Key Projects */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            KEY PROJECTS
          </h3>

          <div className="space-y-3 text-sm">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-800">{project.title}</h4>
                <p className="text-gray-600 text-xs mb-1">
                  {project.tech.join(", ")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>{project.description}</li>
                  <li>{project.impact}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            EDUCATION
          </h3>
          <div className="space-y-2 text-sm">
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600">
                  {edu.institution} | {edu.period} | {edu.field}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
            CERTIFICATIONS
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
            {sortedCertifications.map((cert) => (
              <li key={cert.id}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {cert.name} - {cert.status} ({cert.year})
                  </a>
                ) : (
                  <span>
                    {cert.name} - {cert.status}
                    {cert.year && ` (${cert.year})`}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
