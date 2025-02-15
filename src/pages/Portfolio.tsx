export default function Portfolio() {
  const projects = [
    {
      title: "Silk Hospitality",
      subtitle: "Specialist outsourced housekeeping provder",
      description:
        "Upgraded their internal legacy Ruby on Rails application up through multiple major versions. Also implemented a complete redesign of the frontend application along with new features.",
      stack: "Ruby on Rails, Bootstrap, HAML, jQuery, PostgreSQL",
    },
    {
      title: "Local Business Awards",
      subtitle: "Australia's most comprehensive business awards program",
      description:
        "Complete rewrite, rebuild, and redesign of legacy application using modern technologies. Large focus on UI/UX and responsiveness as it's public facing, as well as security due to role based authentication.",
      stack: "Vue, Adonis, Node, Typescript, GraphQL, PostgreSQL, Docker",
      url: "https://thebusinessawards.com.au/",
    },
    {
      title: "Natch",
      subtitle: "Google Natural Language Processing SEO Software",
      description:
        "Built and deployed a SaaS tool to help businesses and individuals improve their SEO through the use of NLP and AI. Integrated Google's Natural Language API to analyse text. Used AI to rewrite copy, and used cron jobs and a crawler to monitor any changes to a page. Used Stripe to handle subscription payments, and Sendgrid for emails.",
      stack:
        "Vue, Adonis, Node, Typescript, GraphQL, PostgreSQL, Docker, GitHub Actions, DigitalOcean, Stripe, Slack, SendGrid, OpenAI",
      url: "https://natch.ai/",
    },
    {
      title: "The Brain",
      subtitle: "Centralised tool for client and team management",
      description:
        "Built, deployed, and maintained a web application to manage the company's clients and team members, as well as track performance over multiple platforms (e.g. Google Ads, Facebook Ads, Pinterest, etc), time tracking, slack alerts, among other features.",
      stack:
        "Vue, Adonis, Node, Typescript, PostgreSQL, Docker, GitHub Actions, DigitalOcean, GCP, Facebook Ads, Slack, ClickUp, SendGrid",
      url: "https://brain.localdigital.com.au/home",
    },
  ];
  return (
    <div className="h-screen p-5 text-left">
      <h1>Portfolio</h1>

      <h2 className="text-4xl mt-3 mb-7">Projects:</h2>

      {projects.map((project, i) => (
        <div key={i} className="lg:grid grid-cols-2 mb-15">
          <div>
            <img src="https://picsum.photos/600/400" className="mb-5" />
          </div>
          <div className="lg:pl-5">
            <div className="bold text-2xl mb-2">{project.title}</div>
            <div className="italic mb-2">{project.subtitle}</div>
            <div className="">{project.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
