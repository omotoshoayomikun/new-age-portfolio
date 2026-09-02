import { favouriteTech, profile, projects } from '@/data/portfolio'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            <Link href="/" className="eyebrow flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                {profile.name}
            </Link>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight xl:text-5xl">
                All Projects
            </h1>
            <table className="mt-12 w-full border-collapse text-left font-display">
                <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-surface/50 px-6 py-5 backdrop-blur'>
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map(project => (
                            <tr className="border-b border-slate-300/10 last:border-none">
                                <td className="py-4 pr-4 align-center text-sm">
                                    <div className="translate-y-px">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-center font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 sm:hidden group/link text-base" href="https://www.emersoncollective.com/" target="_blank" rel="noreferrer noopener" aria-label="Emerson Collective (opens in a new tab)">
                                                <span>{project.name}
                                                    {/* <span className="inline-block">Collective */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    {/* </span> */}
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="hidden sm:block">{project.name}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-center text-sm lg:table-cell">
                                    <div className="translate-y-px whitespace-nowrap">{project.madeAt}</div>
                                </td>
                                <td className="hidden py-4 pr-4 align-center lg:table-cell">
                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:border-primary/50"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-center sm:table-cell">
                                    {
                                        project.demo ? (
                                            <Link href={project.demo} className="translate-y-1 flex text-sm text-slate-400">
                                                {project?.demo?.split("//").pop()?.slice(0, 20)}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                            </Link>
                                        ) : (
                                            <Link
                                                className="flex items-center text-sm text-slate-400"
                                                href="https://github.com/bchiang7/google-keep-vue-firebase" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
                                                <span>GitHub</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="ml-1.5 h-3.5 w-3.5 shrink-0" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                                </svg>
                                            </Link>
                                        )
                                    }

                                    {/* <ul className="translate-y-1">
                                        <li className="mb-1 flex items-center">
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-sm text-slate-400 group/link text-sm" href="https://www.emersoncollective.com/" target="_blank" rel="noreferrer noopener" aria-label="emersoncollective.com (opens in a new tab)"><span>
                                                <span className="inline-block">emersoncollective.com<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span>
                                            </a>
                                        </li>
                                    </ul> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default page
