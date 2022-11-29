{
  "project_url": "\r\nhttps://github.com/physiopy/phys2bids",
  "project_description": "\r\nMy goal is to build protocol-like documentation for phys2bids, a tool for automatic segmentation and conversion of physiological files to BIDS format. The intention is share a blueprint for what the physiopy community expects to be a common use-case of phys2bids.\r\n\r\n***Info on phys2bids:***\r\nThis tool reduces human error during the concurent collection of physiological (ECG/PPG/EDA/RSP/etc.) and neuroimaging data (fMRI, MEG, etc.). The reason being that recordings often contain unwanted segments as experimenters continue to acquire physiological activity in-between scanning sessions. \r\n\r\n***The way it works:***\r\nphys2bids can take the physiological recording files (such as those provided from BIOPAC-Acqknowledge) and automatically cut the appropriate segments by using the trigger pulse sent by the scanner (see [multi-run phys2bids workflow for more info](https://phys2bids.readthedocs.io/en/latest/howto.html#what-if-i-have-multiple-acquisition-types). \r\n\r\n***Why it's interesting***\r\nThis tool allows the user to generate BIDS compatible physiological files organized by runs (just like neuroimaging data). It represents a more convenient way to match neuroimaging acquisition with physiological ones. \r\n\r\n***What we need, now :***\r\nWhat we need now is to provide users with a convenient way to process massive amount of physio data in a time-efficient way. \r\n\r\n\r\n**Data to use:**\r\nAs I have special access to the [Courtois-Neuromod project](https://cneuromod.ca) data, I intend to use the [movie10 experiment](https://docs.cneuromod.ca/en/2020-alpha/DATASETS.html#movie10) to exemplify the usefulness of phys2bids multi-run workflow.\r\n\r\n\r\n**Link to project repository/sources:**\r\nhttps://github.com/physiopy/phys2bids\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\n\r\n***Documentation-specific tasks***\r\n- [ ] Write down some context to describe the interest of using phys2bids for massive amount of phys data\r\n- [ ] Specify the information needed and how to get it in order to execute phys2bids workflow\r\n- [ ] Specify steps to fetch this info proceduraly from a BIDS neuroimaging dataset\r\n\r\n***Code-specific tasks***\r\n- [x] Code utility functions to fetch information from BIDS dataset\r\n- [ ] Build .sh script that uses the information needed to execute phys2bids workflow for a whole subject directory\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n1. Review the order and general organization phys2bids documentation (see also with #39 as Katie is also upkeeping phys2bids documentation)\r\n2. Assess where to add this use-case/phys2bids tutorial \r\n3. Review my unreleased code and think about its eventual integration to phys2bids (see whether it should get a PR)\r\n\r\n**Skills:**\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n- knowledge of physiological recording instruments\r\n- markup languages\r\n- Python\r\n- bash script\r\n\r\n**Communication channels:**\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\n<!-- [Brainhack space on Mattermost](https://mattermost.brainhack.org/bhd-physiopy).-->\r\n\r\nWe'll discuss where to meet on mattermost\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, #data_management, #documentation, #method_development,\r\n#pipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, #1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, #BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, expert, familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, #documentation, Java, Julia, Matlab,\r\n#Python, R, #shell_scripting, Unix_command_line, Web, #workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, #ECG, ECOG, EEG, eye_tracking, #fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n<!-- - [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).-->\r\n<!-- [x] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "physiopy/phys2bids use-case documentation",
  "issue_number": 46,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/46",
  "labels": [
    {
      "name": "project",
      "description": "",
      "color": "f9bc70"
    },
    {
      "name": "status:published",
      "description": "",
      "color": "0e8a16"
    },
    {
      "name": "topic:physiology",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "modality:ECG",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:fMRI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "tools:BIDS",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "programming:Python",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:shell_scripting",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:workflows",
      "description": "nextflow",
      "color": "5319e7"
    },
    {
      "name": "programming:documentation",
      "description": "Markdown, Sphinx",
      "color": "5319e7"
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
      "name": "project_type:coding_methods",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:pipeline_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:documentation",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:data_management",
      "description": "involves programming",
      "color": "c5def5"
    },
    {
      "name": "project_type:method_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_development_status:1_basic structure",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "bhg:donostia_esp_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "## Project info\r\n\r\n**Title:**\r\nPhysiopy/phys2bids: use-case documentation for the segmentation and conversion of massive amount of physiological data.\r\n\r\n**Project lead:**\r\n\r\nFran\u00e7ois Lespinasse (Twitter handle : franclespinas | Brainhack mattermost handle : @sangfrois)\r\n\r\n**Project collaborators:**\r\n\r\nKatie Bottenhorn @62442katieb\r\n\r\nStefano Moia @smoia \r\n\r\n**Registered Brainhack Global 2020 Event:**\r\n\r\nBrainhack Global Donostia (from Montreal, Qu\u00e9bec)\r\n\r\n**Project Description:**\r\nMy goal is to build protocol-like documentation for phys2bids, a tool for automatic segmentation and conversion of physiological files to BIDS format. The intention is share a blueprint for what the physiopy community expects to be a common use-case of phys2bids.\r\n\r\n***Info on phys2bids:***\r\nThis tool reduces human error during the concurent collection of physiological (ECG/PPG/EDA/RSP/etc.) and neuroimaging data (fMRI, MEG, etc.). The reason being that recordings often contain unwanted segments as experimenters continue to acquire physiological activity in-between scanning sessions. \r\n\r\n***The way it works:***\r\nphys2bids can take the physiological recording files (such as those provided from BIOPAC-Acqknowledge) and automatically cut the appropriate segments by using the trigger pulse sent by the scanner (see [multi-run phys2bids workflow for more info](https://phys2bids.readthedocs.io/en/latest/howto.html#what-if-i-have-multiple-acquisition-types). \r\n\r\n***Why it's interesting***\r\nThis tool allows the user to generate BIDS compatible physiological files organized by runs (just like neuroimaging data). It represents a more convenient way to match neuroimaging acquisition with physiological ones. \r\n\r\n***What we need, now :***\r\nWhat we need now is to provide users with a convenient way to process massive amount of physio data in a time-efficient way. \r\n\r\n\r\n**Data to use:**\r\nAs I have special access to the [Courtois-Neuromod project](https://cneuromod.ca) data, I intend to use the [movie10 experiment](https://docs.cneuromod.ca/en/2020-alpha/DATASETS.html#movie10) to exemplify the usefulness of phys2bids multi-run workflow.\r\n\r\n\r\n**Link to project repository/sources:**\r\nhttps://github.com/physiopy/phys2bids\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\n\r\n***Documentation-specific tasks***\r\n- [ ] Write down some context to describe the interest of using phys2bids for massive amount of phys data\r\n- [ ] Specify the information needed and how to get it in order to execute phys2bids workflow\r\n- [ ] Specify steps to fetch this info proceduraly from a BIDS neuroimaging dataset\r\n\r\n***Code-specific tasks***\r\n- [x] Code utility functions to fetch information from BIDS dataset\r\n- [ ] Build .sh script that uses the information needed to execute phys2bids workflow for a whole subject directory\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n1. Review the order and general organization phys2bids documentation (see also with #39 as Katie is also upkeeping phys2bids documentation)\r\n2. Assess where to add this use-case/phys2bids tutorial \r\n3. Review my unreleased code and think about its eventual integration to phys2bids (see whether it should get a PR)\r\n\r\n**Skills:**\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n- knowledge of physiological recording instruments\r\n- markup languages\r\n- Python\r\n- bash script\r\n\r\n**Communication channels:**\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\n<!-- [Brainhack space on Mattermost](https://mattermost.brainhack.org/bhd-physiopy).-->\r\n\r\nWe'll discuss where to meet on mattermost\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, #data_management, #documentation, #method_development,\r\n#pipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, #1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, #BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, expert, familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, #documentation, Java, Julia, Matlab,\r\n#Python, R, #shell_scripting, Unix_command_line, Web, #workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, #ECG, ECOG, EEG, eye_tracking, #fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n<!-- - [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).-->\r\n<!-- [x] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}