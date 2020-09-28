{
  "Title": "Bidsme -- bidsifier for multimodal datasets",
  "issue_number": 158,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/158",
  "labels": [
    {
      "name": "BIDS",
      "description": "some knowledge of BIDS required",
      "color": "562caa"
    },
    {
      "name": "EMEA hub",
      "description": "",
      "color": "b8aeef"
    },
    {
      "name": "Email ok",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "Hackathon project",
      "description": "use this tag for submitted projects",
      "color": "fcffbc"
    },
    {
      "name": "MEG",
      "description": "some knowledge/experience of MEG required",
      "color": "1d76db"
    },
    {
      "name": "python",
      "description": "some knowledge of python required",
      "color": "fc8397"
    },
    {
      "name": "unix command line",
      "description": "some knowledge of unix command line required",
      "color": "52e597"
    }
  ],
  "content": "## Project info\r\n<!-- *Please fill this in first and then submit the issue* -->\r\n\r\n**Title**:\r\n<!--Name of your awesome project. Please also update the title of the issue to be the title of your project-->\r\nbidsme\r\n\r\n**Project lead**:\r\n<!--Your name and GitHub login, possibly more than 1 lead-->\r\nNikita Beliy, @nbeliy\r\n\r\n**[Timezone](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#timezone)**:\r\n<!--UTC offset of your timezone (cf. https://www.timeanddate.com/time/map/ for example).-->\r\nUTC+2, Bussels\r\n\r\n**Hub**:\r\n<!--Asia and Pacific / Europe, Middle East and Africa / The Americas based on location of project lead. Possibly more than 1 hub.-->\r\nEurope, Middle East and Africa\r\n\r\n**Description**:\r\n<!--Describe the main idea and context of your project in a few sentences.-->\r\nOne of the great ideas behind BIDS is unification of various modalities in the same dataset, sharing common metadata and providing a self-sufficient dataset ready to analyse.  However various bidsificators  target only one or two modalities. \r\n\r\nBidsme project has been developed to provide a bidsificator as universal as possible, both in modalities and data formats. The project is based on two main ideas: \r\n\r\n- everything that is laboratory-depending (log files, events, demographic info, psychological assessments, format conversions) must be treated via plugins\r\n- Data treated in object-oriented way: master class do the bidsifications, modality sub-class defines the BIDS-related parameters (entities, JSON fields etc...), data-format sub-sub-class implements how to read metadata\r\n\r\nUsing this approach it is possible to integrate a new modality from scratch in one week, and fully create plugins for a given dataset in few days.\r\n\r\n**Link to project**:\r\n[https://github.com/CyclotronResearchCentre/bidsme](https://github.com/CyclotronResearchCentre/bidsme)\r\n\r\n**Mattermost handle**:\r\nnbeliy\r\n\r\n**Goals for the OHBM Brainhack**\r\nThe minimum program is to get some long-term collaborators, for now it is one man project, but it becomes too big to be handled alone.\r\n\r\nProgram maximum is to implement few new modalities, namely MEG, probably create a neat GUI. \r\n\r\n**Good first issues**:\r\n\r\n- Incorporate MEG and most popular corresponding data formats\r\n- Rework how sidecar JSON file are created and filled\r\n- Improve plugin framework\r\n- Incorporate bidsified dataset versioning\r\n- Incorporate checks for dataset completeness\r\n\r\n**Skills**:\r\n\r\n| Language                   | Level |\r\n| ----------------------------- | ----------|\r\n| Python3                      | confirmed |\r\n| Unix command line    | beginner |\r\n\r\nAdvanced Python3 skills, with understanding of object-oriented programming, including virtual functions\r\n\r\nIf working on modality, knowledge of such modality, corresponding BIDS section and knowledge of data format\r\n\r\n**Chat channel**:\r\n[Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/bidsme-brainhack)\r\n\r\n**Video channel**:\r\nPlease have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/bidsme-brainhack) for the URL of the video channel, or alternatively, please contact to @nbeliy.\r\n\r\n<!--Some [jitsi meet](https://meet.jit.si/) room when it will be set-up.!-->\r\n\r\n**Slides for project pitch**\r\n[bidsme.pdf](https://github.com/ohbm/hackathon2020/files/4778935/bidsme.pdf)\r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [x] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n\r\nYou can also include information about (all optional):\r\n-   [ ] Number of participants, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n-   [ ] Set up a kanban board on your repository to better divide the work and keep track of things, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#set-up-a-kanban-board)\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some.\r\n"
}