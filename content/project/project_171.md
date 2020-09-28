{
  "Title": "Python library to handle confounds/covariates",
  "issue_number": 171,
  "link_to_issue": "https://github.com/ohbm/hackathon2020/issues/171",
  "labels": [
    {
      "name": "Americas hub",
      "description": "",
      "color": "ffaac8"
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
      "name": "documentation",
      "description": "Improvements or additions to documentation",
      "color": "0075ca"
    },
    {
      "name": "python",
      "description": "some knowledge of python required",
      "color": "fc8397"
    }
  ],
  "content": "**Title**:\r\nConfounds\r\n\r\n**Project lead**:\r\nPradeep Reddy Raamana, @raamana \r\n\r\n**[Timezone]\r\nUTC-4\r\n\r\n**Hub**:\r\nThe Americas\r\n\r\n**Description**:\r\nDevelop a python library of methods to handle confounds in various neuroscientific analyses, esp. statistics and predictive modeling. More info and slides here:  https://crossinvalidation.com/2020/03/04/conquering-confounds-and-covariates-in-machine-learning/\r\n\r\n**Link to project**:\r\nhttps://github.com/raamana/confounds\r\n\r\n**Mattermost handle**:\r\n@raamana\r\n\r\n**Goals for the OHBM Brainhack**\r\n\r\nTo beef up and add various methods and statistics needed for typical analyses involving confounds:\r\n\r\n- Add tutorial notebooks, with few example use-cases\r\n- Implement ComBat\r\n- Implement metrics, other statistics, related utilities: visualization helpers etc\r\n\r\n**All contributors will be authors in the paper to be published, describing this library and effort.**\r\n\r\n**Good first issues**:\r\n\r\n- Implement metrics to quantify confound to target relationships\r\n- Add tutorial notebooks, with few example use-cases\r\n- Implement metrics to quantify the level of confounding in a given a sample\r\n- Add tests for `Residualize()` with non-linear models\r\n- Add tests for `DummyDeconfounding()` method\r\n\r\n\r\n**Skills**:\r\n\r\n- python programming (intermediate)\r\n- some statistics\r\n- documentation ability\r\n\r\n**Chat channel**:\r\n[~hbmhack-confounds](https://mattermost.brainhack.org/brainhack/channels/confounds)\r\n\r\n**Video channel**:\r\n\r\nPlease have a look at the [Mattermost channel](https://mattermost.brainhack.org/brainhack/channels/confounds) (pinned posts) for the URL of the video channel, or alternatively, please contact to @raamana \r\n\r\n## Project submission\r\n\r\n## Submission checklist\r\n*Once the issue is submitted, please check items in this list as you add under 'Additional project info'*\r\n\r\nPlease include the following above (all required):\r\n-   [x] Link to your project: could be a code repository, a shared document, etc. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#link-to-project)\r\n-   [x] Include your [Mattermost handle](https://mattermost.brainhack.org/) (i.e. your username). If you do not have an account, please [sign up here](https://mattermost.brainhack.org/signup_email).\r\n-   [x] Goals for the OHBM Brainhack: describe what you want to achieve during this brainhack. See [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#goals).\r\n-   [x] Flesh out at least 2 \"good first issues\": those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document, cf [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-2-good-first-issues).\r\n-   [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#onboarding-skills).\r\n-   [x] Chat channel: A link to a chat channel that will be used during the OHBM Brainhack. This can be an existing channel or a new one. We recommend using the [Brainhack space on mattermost](https://mattermost.brainhack.org/), cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#chat).\r\n-   [x] Video channel: Please create a video channel that will be used during the OHBM Brainhack and share it in your chat channel above. This can be an existing channel or a new one. For instance a [jitsi meet](https://meet.jit.si/) room, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#video-calls).\r\n\r\nYou can also include information about (all optional):\r\n-   [x] Number of participants\r\n\r\n1-3 for ComBat\r\n2-3 for the simple/first-time issues mentioned\r\nMore are welcome if they are already knowledgeable in this area and sufficiently independent\r\n\r\n-   [x] Twitter-size summary of your project pitch\r\nPython library to handle #confounds/covariates in #machinelearning and #neuroscience, contribute to a great #openscience cause! \r\ngithub.com/raamana/confounds\r\nPradeep Reddy Raamana @raamana_\r\n#OHBMHackathon #Brainhack #OHBM2020\r\n\r\n-   [x] Provide an image of your project for the OHBM brainhack website\r\n\r\n![](https://github.com/raamana/confounds/raw/master/confounds_card.jpg)\r\n\r\n![](https://github.com/raamana/confounds/raw/master/docs/schematic_method_impl_status.png)\r\n\r\n\r\n-   [x] kanban board\r\n\r\nhttps://github.com/raamana/confounds/projects/1\r\n\r\n-   [x] Project snippet for the OHBM Brainhack website, cf. [here](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#project-snippet-for-the-ohbm-brainhack-website)\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. We recommend reading references from [this section](https://github.com/ohbm/hackathon2020/blob/master/.github/ISSUE_TEMPLATE/handbooks/projects.md#credit-and-onboarding). If you'd like to share your thoughts with future project participants, you can include information about (recommended):\r\n-   [x] Specify how will you acknowledge contributions (e.g. listing members on a contributing page).\r\n-   [x] Provide links to onboarding documents if you have some.\r\n"
}