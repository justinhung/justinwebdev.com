export default function Portfolio() {
  const projects = [
    {
      title: "Silk Hospitality",
      subtitle: "Specialist outsourced housekeeping provder",
      description:
        "Upgraded their internal legacy Ruby on Rails application up through multiple major versions. Also implemented a complete redesign of the frontend application along with new features.",
      stack: "Ruby on Rails, Bootstrap, HAML, jQuery",
    },
    {
      title: "Local Business Awards",
      subtitle: "Australia's most comprehensive business awards program",
      description:
        "Complete rewrite, rebuild, and redesign of legacy application using modern technologies. Large focus on UI/UX and responsiveness as it's public facing, as well as security due to role based authentication.",
      stack: "Vue, Node, Adonis, GraphQL, PostgreSQL",
      url: "https://thebusinessawards.com.au/",
    },
  ];
  return (
    <div className="h-screen p-5">
      <h1>Portfolio</h1>

      <h2>Projects:</h2>

      {projects.map((project) => (
        <div>
          <h3>{project.title}</h3>
          <div className="italics">{project.subtitle}</div>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  );
}
