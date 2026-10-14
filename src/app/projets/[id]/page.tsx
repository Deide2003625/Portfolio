import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-10 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#projets"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          <span aria-hidden="true">←</span>
          Retour aux projets
        </Link>

        <h1 className="mb-8 text-4xl font-black tracking-[-0.05em] text-gray-900 sm:text-5xl lg:text-7xl">
          {project.name}
        </h1>

        {project.live && (
          <div className="mb-8">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
              <span aria-hidden="true">🔗</span>
              {project.live}
            </a>
          </div>
        )}

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.18)] sm:p-6">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[20px] bg-white/10 sm:min-h-[520px]">
              <Image
                src={project.image || '/images/form.png'}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <aside className="flex h-full flex-col rounded-[24px] border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 text-3xl font-black text-gray-900">Description</h2>

            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
              {project.technologies.join(' • ')}
            </div>

            <div className="max-h-[420px] flex-1 overflow-y-auto pr-2 text-base leading-8 text-gray-700">
              <p className="whitespace-pre-line">{project.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
