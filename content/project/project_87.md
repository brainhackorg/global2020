{
  "project_description": " This project involves analysis eye-tracking EEG data that was recorded during the Attention Network Task, a paradigm used to assess different components of attention. Each of the primary attention systems\u2014alerting, orienting, and executive control monitoring\u2014involves salient autonomic correlates as evidenced by changes in reactive pupil dilation and blinks. The goal of the project will be to understand how physiological correlates of attention vary in healthy individuals and in patients with traumatic brain injury (TBI). \r\n\r\n<!-- Add a brief description of the project. Try to include all the relevant information to answer the following questions:\r\nWhat are you doing, for who, and why;\r\nWhat makes your project special and exciting;\r\nA short example;\r\nHow to get started;\r\nWhere to find key resources; -->\r\n\r\n**Data to use:**\r\nThe data consists of EEG outputs in the form of .edf files which include pupil dilation and eye-blinks, as well as accompanying behavioural data (Attention Network Task) including measures like reaction time. The data was collected by Dr. Sudhin Shah at Weill Cornell Medicine.\r\n\r\n**Link to project repository/sources:**\r\n<!-- Add a link to the project\u2019s GitHub repo or website. -->\r\nhttps://github.com/emilyolafson/eyetrack-ANT\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\nAssess all ANT trial eye-tracking data to identity outliers/poor quality trials, look for differences in eye-tracking metrics across age and diagnosis, relate eye-tracking metrics to behaviour (i.e. reaction time).\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n1. Extract reaction time and accuracy measures from ANT (Attention Network Task) outputs for each subject and for each session.\r\n2. Import .edf EEG data files to MATLAB and perform a quality check for each session (i.e. bad quality = eye gaze leaves the field)\r\n\r\n**Skills:** Python or MATLAB skills at any level, statistics, familiarity with EEG \r\n\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, MATLAB\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/eyetracking-project\r\nhttps://meet.jit.si/EyeTrackingProject\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\ncoding_methods, #data_management, documentation, method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, #EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, #hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\n#statistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, #Matlab,\r\n#Python, R, shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, DWI, ECG, ECOG, EEG, #eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [x] Twitter-sized summary of your project pitch: \"In this project, pupil dilation and eye-blinks recorded during an attention task will be related to behaviour in a sample of healthy individuals and patients with traumatic brain injury.\"\r\n\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n![eyetrack](https://user-images.githubusercontent.com/39418731/101557241-97347680-398a-11eb-8036-a314448d27c5.png)\r\n\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Relating EEG eye-tracking data to attention network subsystems",
  "issue_number": 87,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/87",
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
      "name": "topic:EEG_EventRelatedResponseModelling",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:hypothesis_testing",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:physiology",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:statistical_modelling",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "modality:behavioral",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:EEG",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:eye_tracking",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "tools:Jupyter",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "programming:Python",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:Matlab",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:Unix_command_line",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "project_tools_skills:none",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_tools_skills:familiar",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_tools_skills:comfortable",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_tools_skills:expert",
      "description": "",
      "color": "c2e0c6"
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
      "name": "project_type:data_management",
      "description": "involves programming",
      "color": "c5def5"
    },
    {
      "name": "project_development_status:0_concept_no_content",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "bhg:nyc_usa_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "## Project info\r\n\r\n**Title:** Relating eye-tracking EEG metrics to attention network systems\r\n<!-- Add a title that reflects what the code (or content) will do in a way that makes sense to newcomers who want to contribute to your project. -->\r\n\r\n**Project lead:** Emily Olafson, mattermost: @emilyo email: olafsonemily@gmail.com \r\n<!-- Add full name (and Twitter  and Mattermost handle if possible) of the contact person. -->\r\n\r\n**Project collaborators:** Sudhin Shah\r\n<!-- Add full names (and Twitter handles if possible) of any person contributing to the project. Try to follow the [all-contributors specification](https://github.com/all-contributors/all-contributors). Contributions of any kind are welcome! -->\r\n\r\n**Registered Brainhack Global 2020 Event:** Brainhack NY, USA\r\n\r\n**Project Description:** This project involves analysis eye-tracking EEG data that was recorded during the Attention Network Task, a paradigm used to assess different components of attention. Each of the primary attention systems\u2014alerting, orienting, and executive control monitoring\u2014involves salient autonomic correlates as evidenced by changes in reactive pupil dilation and blinks. The goal of the project will be to understand how physiological correlates of attention vary in healthy individuals and in patients with traumatic brain injury (TBI). \r\n\r\n<!-- Add a brief description of the project. Try to include all the relevant information to answer the following questions:\r\nWhat are you doing, for who, and why;\r\nWhat makes your project special and exciting;\r\nA short example;\r\nHow to get started;\r\nWhere to find key resources; -->\r\n\r\n**Data to use:**\r\nThe data consists of EEG outputs in the form of .edf files which include pupil dilation and eye-blinks, as well as accompanying behavioural data (Attention Network Task) including measures like reaction time. The data was collected by Dr. Sudhin Shah at Weill Cornell Medicine.\r\n\r\n**Link to project repository/sources:**\r\n<!-- Add a link to the project\u2019s GitHub repo or website. -->\r\nhttps://github.com/emilyolafson/eyetrack-ANT\r\n\r\n**Goals for Brainhack Global 2020:**\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\nAssess all ANT trial eye-tracking data to identity outliers/poor quality trials, look for differences in eye-tracking metrics across age and diagnosis, relate eye-tracking metrics to behaviour (i.e. reaction time).\r\n\r\n**Good first issues:**\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n1. Extract reaction time and accuracy measures from ANT (Attention Network Task) outputs for each subject and for each session.\r\n2. Import .edf EEG data files to MATLAB and perform a quality check for each session (i.e. bad quality = eye gaze leaves the field)\r\n\r\n**Skills:** Python or MATLAB skills at any level, statistics, familiarity with EEG \r\n\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, MATLAB\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/eyetracking-project\r\nhttps://meet.jit.si/EyeTrackingProject\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\ncoding_methods, #data_management, documentation, method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, #EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, #hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\n#statistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, #Matlab,\r\n#Python, R, shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, DWI, ECG, ECOG, EEG, #eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [x] Twitter-sized summary of your project pitch: \"In this project, pupil dilation and eye-blinks recorded during an attention task will be related to behaviour in a sample of healthy individuals and patients with traumatic brain injury.\"\r\n\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n![eyetrack](https://user-images.githubusercontent.com/39418731/101557241-97347680-398a-11eb-8036-a314448d27c5.png)\r\n\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}