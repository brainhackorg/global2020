{
  "project_url": "\r\nhttps://github.com/physiopy/phys2denoise",
  "project_description": "\r\nThe aim of this project is to restart the development of [physiopy/phys2denoise](https://github.com/physiopy/phys2denoise), an automated pipeline to create BIDS-formatted physiological regressors for neuroimaging denoising.\r\nIn practice, some folks might like to collect physiological recordings (e.g. pulse, chest expansion, % of gasses breathed out, skin conductance, ...) while performing fMRI (_fun MRI_) experiments (or any other technique for which it's relevant to consider physiological data). Those same folks might want to use the data they collected to implement impressive preprocessing pipelines and clean MRI data from physiological artefacts. If the data get BIDSified, for instance using [physiopy/phys2bids](https://github.com/physiopy/phys2bids), we can set up a pipeline that read such data and prepares all of the regressors that might be used in that same preprocessing pipeline (e.g. RETROICOR, RVT, RV, CRF, ...).\r\nDuring the BHD week, we'll re-draft and code the skeleton of the pipeline, and merge the contributions that have been proposed during the OHBM Hackhathon. We'll also start drafting the documentation of the repository (explaining all those funny acronyms reported above), and write a couple of tests. Later in the week we'll do some user testing too, and if we'll have time, start working on a proposal to make `fMRIprep` ready files - in order to work toward a possible integration.\r\n\r\n**Data to use:**\r\n<!-- If your project uses data, add a short description of the data and a link to its source. -->\r\nLater during the week, we _might_ use some of the data we have in [OSF](https://osf.io/3txqr/). We'll evaluate together which one to use.\r\n\r\n**Link to project repository/sources:**\r\nhttps://github.com/physiopy/phys2denoise\r\nAlso have a look at:\r\nhttps://github.com/physiopy/phys2bids\r\nhttps://github.com/physiopy/peakdet\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\nWe'll have a milestone and a dedicated label to indicate those issues we can tackle during this BHG, but as a summary:\r\n- Design the repo\r\n- Code the skeleton of the pipeline\r\n- Merge open PRs and complete the list of metrics that can be computed\r\n- Write documentation about the pipeline, but also about physiological denoising and techniques (and whatnot)\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\nNo GFI for the moment, however if someone is interested in reading and writing documentation about denoising, it could be a great way to move their first steps in a Git(Hub) based development environment. \r\n<!--1. \r\n2.-->\r\n\r\n**Skills:**\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\nCode contributions:\r\n- python (mandatory)\r\n\r\nDocumentation:\r\n- Reading papers\r\n- Writing skills\r\n- Becoming acquainted with ReStructured Text before starting could be helpful.\r\n\r\n**Communication channels:**\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\nMattermost: [~bhd_physiopy](https://mattermost.brainhack.org/brainhack/channels/physiopy)\r\n\r\n<!-- [ ] Video channel: Please write here the communication channel (Zoom, Jitsi, Twitch, or any other platform) you will be using to work collaboratively however please keep them as commented to avoid any public sharing. Once you set up your project Mattermost communication channel, make sure you write the link of the video channel at the header of the Mattermost channel for your attendees to know --> \r\nWe'll discuss over mattermost where to videochat.\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-size summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Physiopy/phys2denoise: Automated pipeline to create BIDS-formatted physiological regressors for neuroimaging denoising",
  "issue_number": 40,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/40",
  "labels": [
    {
      "name": "bhg:donostia_esp_1",
      "description": "",
      "color": "d4c5f9"
    },
    {
      "name": "git_skills:0_none",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "git_skills:1_commit_push",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "git_skills:2_branches_PRs",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "modality:MEG",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:MRI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:fMRI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:fNIRS",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "programming:Python",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:containerization",
      "description": "Docker, Singularity",
      "color": "5319e7"
    },
    {
      "name": "programming:documentation",
      "description": "Markdown, Sphinx",
      "color": "5319e7"
    },
    {
      "name": "project",
      "description": "",
      "color": "f9bc70"
    },
    {
      "name": "project_development_status:1_basic structure",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "project_tools_skills:comfortable",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_tools_skills:familiar",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_type:coding_methods",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:documentation",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:pipeline_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "status:published",
      "description": "",
      "color": "0e8a16"
    },
    {
      "name": "tools:BIDS",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "topic:physiology",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:reproducible_scientific_methods",
      "description": "",
      "color": "006b75"
    }
  ],
  "content": "<!-- Guidelines\r\n\r\nWe are very excited to meet you at Brainhack Global 2020 \ud83c\udf89. To submit a project, you need to be an attendee to one of the Brainhack Global 2020 events listed on the [Brainhack Global 2020 webpage](https://brainhack.org/global2020/events/). Please, register for the event that is most suitable to your location, time zone, interest, and/or project prior to submitting one. Thank you!\r\n\r\nWe have prepared a checklist to help with your project submission. Here is how to proceed:\r\n\r\nBefore filling in any part please check items in the checklist below as you go through them.\r\nOnce you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section, submit your issue and add a comment saying 'Hi @Brainhack-Global/project-monitors: my project is ready!'\r\nThank you!\r\n\r\nAfter the issue is submitted, we will assign a 'project monitor' from the event location that you are registered with to review your submission. Once the submission is approved by the 'project monitor', they will add the label 'Project is ready' and it will appear on [Brainhack Global 2020 Projects](https://brainhack.org/global2020/projects) page with a separate project dedicated webpage. \r\n\r\nNote that you can always update your issue which will also change your page on the website accordingly.\r\n\r\nIf at any time you need help from us or anything is unclear, please add a comment and ping your project monitor. Our team is here to help! -->\r\n\r\n## Project info\r\n\r\n**Title:**\r\n<!-- Add a title that reflects what the code (or content) will do in a way that makes sense to newcomers who want to contribute to your project. -->\r\nPhysiopy/phys2denoise: Automated pipeline to create BIDS-formatted physiological regressors for neuroimaging denoising\r\n\r\n**Project lead:**\r\n<!-- Add full name (and Twitter and Mattermost handle if possible) of the contact person. -->\r\nStefano Moia @smoia  (`@SteMoia` on twitter)\r\n\r\n**Project collaborators:**\r\n<!-- Add full names (and Twitter handles if possible) of any person contributing to the project. Try to follow the [all-contributors specification](https://github.com/all-contributors/all-contributors). Contributions of any kind are welcome! -->\r\nKatie Bottenhorn @62442katieb\r\nFran\u00e7ois Lespinasse @sangfrois\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\n<!-- Specify the city and country of the Brainhack Global 2020 event that you\r\nregistered for. If your local event has a special name or topic (e.g. Brainhack\r\nLondon - Clinical Neuroanatomy), please do specify that as well to help us\r\ndistinguish between potential events in the same city. -->\r\nBrainhack Donostia\r\n\r\n**Project Description:**\r\nThe aim of this project is to restart the development of [physiopy/phys2denoise](https://github.com/physiopy/phys2denoise), an automated pipeline to create BIDS-formatted physiological regressors for neuroimaging denoising.\r\nIn practice, some folks might like to collect physiological recordings (e.g. pulse, chest expansion, % of gasses breathed out, skin conductance, ...) while performing fMRI (_fun MRI_) experiments (or any other technique for which it's relevant to consider physiological data). Those same folks might want to use the data they collected to implement impressive preprocessing pipelines and clean MRI data from physiological artefacts. If the data get BIDSified, for instance using [physiopy/phys2bids](https://github.com/physiopy/phys2bids), we can set up a pipeline that read such data and prepares all of the regressors that might be used in that same preprocessing pipeline (e.g. RETROICOR, RVT, RV, CRF, ...).\r\nDuring the BHD week, we'll re-draft and code the skeleton of the pipeline, and merge the contributions that have been proposed during the OHBM Hackhathon. We'll also start drafting the documentation of the repository (explaining all those funny acronyms reported above), and write a couple of tests. Later in the week we'll do some user testing too, and if we'll have time, start working on a proposal to make `fMRIprep` ready files - in order to work toward a possible integration.\r\n\r\n**Data to use:**\r\n<!-- If your project uses data, add a short description of the data and a link to its source. -->\r\nLater during the week, we _might_ use some of the data we have in [OSF](https://osf.io/3txqr/). We'll evaluate together which one to use.\r\n\r\n**Link to project repository/sources:**\r\nhttps://github.com/physiopy/phys2denoise\r\nAlso have a look at:\r\nhttps://github.com/physiopy/phys2bids\r\nhttps://github.com/physiopy/peakdet\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\nWe'll have a milestone and a dedicated label to indicate those issues we can tackle during this BHG, but as a summary:\r\n- Design the repo\r\n- Code the skeleton of the pipeline\r\n- Merge open PRs and complete the list of metrics that can be computed\r\n- Write documentation about the pipeline, but also about physiological denoising and techniques (and whatnot)\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\nNo GFI for the moment, however if someone is interested in reading and writing documentation about denoising, it could be a great way to move their first steps in a Git(Hub) based development environment. \r\n<!--1. \r\n2.-->\r\n\r\n**Skills:**\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\nCode contributions:\r\n- python (mandatory)\r\n\r\nDocumentation:\r\n- Reading papers\r\n- Writing skills\r\n- Becoming acquainted with ReStructured Text before starting could be helpful.\r\n\r\n**Communication channels:**\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\nMattermost: [~bhd_physiopy](https://mattermost.brainhack.org/brainhack/channels/physiopy)\r\n\r\n<!-- [ ] Video channel: Please write here the communication channel (Zoom, Jitsi, Twitch, or any other platform) you will be using to work collaboratively however please keep them as commented to avoid any public sharing. Once you set up your project Mattermost communication channel, make sure you write the link of the video channel at the header of the Mattermost channel for your attendees to know --> \r\nWe'll discuss over mattermost where to videochat.\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-size summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}