export type Block =
  | { p: string }
  | { ul: string[] }
  | { code: string[] }

export type Guide = {
  slug: string
  title: string
  description: string
  updated: string
  intro: string
  sections: { heading: string; blocks: Block[] }[]
}

const DOCS_NOTE =
  "Last checked against Anthropic's Claude Code documentation on October 13, 2026. Features change, so confirm details in the current documentation."

export const guides: Guide[] = [
  {
    slug: "what-is-a-claude-code-skill",
    title: "What is a Claude Code skill file?",
    description:
      "A plain-English explanation of Claude Code skills: what a SKILL.md file contains, where it lives, how Claude decides to use it, and how to run one yourself.",
    updated: "October 2026",
    intro:
      "A Claude Code skill is a small folder of instructions that Claude Code can load when a task calls for it. It lets you write down how a job should be done once, then reuse that on every project instead of explaining it again each time.",
    sections: [
      {
        heading: "The short version",
        blocks: [
          {
            p: "A skill is a directory that contains a file named SKILL.md. The file starts with a block of settings between two lines of three dashes, called frontmatter, followed by plain Markdown instructions written for Claude.",
          },
          {
            p: "Claude Code keeps each skill's name and description in view. When what you ask matches a description, Claude loads the full SKILL.md and follows it. Because the full text loads only when it is needed, a long skill costs very little until it is actually used.",
          },
        ],
      },
      {
        heading: "What a SKILL.md looks like",
        blocks: [
          {
            p: "Here is a small example you could adapt. It is our own illustration, not a product file.",
          },
          {
            code: [
              "---",
              "name: post-outline",
              "description: Drafts a blog post outline from a topic and target reader. Use when the user asks for an outline or a content plan for a post.",
              "---",
              "",
              "## Instructions",
              "",
              "1. Ask for the topic and the reader if they were not given.",
              "2. Propose a working title and three alternatives.",
              "3. List five to seven section headings with one sentence each.",
              "4. Flag any claim that will need a source before publishing.",
            ],
          },
          {
            p: "According to Anthropic's documentation, no frontmatter field is strictly required, but the description is recommended because Claude uses it to decide when the skill is relevant. If you leave the name out, it defaults to the folder name.",
          },
        ],
      },
      {
        heading: "Where skills live",
        blocks: [
          {
            ul: [
              "Personal: ~/.claude/skills/<skill-name>/SKILL.md. Available in all of your projects on that machine.",
              "Project: .claude/skills/<skill-name>/SKILL.md. Available in sessions in that repository, and you can commit it so teammates get it too.",
            ],
          },
          {
            p: "The documentation lists other locations as well, such as plugin skills and skills synced from a claude.ai account. These options change over time, so check the current documentation for the full list.",
          },
        ],
      },
      {
        heading: "Running a skill yourself",
        blocks: [
          {
            p: "You can type a slash followed by the skill name, for example /post-outline, at the start of a message. Per the documentation, a skill runs this way only when its name starts the message. Mentioning the name in the middle of a sentence gives Claude permission to run the skill but does not run it directly.",
          },
        ],
      },
      {
        heading: "Adding supporting files",
        blocks: [
          {
            p: "A skill folder can hold more than SKILL.md. Extra files load only when needed, which keeps the main file short.",
          },
          {
            code: [
              "my-skill/",
              "  SKILL.md        (required: overview and instructions)",
              "  reference.md    (detailed notes, loaded when needed)",
              "  examples.md     (usage examples)",
              "  scripts/",
              "    helper.py     (a script the skill can run)",
            ],
          },
          {
            p: "Mention these files inside SKILL.md so Claude knows when to read them. The documentation recommends keeping SKILL.md itself under 500 lines.",
          },
        ],
      },
      {
        heading: "What a skill does not do",
        blocks: [
          {
            p: "A skill is a set of instructions, not a guarantee. Claude can still make mistakes while following it, so review the results before you rely on them or publish them. Only install skills from sources you trust, because a skill can tell Claude to run commands.",
          },
          { p: DOCS_NOTE },
        ],
      },
    ],
  },
  {
    slug: "write-a-good-skill-description",
    title: "How to write a skill description Claude will actually use",
    description:
      "The description is how Claude decides whether to load your skill. Learn what to put in it, how long it can be, and which settings control when a skill runs.",
    updated: "October 2026",
    intro:
      "The description line is the most important part of a skill. A vague one means the skill sits unused. A description that is too broad means it loads when you do not want it. This guide covers what the documentation says and some practical habits for writing a good one.",
    sections: [
      {
        heading: "What the description does",
        blocks: [
          {
            p: "Claude sees the name and description of each available skill. When a request matches a description, Claude loads the full SKILL.md. If you leave the description out, Claude Code uses the first non-empty line of the skill's content instead, which is rarely what you want.",
          },
          {
            p: "The documentation also describes an optional when_to_use field for extra trigger context, such as phrases or example requests. It is added to the description. Together they are cut off at 1,536 characters in the skill listing, so put the most important words first.",
          },
        ],
      },
      {
        heading: "Say what it does and when to use it",
        blocks: [
          {
            p: "A good description has two parts: what the skill produces, and the situations where it applies. Compare these two.",
          },
          {
            ul: [
              "Weak: Helps with blog posts.",
              "Stronger: Drafts a blog post outline from a topic and target reader. Use when the user asks for an outline, a content plan or a post structure.",
            ],
          },
          {
            p: "The weak version does not say what you get back or when to reach for it, so Claude has little to match against.",
          },
        ],
      },
      {
        heading: "Use the words people actually type",
        blocks: [
          {
            p: "Think about how you would ask for this job in a hurry. If you would say \"plan my posts for the week,\" that phrase belongs in the description or in when_to_use. This is our practical advice rather than a rule from the documentation, but it follows from how matching works: the closer the description is to your real requests, the more likely it is to be picked.",
          },
        ],
      },
      {
        heading: "Keep one job per skill",
        blocks: [
          {
            p: "A skill that tries to outline posts, write them, optimize them and publish them is hard to describe in a few sentences, and a long mixed description tends to match too many requests. Splitting it into smaller skills makes each description clearer. Again, this is a working habit rather than a documented requirement.",
          },
        ],
      },
      {
        heading: "Control when a skill runs",
        blocks: [
          {
            p: "The documentation lists several frontmatter settings that change how a skill is used.",
          },
          {
            ul: [
              "disable-model-invocation: true stops Claude from loading the skill automatically. You run it yourself with a slash command.",
              "user-invocable: false hides the skill from the slash menu so only Claude can invoke it.",
              "paths takes glob patterns that limit when Claude loads the skill automatically.",
            ],
          },
          {
            p: "Use the first one for anything with side effects that you only want to run on purpose.",
          },
        ],
      },
      {
        heading: "Test it before you rely on it",
        blocks: [
          {
            ul: [
              "Ask for the job in plain words, without naming the skill, and see whether Claude loads it.",
              "Try a nearby request that should not use the skill and check that it stays out of the way.",
              "If it misfires, change the wording of the description and try again.",
              "Run the skill with its slash command to check the instructions separately from the matching.",
            ],
          },
          { p: DOCS_NOTE },
        ],
      },
    ],
  },
  {
    slug: "skill-arguments-and-supporting-files",
    title: "Skill arguments and supporting files: a practical walkthrough",
    description:
      "How to pass input to a Claude Code skill with $ARGUMENTS, numbered and named arguments, and how to point a skill at its own files.",
    updated: "October 2026",
    intro:
      "A skill becomes much more useful when you can hand it input, such as a topic or a file name, each time you run it. This guide walks through the argument features described in Anthropic's Claude Code documentation.",
    sections: [
      {
        heading: "Why use arguments",
        blocks: [
          {
            p: "Without arguments, a skill does the same thing every run. With them, you can type something like /post-outline indoor plants for beginners and have the skill use that text. The documentation shows the slash command form with arguments after the skill name, for example /fix-issue 123.",
          },
        ],
      },
      {
        heading: "All arguments at once",
        blocks: [
          {
            p: "The placeholder $ARGUMENTS stands for everything typed after the skill name. Put it where the input belongs in your instructions.",
          },
          {
            code: [
              "---",
              "name: post-outline",
              "description: Drafts a blog post outline. Use when the user asks for a post outline.",
              "---",
              "",
              "Write an outline for a blog post about: $ARGUMENTS",
            ],
          },
          {
            p: "If your skill text has no placeholder at all, the documentation says Claude Code appends a line reading ARGUMENTS: followed by what you typed, so the input is not lost.",
          },
        ],
      },
      {
        heading: "Numbered and named arguments",
        blocks: [
          {
            p: "When a skill needs more than one input, you can refer to them by position. The documentation describes $ARGUMENTS[N] and the shorter $N, counting from zero, so $0 is the first argument and $1 is the second.",
          },
          {
            p: "You can also name them. The arguments setting in the frontmatter takes a list of names, and each name can then be used as $name in the text. A separate argument-hint setting shows a hint in autocomplete, such as [topic] [audience], so you remember what to type.",
          },
          {
            p: "The documentation is the place to check how values with spaces are split into arguments, since that detail is easy to get wrong from memory.",
          },
        ],
      },
      {
        heading: "Pointing a skill at its own files",
        blocks: [
          {
            p: "The placeholder ${CLAUDE_SKILL_DIR} stands for the folder that contains the skill's SKILL.md. Using it for paths to bundled files or scripts means the paths still work wherever the skill is installed, whether that is your personal folder or a project.",
          },
          {
            p: "In the documentation's example, a script kept in a scripts folder inside the skill is run through that placeholder. The documentation notes that scripts are executed rather than read into Claude's context, which keeps long code out of the way.",
          },
        ],
      },
      {
        heading: "Bringing in live information",
        blocks: [
          {
            p: "Anthropic's example skill includes a line written as an exclamation mark followed by a command in backticks, !`git diff HEAD`, to bring the current changes into the skill's text. The frontmatter also has an allowed-tools setting that lists tools Claude may use without a permission prompt while the skill runs.",
          },
          {
            p: "Read the permission details in the documentation before using either feature. A skill that can run commands deserves the same care as any script you download, so review it before you trust it.",
          },
          {
            p: "Last checked against Anthropic's Claude Code documentation on October 13, 2026. Features change, so confirm details in the current documentation.",
          },
        ],
      },
    ],
  },
  {
    slug: "llms-txt-explained",
    title: "llms.txt explained: what it is and how to write one",
    description:
      "llms.txt is a proposed Markdown file that gives AI systems a short overview of your website. Learn the format, where the file goes and what it can and cannot do.",
    updated: "October 2026",
    intro:
      "llms.txt is a plain Markdown file you place on your website to give AI systems a short, curated overview of what the site is and where its most useful pages are. This guide explains the format and is honest about what is and is not known.",
    sections: [
      {
        heading: "What it is",
        blocks: [
          {
            p: "The llms.txt idea was proposed by Jeremy Howard of Answer.AI. The proposal describes a Markdown file at the root of a site that gives language-model-based tools a brief overview and links to more detailed pages. It is a proposal, not an official standard from a standards body.",
          },
          {
            p: "According to the proposal, the file is meant mainly to help when an AI tool is answering a question, not for training. It is also described as complementing robots.txt and sitemap.xml rather than replacing them.",
          },
        ],
      },
      {
        heading: "The format",
        blocks: [
          {
            p: "The proposal describes these parts, in order.",
          },
          {
            ul: [
              "A top-level heading with the name of the site or project. This is the only required part.",
              "A short summary in a blockquote with the key context.",
              "Optional paragraphs or lists with more detail, but no further headings.",
              "Optional second-level sections that each hold a list of links, written as [name](url) with an optional colon and a note.",
              "By convention, a section called Optional for secondary links that a tool can skip when it needs less.",
            ],
          },
          {
            p: "Here is a made-up example for a fictional shop.",
          },
          {
            code: [
              "# Example Bakery",
              "",
              "> A neighborhood bakery. This file lists our menu, hours and ordering pages.",
              "",
              "## Pages",
              "",
              "- [Menu](https://example.com/menu): Current items and allergen notes",
              "- [Hours and location](https://example.com/visit): When and where to find us",
              "- [Order ahead](https://example.com/order): How to place a pickup order",
              "",
              "## Optional",
              "",
              "- [Our story](https://example.com/about): Background on the bakery",
            ],
          },
        ],
      },
      {
        heading: "Where the file goes",
        blocks: [
          {
            p: "The proposal puts the file at the root of the site, so it is served at /llms.txt, and also allows it in a subpath where it covers the pages beneath. In a Next.js project, a file placed in the public folder is served from the site root, so public/llms.txt becomes yourdomain.com/llms.txt.",
          },
        ],
      },
      {
        heading: "What to put in it",
        blocks: [
          {
            ul: [
              "A plain, accurate description of what the site is and who it is for.",
              "Links only to pages that exist and that you want people to find.",
              "Details that you will keep up to date. Out-of-date prices or product details in the file are worse than leaving them out, so link to the page that holds the current information instead.",
            ],
          },
        ],
      },
      {
        heading: "What it will and will not do",
        blocks: [
          {
            p: "Nothing guarantees that any particular AI assistant or search engine reads the file, and using it is voluntary on both sides. The proposal notes that many sites and documentation platforms have adopted it, but adoption is not the same as a proven effect on how a site appears in answers. Treat it as inexpensive housekeeping, not a ranking trick.",
          },
        ],
      },
      {
        heading: "How to check yours",
        blocks: [
          {
            ul: [
              "Open yourdomain.com/llms.txt in a browser and confirm it loads as plain text.",
              "Click every link in it to make sure none are broken.",
              "Set a reminder to review it whenever you change your main pages or products.",
            ],
          },
          {
            p: "Last checked against the llms.txt proposal at llmstxt.org on October 13, 2026.",
          },
        ],
      },
    ],
  },
  {
    slug: "review-ai-content-before-publishing",
    title: "A checklist for reviewing AI-written content before you publish",
    description:
      "A practical review checklist for anything an AI tool drafts for you: facts, names, numbers, links, claims, tone and originality.",
    updated: "October 2026",
    intro:
      "AI tools can draft a post in minutes, but they can also state wrong things with complete confidence. If you publish what they write, you are responsible for it. This checklist is a simple routine for catching problems before readers do.",
    sections: [
      {
        heading: "Why a review step matters",
        blocks: [
          {
            p: "An AI draft is a starting point. It can invent names, quote figures that do not exist, describe features a product does not have, or sound certain about things that are uncertain. None of that is visible from the writing style, so the only reliable defense is checking.",
          },
        ],
      },
      {
        heading: "The checklist",
        blocks: [
          {
            ul: [
              "Facts: verify every claim that could be checked. If you cannot confirm it, cut it or soften it.",
              "Numbers: find the original source for every statistic, price, date and percentage. Remove any you cannot source.",
              "Names and quotes: confirm that people, companies and products exist and are described correctly. Never publish a quote you cannot trace.",
              "Links: open every link. Make sure it works and says what the text claims it says.",
              "Promises: look for words like guaranteed, always, never and instantly. Replace them with what you can actually stand behind.",
              "Specifics: if the post describes steps, follow them yourself or have someone else try them.",
              "Originality: make sure the post says something useful that a reader could not get from the first search result. Add your own experience where you have it.",
              "Tone: read it aloud. Cut filler, repeated points and phrases you would never say.",
              "Rules: check the policies of the platform or ad program where the content will appear.",
            ],
          },
        ],
      },
      {
        heading: "Make the review part of the workflow",
        blocks: [
          {
            p: "Do not rely on remembering. Add a status column to your content plan with values such as drafted, reviewed and published, and never move a post to published without passing through reviewed. If you automate publishing, build the review step before the publish step, not after.",
          },
          {
            p: "Keep a short note of what you checked for each post. If a reader reports a mistake later, you will know how it got through and can fix both the post and the process.",
          },
        ],
      },
      {
        heading: "Be open about how you work",
        blocks: [
          {
            p: "Readers do not need a long statement, but they should not be misled about who is behind a page. Say who publishes the site and how to contact them. Where AI tools helped produce a post, consider saying so plainly. Correct errors openly when you find them.",
          },
          {
            p: "None of this makes a post perfect, and none of it is a guarantee of any result. It is a habit that protects your readers and your site.",
          },
        ],
      },
    ],
  },
  {
    slug: "weekday-content-calendar-spreadsheet",
    title: "How to plan a weekday content calendar in a spreadsheet",
    description:
      "A simple spreadsheet layout for planning one post per weekday: the columns to use, how to keep a buffer, and how to keep quality up.",
    updated: "October 2026",
    intro:
      "Publishing on a regular schedule is easier when the plan lives in one place. A spreadsheet is enough. This guide shows a simple layout for planning one post per weekday and a few habits that keep the plan useful.",
    sections: [
      {
        heading: "Start with the reader, not the date",
        blocks: [
          {
            p: "Before you fill in a single row, write down who the site is for and the questions that person asks. Topics that come from real questions are easier to write and more useful to read than topics chosen to fill a slot.",
          },
        ],
      },
      {
        heading: "The columns",
        blocks: [
          {
            p: "One row per post is the simplest structure. These columns cover most needs.",
          },
          {
            ul: [
              "Date: the planned publish date. Use weekdays only if that is your schedule.",
              "Topic: a short phrase for what the post is about.",
              "Reader question: the specific question the post answers.",
              "Working title: a draft headline you can change later.",
              "Angle: what makes this post different from what is already out there.",
              "Sources: the pages or experience you will rely on for facts.",
              "Status: idea, drafted, reviewed, scheduled or published.",
              "Link: the live URL once the post is published.",
              "Notes: anything to remember, such as related posts to link to.",
            ],
          },
        ],
      },
      {
        heading: "Keep a buffer",
        blocks: [
          {
            p: "Plan at least a week ahead of what you have written. A buffer of finished, reviewed posts means a busy day or a sick day does not break the schedule. If the buffer shrinks, slow the schedule down rather than publishing rushed work.",
          },
        ],
      },
      {
        heading: "Mix post types",
        blocks: [
          {
            p: "Five similar posts in a row get repetitive. Alternate between how-to guides, short explainers, comparisons and answers to reader questions. Reuse the same columns for all of them.",
          },
        ],
      },
      {
        heading: "Review before anything goes out",
        blocks: [
          {
            p: "The status column is also your quality gate. A post should not reach scheduled without passing through reviewed. Our companion guide on reviewing AI-written content has a checklist you can use for that step.",
          },
        ],
      },
      {
        heading: "Look back every month",
        blocks: [
          {
            p: "Once a month, scan the sheet. Which posts did readers find useful, which were skipped, and which topics deserve a follow-up? Let that shape the next month's rows. A calendar is a living plan, not a promise to yourself.",
          },
        ],
      },
    ],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
