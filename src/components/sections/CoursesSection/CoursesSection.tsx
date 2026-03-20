"use client";

import { Space_Grotesk } from "next/font/google";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type CourseDef = {
  href: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  contentKey?: string;
  topicKeys?: readonly string[];
  skillsTitleKey: string;
  skills: readonly string[];
};

const COURSES: CourseDef[] = [
  {
    href: "https://www.udemy.com/course/jetpack-compose-uygulama-gelistirme-rehberi/?referralCode=FDD0C1F4F2BB4C54B325",
    titleKey: "courses.compose.title",
    dateKey: "courses.compose.date",
    descriptionKey: "courses.compose.description",
    contentKey: "courses.compose.content",
    topicKeys: [
      "courses.compose.topic1",
      "courses.compose.topic2",
      "courses.compose.topic3",
      "courses.compose.topic4",
      "courses.compose.topic5",
    ] as const,
    skillsTitleKey: "courses.compose.skills",
    skills: ["Jetpack Compose", "Android Development", "Kotlin", "Advanced Android"] as const,
  },
  {
    href: "https://www.udemy.com/course/mlkit-android-programlama/?referralCode=B671AEDDFD9DE7B8656A",
    titleKey: "courses.mlkit.title",
    dateKey: "courses.mlkit.date",
    descriptionKey: "courses.mlkit.description",
    contentKey: "courses.mlkit.content",
    topicKeys: [
      "courses.mlkit.topic1",
      "courses.mlkit.topic2",
      "courses.mlkit.topic3",
      "courses.mlkit.topic4",
      "courses.mlkit.topic5",
    ] as const,
    skillsTitleKey: "courses.mlkit.skills",
    skills: ["Google ML Kit", "Computer Vision", "Firebase", "Kotlin"] as const,
  },
];

type CoursesSectionProps = {
  isDarkTheme: boolean;
};

type CourseCardProps = {
  course: CourseDef;
  isDarkTheme: boolean;
  card: string;
  innerPanel: string;
  chip: string;
  title: string;
  body: string;
};

function CourseCard({
  course,
  isDarkTheme,
  card,
  innerPanel,
  chip,
  title,
  body,
}: CourseCardProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const description = t(course.descriptionKey);
  const topicKeys = course.topicKeys ?? [];
  const panelId = `course-details-${course.titleKey.replace(/\./g, "-")}`;

  const needsExpand = useMemo(
    () =>
      Boolean(
        description.trim() ||
          topicKeys.length > 0 ||
          (course.skills?.length ?? 0) > 0 ||
          course.dateKey,
      ),
    [description, topicKeys.length, course.skills?.length, course.dateKey],
  );
  const showBody = !needsExpand || expanded;

  const toggleBtn =
    isDarkTheme
      ? "text-emerald-400/95 hover:text-emerald-300"
      : "text-emerald-800 hover:text-emerald-900";

  return (
    <article
      className={`flex flex-col rounded-xl border p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${card}`}
    >
      <h3 className={`text-lg font-semibold leading-snug sm:text-xl ${title}`}>
        <a
          href={course.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:underline ${
            isDarkTheme ? "text-white hover:text-emerald-300" : "text-zinc-900 hover:text-emerald-800"
          }`}
        >
          <span>{t(course.titleKey)}</span>
          <svg
            className="h-3.5 w-3.5 shrink-0 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </h3>

      {showBody ? (
        <div id={panelId} className="mt-4 flex min-w-0 flex-col gap-4">
          <div className="flex items-start gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                isDarkTheme ? "bg-emerald-500/12 text-emerald-400" : "bg-emerald-100 text-emerald-700"
              }`}
              aria-hidden
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
              </svg>
            </span>
            <p
              className={`min-w-0 flex-1 pt-2 text-sm font-medium leading-snug ${
                isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
              }`}
            >
              {t(course.dateKey)}
            </p>
          </div>

          <div className={`rounded-lg border p-4 ${innerPanel}`}>
            <p className={`text-sm leading-relaxed ${body}`}>{description}</p>

            {course.contentKey && topicKeys.length > 0 ? (
              <div
                className={`mt-4 border-t border-dashed pt-4 ${isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"}`}
              >
                <h4
                  className={`text-sm font-semibold ${
                    isDarkTheme ? "text-emerald-400/95" : "text-emerald-800"
                  }`}
                >
                  {t(course.contentKey)}
                </h4>
                <ul className={`mt-3 list-none space-y-2.5 p-0 text-sm leading-snug ${body}`}>
                  {topicKeys.map((key) => (
                    <li key={key} className="flex gap-2">
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                          isDarkTheme ? "bg-emerald-400/70" : "bg-emerald-600"
                        }`}
                        aria-hidden
                      />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className={`mt-4 border-t border-dashed pt-4 ${isDarkTheme ? "border-white/[0.08]" : "border-zinc-200/80"}`}>
              <h4
                className={`text-sm font-semibold ${
                  isDarkTheme ? "text-emerald-400/95" : "text-emerald-800"
                }`}
              >
                {t(course.skillsTitleKey)}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span key={skill} className={`rounded-full px-3 py-1 text-xs font-medium ${chip}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {needsExpand ? (
        <div className="mt-4">
          <button
            type="button"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${toggleBtn}`}
            aria-expanded={expanded}
            aria-controls={expanded ? panelId : undefined}
            onClick={() => setExpanded((v) => !v)}
          >
            <span>{expanded ? t("courses.showLess") : t("courses.showMore")}</span>
            <svg
              className={`h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      ) : null}
    </article>
  );
}

export default function CoursesSection({ isDarkTheme }: CoursesSectionProps) {
  const { t } = useLanguage();

  const shell =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      : "border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

  const card =
    isDarkTheme
      ? "border-white/[0.08] bg-white/[0.02] hover:border-emerald-500/25 hover:bg-white/[0.04]"
      : "border-zinc-200/80 bg-white/70 hover:border-emerald-200/90 hover:bg-white";

  const innerPanel =
    isDarkTheme
      ? "border-white/[0.06] bg-gradient-to-br from-emerald-500/[0.07] via-white/[0.02] to-teal-500/[0.05]"
      : "border-emerald-100/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50";

  const chip =
    isDarkTheme
      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-200/95"
      : "border border-emerald-200/70 bg-emerald-50/90 text-emerald-900";

  const muted = isDarkTheme ? "text-zinc-400" : "text-zinc-600";
  const title = isDarkTheme ? "text-white" : "text-zinc-900";
  const body = isDarkTheme ? "text-zinc-300" : "text-zinc-700";

  return (
    <section
      id="courses"
      className={`relative scroll-mt-28 overflow-hidden rounded-2xl border backdrop-blur-md ${shell}`}
    >
      <div
        className="pointer-events-none absolute -left-12 top-1/4 h-52 w-52 -translate-y-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(110,231,183,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <header className="mb-10 max-w-2xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDarkTheme ? "text-emerald-400/90" : "text-emerald-700"
            }`}
          >
            {t("courses.eyebrow")}
          </p>
          <h2
            className={`${display.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${title}`}
          >
            {t("courses.title")}
          </h2>
          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${muted}`}>
            {t("courses.subtitle")}
          </p>
        </header>

        <ul className="grid list-none gap-8 p-0 lg:grid-cols-2 lg:items-start">
          {COURSES.map((course) => (
            <li key={course.titleKey} className="min-w-0">
              <CourseCard
                course={course}
                isDarkTheme={isDarkTheme}
                card={card}
                innerPanel={innerPanel}
                chip={chip}
                title={title}
                body={body}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
