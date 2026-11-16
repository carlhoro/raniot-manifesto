import { ENTERPRISE_AI_SECTION } from "@/core/lib/constants/constants";

export function EnterpriseAISection() {
  const content = ENTERPRISE_AI_SECTION;

  return (
    <section id="enterprise-ai" aria-labelledby="enterprise-ai-title" className="bg-slate-50 px-6 py-16 dark:bg-slate-950 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
          {content.eyebrow}
        </p>
        <h2 id="enterprise-ai-title" className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {content.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{content.experienceTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{content.experience}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{content.architectureTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{content.architecture}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{content.governanceTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{content.governance}</p>
          </article>
        </div>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-slate-800 dark:text-slate-200">
          {content.value}
        </p>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {content.status}
        </p>
      </div>
    </section>
  );
}
