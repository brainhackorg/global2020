{
  "Title": "Sharing datasets and pipelines in the Canadian Open Neuroscience Platform",
  "issue_number": 194,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/194",
  "labels": [
    {
      "name": "Americas hub",
      "description": "",
      "color": "ffaac8"
    },
    {
      "name": "DataLad",
      "description": "data data datalad!",
      "color": "bfd4f2"
    },
    {
      "name": "Hackathon project",
      "description": "use this tag for submitted projects",
      "color": "fcffbc"
    },
    {
      "name": "Missing reg",
      "description": "",
      "color": "fbca04"
    },
    {
      "name": "Workflow",
      "description": "Working on defining/designing workflows",
      "color": "4333a0"
    },
    {
      "name": "data sharing",
      "description": "resources to share brain data",
      "color": "80a8ce"
    },
    {
      "name": "data_management",
      "description": "",
      "color": "f9d0c4"
    },
    {
      "name": "docker / singularity",
      "description": "some knowledge of docker / singularity required",
      "color": "03966c"
    }
  ],
  "content": "## Project info\r\n\r\nSharing datasets and tools in the Canadian Open Neuroscience Platform\r\n\r\n**Title**:\r\n\r\nSharing datasets and pipelines in the Canadian Open Neuroscience Platform\r\n\r\n**Project leads**:\r\nTristan Glatard: @glatard \r\nSamir Das: @samirdas\r\nJean-Baptiste Poline: @jbpoline \r\n\r\n**[Timezone](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#timezone)**:\r\nUTC-4\r\n\r\n**Hub**: The Americas\r\n\r\n**Description**:\r\n\r\nThe Canadian Open Neuroscience Platform ([CONP](http://conp.ca)) is a web portal and DataLad repository to share open and restricted-access datasets and tools in the neuroimaging community. Datasets are uniformly described using the Data Tags Suite ([DATS](https://academic.oup.com/gigascience/article/9/2/giz165/5730051)), available for download through [DataLad ](http://www.datalad.org), regularly monitored using [CircleCI](http://circleci.com), and searchable through the CONP web portal. The data itself remains under the control of its owners, as it can be stored in various backends including [LORIS](http://loris.ca), [Zenodo](https://zenodo.org/), the [Open Science Framework](http://osf.io), or any other backend supported by DataLad (http, ftp, etc). Tools are shared on Zenodo through the [Boutiques](http://boutiques.github.io) framework.\r\n\r\nThe goal of this project is to port additional tools and pipelines to the CONP. Please join us if you would like to share your dataset, your pipeline, or just learn about the technologies!\r\n\r\n**Link to project**: https://portal.conp.ca/\r\n\r\n**Mattermost handle**: @tristan, @cowboy.samir, @jb\r\n\r\n**Goals for the OHBM Brainhack**\r\n\r\nAdd 3 datasets and 3 tools to the CONP (1 of each per day!).\r\n\r\n**Good first issues**: \r\n\r\nhttps://github.com/CONP-PCNO/conp-dataset/issues/336\r\n\r\nhttps://github.com/CONP-PCNO/conp-portal/issues/316\r\n\r\n**Skills**:\r\n\r\nThe following skills would be very useful to the project. If you just want to acquire them, you're very welcome to join too!\r\n\r\n* Interest in data or pipeline sharing\r\n* Knowledge of popular datasets or tools\r\n* Experience with data acquisition or processing \r\n* Interest or experience with DATS metadata specifications\r\n* Familiarity with [DataLad](http://www.datalad.org)\r\n* Containerization with [Docker](http://www.docker.com) or [Singularity](https://sylabs.io/docs/)\r\n* Interest in representation of metadata for description of a dataset in [DATS](https://github.com/biocaddie/DATS) see also this [article](https://www.nature.com/articles/sdata201759).\r\n\r\n**Chat channel**: hbmhack-conp\r\n\r\n[hbmhack-conp](https://mattermost.brainhack.org/brainhack/channels/conp)\r\n\r\n\r\n**Video channel**: Please have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/hbmhack-conp) (pinned posts) for the URL of the video channel, or alternatively, please contact to @tristan, @cowboy.samir, @jb on Mattermost.\r\n\r\n<!--\r\n**Video channel**:\r\n\r\nWe are trying to be super careful about \"zoom bombing\" possibility.\r\nSo we want to avoid having links to video chats in \"public space\".\r\nWe suggest that you create a Jitsi or Zoom room and mention it in your text channel as \"pinned\" message or in the channel header.\r\n\r\n-->\r\n\r\n**Image for the OHBM brainhack website**\r\n\r\nhttps://portal.conp.ca/static/img/conp.png\r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [x] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n\r\nYou can also include information about (all optional):\r\n-   [ ] Number of participants, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [ ] Set up a kanban board on your repository to better divide the work and keep track of things, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#set-up-a-kanban-board)\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some.\r\n"
}