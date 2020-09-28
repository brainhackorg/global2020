{
  "Title": "TRAMPOLINO: the Swiss Army Knife for tractography",
  "issue_number": 162,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/162",
  "labels": [
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
      "name": "dMRI",
      "description": "some knowledge of diffusion MRI required",
      "color": "996dff"
    },
    {
      "name": "nipype",
      "description": "some knowledge of nipype required",
      "color": "f433db"
    },
    {
      "name": "python",
      "description": "some knowledge of python required",
      "color": "fc8397"
    },
    {
      "name": "tractography",
      "description": "",
      "color": "0e8a16"
    }
  ],
  "content": "**Guidelines**\r\n\r\n*We are very excited to meet you at the 2020 OHBM Brainhack \ud83c\udf89* *To submit a project, you need to be an attendee of the 2020 OHBM Brainhack. We ask you to register first over [here](http://www.humanbrainmapping.org/HackathonReg/). Thank you!*\r\n\r\n*We have prepared a checklist to help with your project submission. Here is how to proceed:*\r\n 1. *Before filling in any part, please submit this issue*\r\n 2. *Check items in the checklist below as you go through them*\r\n 3. *Once you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section add a comment saying 'hi @ohbm/project-monitors: My project is ready!'*\r\n\r\nThank you!\r\n\r\n*After step 1 (issue submitted), we will assign a 'project monitor' to follow your submission. If at any time you need help or anything is unclear, please add a comment and ping your project monitor. Our team is here to help!*\r\n\r\n\r\n----------------------------\r\n## Project info\r\n<!-- *Please fill this in first and then submit the issue* -->\r\n\r\n**Title**: TRAMPOLINO: the Swiss Army Knife for tractography\r\n<!--Name of your awesome project. Please also update the title of the issue to be the title of your project-->\r\n\r\n**Project lead**: Matteo Mancini @matteomancini\r\n<!--Your name and GitHub login, possibly more than 1 lead-->\r\n\r\n**[Timezone](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#timezone)**: London UTC+1\r\n<!--UTC offset of your timezone (cf. https://www.timeanddate.com/time/map/ for example).-->\r\n\r\n**Hub**: Europe, Middle East and Africa\r\n<!--Asia and Pacific / Europe, Middle East and Africa / The Americas based on location of project lead. Possibly more than 1 hub.-->\r\n\r\n**Description**:\r\n<!--Describe the main idea and context of your project in a few sentences.-->\r\nI wrote TRAMPOLINO during BrainHack School with the idea of building a tool to easily do tractography across different packages. My vision now is to make it become the Swiss Army Knife for tractography: a tool able to try out things, even when you do not have the right software installed (!!!). The dream would be typing just \"trampolino --corpus-callosum\" and getting the tractogram for a corpus callosum to play with!\r\n\r\n**Link to project**: https://github.com/matteomancini/trampolino\r\n\r\n**Mattermost handle**: @matman\r\n\r\n**Goals for the OHBM Brainhack**\r\n- truly making TRAMPOLINO feels like a Swiss Army Knife!\r\n- \"just do it\" arguments - to get immediately a tractogram to try stuff (e.g.: just typing \"trampolino -track\" would return a whole brain tractography for a sample subject);\r\n- option to run workflows in containers;\r\n\r\n**Good first issues**:\r\n- write a script to easily retrieve public dataset;\r\n- implement tractography format conversions (e.g. .tck->.trk);\r\n- write Nipype workflows and/or interfaces for Diffusion Toolkit ODFs and Trekker;\r\n\r\n**Skills**:\r\n- Python;\r\n- Interest in tractography;\r\n- Nipype and Click packages (useful skill but not necessary);\r\n- Some experience with any existing tractography package would be a plus;\r\n\r\n**Chat channel**: [hbmhack-trampolino](https://mattermost.brainhack.org/brainhack/channels/hbmhack-trampolino)\r\n\r\n**Video channel**: \r\nPlease have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/hbmhack-trampolino) for the URL of the video channel, or alternatively, please contact to @matman on Mattermost.\r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [x] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n\r\nYou can also include information about (all optional):\r\n-   [ ] Number of participants, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n-   [ ] Set up a kanban board on your repository to better divide the work and keep track of things, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#set-up-a-kanban-board)\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some.\r\n"
}