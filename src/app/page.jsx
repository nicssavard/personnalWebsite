import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoWFLK from '@/images/logos/wflk.png'
import logoIndia from '@/images/logos/india.jpg'
import logoCGQ from '@/images/logos/CGQ.jpg'
import logoUQAC from '@/images/logos/UQAC.png'
import WFLKGame from '@/images/photos/WFLKGame.jpg'
import BabySleep from '@/images/photos/BabySleep.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'

function HammerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M18 2l1 5h-3l2-4zM9 6v3h3V6zM11 12H8v2h3v-2zM9 16h2v3H9zM15 22h-1v-3h-2v3h-1l1 2zM13 20h-1v-3h-2v3h-1l1 2zM7 22H6v-2H3v-1h3v-2h1zM3 16h3v-1H4v-3H3zM7 11V9H4V8h3V6h1zM20 8h-3v1h2v3h1zM22 12h-3v2h-1v3h1v2h-2v1h3zM16 15v-3h-3v1h2v2zM18 16h2v-2h-2zM11 15v2h-2v-2h2zM13 18v-2h-2v2h2zM16 18h-1v-3h-2v3h-1l1 2zM14 20h-1v-3h-2v3h-1l1 2z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const projects = [
  {
    title: 'Nicolas Classroom',
    description: `I made this website to help my English students review their new vocabulary words.`,
    imageSrc: WFLKGame,
    technologies: [
      'NextJS',
      'TypeScript',
      'TailwindCSS',
      'tRPC',
      'Supabase',
      'React',
    ],
    github: 'https://github.com/nicssavard/nicolasClassroom',
    url: 'https://nicolasclassroom.com',
  },
  {
    title: 'BabySleep',
    description: `I made this website to track my daugthers' sleep patterns. `,
    imageSrc: BabySleep,
    technologies: [
      'NextJS',
      'TypeScript',
      'TailwindCSS',
      'tRPC',
      'PlanetScale',
      'React',
      'AWS S3',
    ],
    github: 'https://github.com/nicssavard/babylog',
    url: 'https://babylog-gamma.vercel.app/',
  },
]

const skills = [
  'NextJS',
  'TypeScript',
  'TailwindCSS',
  'tRPC',
  'Supabase',
  'React',
  'AWS S3',
  'MongoDB',
  'NodeJS',
  'Express',
  'HTML',
  'CSS',
  'Git',
  'Python',
  'SQL',
]

function Projects({ projects }) {
  return projects.map((project, index) => {
    return (
      <div
        key={index}
        className=" flex flex-col rounded-2xl  border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <div className="mt-2 flex flex-row justify-center text-3xl  text-zinc-900 dark:text-zinc-200">
          {project.title}
        </div>
        <div className="mt-3">
          <Image
            src={project.imageSrc}
            className="rounded-lg opacity-75"
            alt={`Screenshot of ${project.title}`}
          ></Image>
        </div>

        <div className="mt-4 flex flex-row justify-center text-lg text-zinc-600 dark:text-zinc-400">
          {project.description}
        </div>
        <div className="mt-5 flex flex-row justify-center">
          <Button href={project.url} target="_blank" className="mx-3 text-xl">
            Website
          </Button>
          <Button
            href={project.github}
            target="_blank"
            className="mx-3 text-xl"
          >
            GitHub
          </Button>
        </div>
        <div className="mt-3 flex flex-row flex-wrap justify-center">
          {project.technologies.map((technology, index) => {
            return (
              <Button
                key={index}
                variant="secondary"
                className="mx-1 mt-2 cursor-default bg-teal-500 text-xs text-white hover:bg-teal-400"
              >
                {technology}
              </Button>
            )
          })}
        </div>
      </div>
    )
  })
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Skills() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <HammerIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <div className="mt-4">
        {skills.map((skill, index) => {
          return (
            <Button
              key={index}
              variant="secondary"
              className="mx-1 mt-2 cursor-default bg-teal-500 text-xs text-white hover:bg-teal-400"
            >
              {skill}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'WFLK',
      title: 'English Teacher',
      logo: logoWFLK,
      start: '2021',
      end: '2023',
    },
    {
      company: 'India',
      title: 'Traveller',
      logo: logoIndia,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Centre de Géomatique du Québec',
      title: 'Web Developer Intern',
      logo: logoCGQ,
      start: '2018',
      end: '2018',
    },
    {
      company: 'Université du Québec à Chicoutimi',
      title: 'Computer science',
      logo: logoUQAC,
      start: '2016',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-2xl"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link href="/Nicolas-Savard-resume-Francais.pdf " target="_blank">
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </Link>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  //let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            I&#39;m Nicolas Savard, a web developer with a strong passion for
            innovation, based in Canada. With a background in teaching and a
            degree in Computer Science, I&#39;ve used my programming skills help
            me in my professional and personal life.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/nicssavard"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/nicolas-savard-dev"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-start">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                My Projects
              </h1>
            </div>

            <Projects projects={projects} />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Skills />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
