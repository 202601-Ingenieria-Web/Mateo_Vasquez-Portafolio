"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Code2, Languages, MoonStar, SunMedium } from 'lucide-react';

import { Button } from '@/components/atoms/Button';
import { ClickSpark } from '@/components/atoms/ClickSpark';
import { ProgressBar } from '@/components/atoms/ProgressBar';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextType } from '@/components/atoms/TextType';
import { Dialog } from '@/components/organisms/Dialog';
import { EducationCard } from '@/components/molecules/EducationCard';
import { KnowledgeCard } from '@/components/molecules/KnowledgeCard';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { portfolioData } from '@/data/portfolio';
import type { Locale, ProjectData, ThemeMode } from '@/types/portfolio';

function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

function useLocale() {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-locale');
    if (saved === 'es' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  return { locale, setLocale };
}

const sidebarAvatarClassName = 'h-36 w-36 overflow-hidden rounded-md border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800 lg:h-44 lg:w-44';
const heroAvatarShellClassName = 'mx-auto w-full max-w-[28rem] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-700 dark:bg-slate-800/70 sm:p-2.5 lg:max-w-none';
const heroAvatarInnerShellClassName = 'relative aspect-[4/5] w-full overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800';
const heroAvatarImageClassName = 'absolute inset-0 h-full w-full object-cover object-top';

export function PortfolioApp() {
  const { theme, setTheme } = useThemeMode();
  const { locale, setLocale } = useLocale();
  const content = portfolioData.content[locale];
  const shared = portfolioData.shared;
  const projectTrackRef = useRef<HTMLDivElement>(null);
  const profileImageRef = useRef<HTMLImageElement>(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const scrollProjects = (direction: 'left' | 'right') => {
    projectTrackRef.current?.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <ClickSpark />

      <div className="mx-auto flex min-h-screen w-full max-w-[1360px] flex-col gap-4 px-3 py-3 md:px-4 lg:grid lg:grid-cols-[17.5rem_minmax(0,1fr)_4.25rem] lg:items-start lg:gap-4">
        {/* Sidebar: resumen personal, contacto y habilidades. */}
        <aside className="rounded-lg border border-slate-200 bg-[var(--surface)] p-4 shadow-sm dark:border-slate-700 dark:bg-[var(--surface-soft)] lg:sticky lg:top-4 lg:self-start">
          <div className="flex flex-col items-center gap-3 text-center lg:items-center">
            <div className={sidebarAvatarClassName}>
              <img
                ref={profileImageRef}
                src={shared.avatar}
                alt={content.name}
                className="h-full w-full object-contain object-center"
                onError={() => {
                  if (profileImageRef.current && profileImageRef.current.src !== shared.avatarFallback) {
                    profileImageRef.current.src = shared.avatarFallback;
                  }
                }}
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-700 dark:text-accent-300">{content.role}</p>
              <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">{content.name}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">{content.title}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{content.sidebarIntro}</p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{content.contactLabel}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{shared.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{content.countryLabel}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{shared.country}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <Languages className="h-4 w-4 text-accent-600 dark:text-accent-300" />
              {content.languagesLabel}
            </p>
            {shared.languages.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <Code2 className="h-4 w-4 text-accent-600 dark:text-accent-300" />
              {content.programmingLabel}
            </p>
            {shared.programmingLanguages.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{content.extraSkillsLabel}</p>
            <div className="flex flex-wrap gap-2">
              {shared.extraSkills.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <main className="min-w-0 lg:px-1">
          {/* Controles globales para idioma y tema. */}
          <section className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-[var(--surface)] px-3 py-3 dark:border-slate-700 dark:bg-[var(--surface-soft)]">
            <div className="inline-flex overflow-hidden rounded-md border border-slate-300 bg-slate-100 p-1 dark:border-slate-600 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setLocale('es')}
                className={`rounded-sm px-4 py-1.5 text-sm font-semibold transition ${
                  locale === 'es'
                    ? 'bg-accent-400 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`rounded-sm px-4 py-1.5 text-sm font-semibold transition ${
                  locale === 'en'
                    ? 'bg-accent-400 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                EN
              </button>
            </div>

            <div className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-slate-100 p-1 dark:border-slate-600 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-semibold transition ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <SunMedium className="h-4 w-4" />
                {locale === 'es' ? 'Claro' : 'Light'}
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-semibold transition ${
                  theme === 'dark'
                    ? 'bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <MoonStar className="h-4 w-4" />
                {locale === 'es' ? 'Oscuro' : 'Dark'}
              </button>
            </div>
          </section>

          {/* Hero: presentación principal y foto destacada. */}
          <section className="rounded-lg border border-slate-200 bg-[var(--surface)] p-5 dark:border-slate-700 dark:bg-[var(--surface-soft)] sm:p-7 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center xl:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-600 dark:text-accent-300">
                  {locale === 'es' ? 'Perfil profesional' : 'Professional profile'}
                </p>
                <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
                  {locale === 'es' ? 'Soy' : "I'm"} {content.name}
                </h1>
                <p className="font-display text-2xl font-bold text-accent-600 dark:text-accent-300 sm:text-3xl">
                  <TextType words={shared.heroWords} />
                </p>
                <p className="max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">{content.profileSummary}</p>
                <div className="flex flex-wrap gap-3">
                  <Button type="button" onClick={() => setProfileDialogOpen(true)}>
                    {content.contactCta}
                  </Button>
                  <a
                    href={shared.resumePdf}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                  >
                    {locale === 'es' ? 'Descargar CV' : 'Download CV'}
                  </a>
                </div>
              </div>
              <div className={heroAvatarShellClassName}>
                <div className={heroAvatarInnerShellClassName}>
                  <img
                    src={shared.heroAvatar}
                    alt={content.name}
                    className={heroAvatarImageClassName}
                    onError={(event) => {
                      const target = event.currentTarget;
                      if (target.src !== shared.avatarFallback) {
                        target.src = shared.avatarFallback;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Secciones de contenido reutilizando el encabezado compartido. */}
          <section className="mt-8 space-y-5">
            <SectionTitle
              eyebrow={locale === 'es' ? 'Conocimientos' : 'Knowledge'}
              title={content.knowledgeTitle}
              description={locale === 'es' ? 'Áreas donde mejor puedo aportar.' : 'Areas where I can contribute best.'}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {shared.knowledge.map((item) => (
                <KnowledgeCard key={item.title[locale]} item={item} locale={locale} />
              ))}
            </div>
          </section>

          <section className="mt-8 space-y-5">
            <SectionTitle
              eyebrow={locale === 'es' ? 'Educación' : 'Education'}
              title={content.educationTitle}
              description={locale === 'es' ? 'Resumen de mi formación.' : 'A summary of my education.'}
            />
            <div className="rounded-lg border border-slate-200 bg-[var(--surface)] px-5 dark:border-slate-700 dark:bg-[var(--surface-soft)] sm:px-8">
              {shared.education.map((item, index) => (
                <EducationCard key={`${item.institution}-${item.dates}-${index}`} item={item} locale={locale} />
              ))}
            </div>
          </section>

          <section className="mt-8 space-y-5">
            <SectionTitle
              eyebrow={locale === 'es' ? 'Portafolio' : 'Portfolio'}
              title={content.portfolioTitle}
              description={locale === 'es' ? 'Proyectos seleccionados con acceso al detalle y al código.' : 'Selected projects with access to details and code.'}
            />
            <div className="flex items-center justify-end gap-2">
              <Button type="button" variant="ghost" onClick={() => scrollProjects('left')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" onClick={() => scrollProjects('right')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div ref={projectTrackRef} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
              {shared.projects.map((item) => (
                <div key={item.slug} className="min-w-[min(92vw,36rem)] max-w-[36rem] flex-none md:min-w-[32rem]">
                  <ProjectCard item={item} locale={locale} onOpen={setSelectedProject} />
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-8 rounded-lg border border-slate-200 bg-[var(--surface)] p-6 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-[var(--surface-soft)] dark:text-slate-300">
            <p className="mx-auto max-w-3xl leading-7">“{content.footer}” — Sun Tzu</p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              © 2026 Mateo Vásquez García. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
          </footer>
        </main>

        <aside className="rounded-lg border border-slate-200 bg-[var(--surface)] p-3 shadow-sm dark:border-slate-700 dark:bg-[var(--surface-soft)] lg:sticky lg:top-4 lg:self-start lg:flex lg:min-h-[calc(100vh-2rem)] lg:flex-col lg:items-center lg:justify-center lg:gap-3">
          {shared.socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </aside>
      </div>

      <Dialog open={profileDialogOpen} title={content.profileDialog.title} onClose={() => setProfileDialogOpen(false)}>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{content.profileDialog.lead}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
          {content.profileDialog.bullets.map((item) => (
            <li key={item} className="rounded-md border border-slate-300 bg-slate-100 p-4 dark:border-slate-600 dark:bg-slate-800">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={shared.resumePdf}
            download
            className="inline-flex items-center justify-center rounded-md bg-accent-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-accent-300"
          >
            {locale === 'es' ? 'Descargar CV PDF' : 'Download PDF CV'}
          </a>
          <a
            href={`mailto:${shared.email}`}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            {content.contactLabel}
          </a>
        </div>
      </Dialog>

      <Dialog
        open={selectedProject !== null}
        title={selectedProject ? selectedProject.title[locale] : ''}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
          <div className="space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <p>{selectedProject.challenge[locale]}</p>
            <p>{selectedProject.impact[locale]}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-600 dark:text-accent-300">
                {locale === 'es' ? 'Stack' : 'Stack'}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {selectedProject.github ? (
                <a
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
              {selectedProject.demo ? (
                <a
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}
