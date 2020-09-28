{
  "Title": "BIDS Connectivity data schema",
  "issue_number": 203,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/203",
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
      "name": "Workflow",
      "description": "Working on defining/designing workflows",
      "color": "4333a0"
    },
    {
      "name": "connectome",
      "description": "connectome computation and analysis",
      "color": "305c99"
    },
    {
      "name": "data_management",
      "description": "",
      "color": "f9d0c4"
    },
    {
      "name": "documentation",
      "description": "Improvements or additions to documentation",
      "color": "0075ca"
    }
  ],
  "content": "**Guidelines**\r\n\r\n*We are very excited to meet you at the 2020 OHBM Brainhack \ud83c\udf89* *To submit a project, you need to be an attendee of the 2020 OHBM Brainhack. We ask you to register first over [here](http://www.humanbrainmapping.org/HackathonReg/). Thank you!*\r\n\r\n*We have prepared a checklist to help with your project submission. Here is how to proceed:*\r\n 1. *Before filling in any part, please submit this issue*\r\n 2. *Check items in the checklist below as you go through them*\r\n 3. *Once you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section add a comment saying 'hi @ohbm/project-monitors: My project is ready!'*\r\n\r\nThank you!\r\n\r\n*After step 1 (issue submitted), we will assign a 'project monitor' to follow your submission. If at any time you need help or anything is unclear, please add a comment and ping your project monitor. Our team is here to help!*\r\n\r\n\r\n----------------------------\r\n## Project info\r\n<!-- *Please fill this in first and then submit the issue* -->\r\n\r\n**Title**: Developing a modality-independent BIDS Connectivity data schema\r\n<!--Name of your awesome project. Please also update the title of the issue to be the title of your project-->\r\n\r\n**Project lead**: Eugene Duff (eduff), \r\n<!--Your name and GitHub login, possibly more than 1 lead-->\r\n\r\n**[Timezone](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#timezone)**:  London UTC+1\r\n<!--UTC offset of your timezone (cf. https://www.timeanddate.com/time/map/ for example).-->\r\n\r\n**Hub**: Europe   , possibly Americas\r\n<!--Asia and Pacific / Europe, Middle East and Africa / The Americas based on location of project lead. Possibly more than 1 hub.-->\r\n\r\n**Description**:\r\nThe Generic BIDS connectivity data schema is a BIDS proposal submitted to explore the development of standards for representing connectivity data BIDS derivative schemas across modalities.  This would enable easier integration of multimodal data in tools, and ease the expansion of BIDS to cover more modalities.  Now derivative schemas across more modalities are becoming more mature, and simpler elements of data representation have been addressed, now is a good time to review the status of connectivity data representation and determine what a \"meta\" schema might be able to provide in this context.\r\n<!--Describe the main idea and context of your project in a few sentences.-->\r\n\r\n**Link to project**:\r\nhttps://docs.google.com/document/d/1ugBdUF6dhElXdj3u9vw0iWjE6f_Bibsro3ah7sRV0GA/edit#heading=h.4xwnp2872y57\r\n\r\n**Mattermost handle**:\r\n@eduff123\r\n\r\n**Goals for the OHBM Brainhack**\r\n\r\n- Complete a thorough review of how connectivity is being implemented in other BIDS Derivatives to determine how common principles might be integrated or linked to a generic schema\r\n- To review and refine existing proposal for a BIDS Generic Connectivity Schema\r\n- To discuss whether there is a role for \"meta\" schemas in BIDS\r\n- To update the Schema implementation, web pages, and build an active team \r\n\r\n**Good first issues**:\r\n\r\n- Review schema document (possibly considering a specific modality as use case)\r\n- Begin document reviewing existing and potential BIDS connectivity schema\r\n\r\n**Skills**:\r\n(none required)\r\n- experience with working with connectivity data\r\n- an interest in machine readable data schemas \r\n- an interest in visualisation of connectivity data\r\n\r\n**Chat channel**:\r\nhttps://mattermost.brainhack.org/brainhack/channels/hbm-bids-connectivity\r\n\r\n\r\n**Video channel**:\r\n\r\nPlease have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/hbm-bids-connectivity) (pinned posts) for the URL of the video channel, or alternatively, please contact to @eduff123 on Mattermost.\r\n\r\n\r\n\r\n**Image for the OHBM brainhack website**\r\n\r\n![image](https://user-images.githubusercontent.com/902484/84585947-c4093600-ae0c-11ea-8011-e6210e8ddd78.png)Z\r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [X] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [X] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [X] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [X] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [X] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [X] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [ x ] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n-   [X] Provide an image of your project for the OHBM brainhack website\r\n\r\nYou can also include information about (all optional):\r\n-   [x] Number of participants, cf. [6](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [ ] Set up a kanban board on your repository to better divide the work and keep track of things, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#set-up-a-kanban-board)\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some.\r\n"
}