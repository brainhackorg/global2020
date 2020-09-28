{
  "Title": "Evaluating the pipeline stability though the libmath fuzzy environment",
  "issue_number": 201,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/201",
  "labels": [
    {
      "name": "Americas hub",
      "description": "",
      "color": "ffaac8"
    },
    {
      "name": "C / C++",
      "description": "some knowledge of C / C++ required",
      "color": "e0502c"
    },
    {
      "name": "Email ok",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "FSL",
      "description": "some knowledge of FSL required",
      "color": "bfa0e8"
    },
    {
      "name": "Hackathon project",
      "description": "use this tag for submitted projects",
      "color": "fcffbc"
    },
    {
      "name": "numerical stability",
      "description": "studying result deviation derived from precision limiations/singularities",
      "color": "ed7e3d"
    },
    {
      "name": "python",
      "description": "some knowledge of python required",
      "color": "fc8397"
    }
  ],
  "content": "## Project info\r\nEvaluating the pipeline stability though the libmath fuzzy environment\r\n\r\n**Title**:\r\nEvaluating the pipeline stability though the libmath fuzzy environment\r\n\r\n**Project lead**:\r\nAli Salari: @ali4006\r\nGreg Kiar: @gkiar \r\nValerie Hayot: @ValHayot\r\nYohan Chatelain: @yohanchatelain\r\n\r\n**[Timezone](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#timezone)**:\r\nUTC-4\r\n\r\n**Hub**:\r\nThe Americas\r\n\r\n**Description**:\r\nData analysis pipelines are known to be impacted by the operating system updates, presumably due to the creation, propagation, and amplification of numerical noises. These are uncontrolled noises that are originated in updates of low-level libraries by third-party developers. \r\nIn practice, these numerical instabilities are caused by truncation and round-off errors due to \r\nthe precision limitation of the floating-point arithmetic.\r\nThe finite precision of the floating-point numbers leads to represent an approximation of \r\na real number that may be different on the computers with various precision formats.\r\n\r\nA possible method to investigate operating system related effects more comprehensively \r\nis to introduce controlled numerical perturbations in the math library functions (libmath), which could be done by introducing noise in floating-point computations through Monte-Carlo Arithmetic (MCA) using the Verificarlo tool. \r\n\r\nFor the hackathon we'll be looking to test the validity of the instrumented libmath library functions and also evaluate the stability of the existing neuroimaging pipelines.\r\n\r\n**Link to project**:\r\nhttps://github.com/gkiar/fuzzy\r\n\r\n**Mattermost handle**:\r\n@ali.salari, @gkiar, @valeriehayot, @yohan.chatelain\r\n\r\n**Goals for the OHBM Brainhack**\r\nValidating the instrumented math functions and evaluating the stability of the FSL tool\r\n\r\n**Good first issues**:\r\n1. Preparing tests to validate the instrumented libmath library functions\r\n2. Finding neuroimaging pipelines to evaluate\r\n\r\n**Skills**:\r\nAny of the following skills would be useful for the project.\r\n- Python and c++ programming languages \r\n- Familiar with FSL tool\r\n- Familiar with Monte Carlo Arithmetic (MCA) technique and Verificarlo tool\r\n\r\n**Chat channel**:\r\n- hbmhack-fuzzy\r\nhttps://mattermost.brainhack.org/brainhack/channels/hbmhack-fuzzy\r\n\r\n\r\n**Video channel**:\r\n\r\nPlease have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/hbmhack-fuzzy) (pinned posts) for the URL of the video channel, or alternatively, please contact to @ali.salari, @gkiar, @valeriehayot, @yohan.chatelain\r\non Mattermost.\r\n\r\n\r\n**Image for the OHBM brainhack website**\r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [ ] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n\r\nYou can also include information about (all optional):\r\n-   [ ] Number of participants, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [ ] Set up a kanban board on your repository to better divide the work and keep track of things, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#set-up-a-kanban-board)\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some.\r\n"
}