{
  "Title": "BIDS to NiftyTorch: data preparation for deep learning",
  "issue_number": 85,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/85",
  "labels": [
    {
      "name": "Americas hub",
      "description": "",
      "color": "ffaac8"
    },
    {
      "name": "BIDS",
      "description": "some knowledge of BIDS required",
      "color": "562caa"
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
      "name": "Ready for review",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "deep learning",
      "description": "",
      "color": "d93f0b"
    },
    {
      "name": "python",
      "description": "some knowledge of python required",
      "color": "fc8397"
    },
    {
      "name": "shell scripting",
      "description": "shell scripting",
      "color": "db2385"
    }
  ],
  "content": "<!--\r\n*To submit a project, you need to be an attendee of the 2020 OHBM Brainhack. We ask you to register first over [here](http://www.humanbrainmapping.org/HackathonReg/). Thank you!*\r\n\r\n*We are very excited to meet you at the 2020 OHBM Brainhack \ud83c\udf89*\r\n\r\n*We have prepared a checklist to help with project submission. Here is how to proceed:*\r\n 1. *Fill in the main information about your project below*\r\n 2. *Submit this issue*\r\n 3. *Check items in the submission as you go through them*\r\n 4. *Once you are done, please add a comment to say so and ping your project advisor (e.g. 'hi @ohbm/project-advisors My project is ready for review!')*\r\n 5. *Check items in the reviewing checklist as you go through them*\r\n\r\nThank you!\r\n\r\n*After step 2 (issue submitted), we will assign a 'project advisor' to your submission. If at any time you need help or anything is unclear, please add a comment and ping your project advisor. Our team is here to help!*\r\n-->\r\n\r\n----------------------------\r\n## Project info\r\n\r\n**Title**: \r\n*BIDS to NiftyTorch: data preparation for deep learning*\r\n\r\n**Project lead**: \r\n*Farshid Sepehrband @sepehrband*\r\n\r\n**timezone**: \r\nGMT-7\r\n\r\n**Hub**: \r\n*The Americas*\r\n\r\n**Description**: \r\nWe aim to build an automated pipeline to make a copy of BIDS formatted project for the purpose of deep learning and automatically evaluate the dataset. This includes, creating a randomly selected sets of training, validation and test dataset for deep learning, searching for missing data, evaluating consistency across image input using image size and modality, and maybe adding a module for quality assessment and preprocessing of the input data.\r\n\r\n**Link to project**: \r\nhttps://niftytorch.github.io/doc/\r\n\r\n**Goals for the OHBM Brainhack**:\r\n- Create BIDS to NiftyTorch module \r\n- Add random selection feature for training and validation datasets\r\n- Check input data for missing \r\n- Add data summary extraction module\r\n- Add data quality assessment module \r\n\r\n**Good first issues**:\r\n- writing a module (python or shell) that take BIDS as input and prepare the data set for deep learning\r\n- writing a module that detect missing in the data\r\n\r\n**Skills**:\r\n- Python or Bash scripting for file management \r\n- FSL, NIPY or similar tools are plus \r\n\r\n**Chat channel**: \r\nhttps://mattermost.brainhack.org/brainhack/channels/hbmhack-niftytorch\r\n\r\n**Video channel**: \r\nZoom link to be generated and shared in the mattermost channel \r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [x] Video channel: A link to a video channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n\r\nOptionally, you can also include information about:\r\n-   [ ] Number of participants, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#participant-capacity)\r\n-   [ ] Twitter-size summary of your project pitch, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#twitter-size-summary-of-your-project-pitch)\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about:\r\n-   [ ] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [ ] Provide links to onboarding documents if you have some."
}