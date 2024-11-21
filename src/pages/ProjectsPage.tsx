import ProjectsContainer from "../components/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <main className="flex flex-grow flex-col items-center gap-8 bg-[#669BBC] px-6 py-8">
      <h1 className="text-4xl font-bold text-[#FDF0D5]">My Projects</h1>
      <ProjectsContainer renderAll={true} />
    </main>
  );
}
