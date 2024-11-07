export default function Projects() {
  // TODO: Create a card component to display each project
  // TODO: Decide whether to make a full page for each project or just show the cards and append a link to the deployed project.
  // If a card was to be created, make them unique and stand out instead of just making a grid and show them all at once.
  const projects = [
    {
      name: "Calculator",
      id: "calculator",
      description: "A simple calculator.",
      url: "https://github.com/",
    },
  ];
  return (
    <div>
      <h1>Projects List</h1>
      <div>
        {projects.map((project, index) => {
          return (
            <article key={index}>
              <h3>Project {project.name}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
}
