{
  "project_description": "\r\nThe goal of this project is to quantify in practical terms the differences between different microstructural models focusing on one of the most common targets: the intra-cellular volume fraction. As detailed in [Novikov et al. NMR in Biomed 2018](https://onlinelibrary.wiley.com/doi/epdf/10.1002/nbm.3998?saml_referrer), the numerous approaches (with related articles) proposed are \"theme variations\" on a common model, the sticks model, to the point that someone has started talking about a \"standard model\" of white matter microstructure. So what happens when we compare these different variations at the ROI or voxel level? How large are the mismatches? And how negligible they become when moving from high-quality data (e.g. acquired with ultra-high-gradients) to clinical-grade data?\r\nAs a starting point, I proposed to implement using containers several of the common workflows and start looking at simple comparisons (e.g. using scatterplot and correlation). The use of containers will guarantee high reproducibility and will easily allow to process multiple datasets, even locally or on cloud systems. Given the high number of approaches proposed so far, a potential direction could be to open a \"call for workflows\", for a larger comparison.\r\n\r\n**Data to use:**\r\n- MICRA dataset;\r\n- datasets from OpenNeuro/Datalad;\r\n\r\n**Link to project repository/sources:**\r\nI will open a repo on my Github account.\r\n\r\n**Goals for Brainhack Global 2020:**\r\n- a collection of reproducible microstructural workflow;\r\n- preliminary results for inter-workflow comparisons;\r\n- a plan of action to follow up the hackathon;\r\n\r\n**Good first issues:**\r\n\r\n1. identify good datasets to use;\r\n2. implement a NODDI workflow (using AMICO) in a container;\r\n3. implement a CHARMED workflow (using MDT) in a container;\r\n4. implement an SMT workflow in a container;\r\n5. formulate an efficient way to compare (potentially) many approaches;\r\n\r\n**Skills:**\r\nDesirable:\r\n- Experience with any tool for microstructural MRI (e.g. [MDT](https://github.com/robbert-harms/MDT));\r\n- Experience with Docker;\r\n\r\n**Tools/Software/Methods to Use:**\r\nSome methods to start with:\r\n- NODDI;\r\n- CHARMED;\r\n- SMT;\r\n- WMTI;\r\n- Ball and Sticks;\r\nSome potential tools to use:\r\n- AMICO;\r\n- MDT;\r\n- DIPY;\r\n- FSL;\r\n\r\n**Communication channels:**\r\nI'll open the channel #microstructural-variations in Mattermost\r\nA Zoom meeting will be set up and the link will be privately shared with interested participants.\r\n\r\n**Project labels**\r\n- Type of project:\r\ncoding_methods, data_management, documentation, method_development,\r\n#pipeline_development, tutorial_recording, #visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\n#diffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, #MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, #reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, #Datalad, #DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\n#FSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, #containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, #shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, #DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, 2_branches_PRs, 3_continuous_integration\r\n\r\n\r\n- [*] I added all of the labels I want to associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Microstructural variations on a theme: a bottom-up approach to diffusion models",
  "issue_number": 117,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/117",
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
      "name": "topic:diffusion",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:MR_methodologies",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:reproducible_scientific_methods",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "modality:DWI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "tools:FSL",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:DIPY",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Datalad",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "programming:Python",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:Unix_command_line",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:shell_scripting",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:containerization",
      "description": "Docker, Singularity",
      "color": "5319e7"
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
      "name": "project_type:pipeline_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_development_status:0_concept_no_content",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "bhg:micro2macro_gbr_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "## Project info\r\n\r\n![microvariations](https://user-images.githubusercontent.com/29856041/105831888-2fc89980-5fbf-11eb-8e23-2e78084ae69c.png)\r\n\r\n**Title:**\r\nMicrostructural variations on a theme: a bottom-up approach to diffusion models\r\n\r\n**Project lead:**\r\nMatteo Mancini (Twitter: @ingmatman; Mattermost: matman)\r\n\r\n**Project collaborators:**\r\nMarco Palombo (who already gave a lot of suggestions!)\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nBrainhack Micro2Macro - https://brainhack-micro2macro.github.io\r\n\r\n**Project Description:**\r\nThe goal of this project is to quantify in practical terms the differences between different microstructural models focusing on one of the most common targets: the intra-cellular volume fraction. As detailed in [Novikov et al. NMR in Biomed 2018](https://onlinelibrary.wiley.com/doi/epdf/10.1002/nbm.3998?saml_referrer), the numerous approaches (with related articles) proposed are \"theme variations\" on a common model, the sticks model, to the point that someone has started talking about a \"standard model\" of white matter microstructure. So what happens when we compare these different variations at the ROI or voxel level? How large are the mismatches? And how negligible they become when moving from high-quality data (e.g. acquired with ultra-high-gradients) to clinical-grade data?\r\nAs a starting point, I proposed to implement using containers several of the common workflows and start looking at simple comparisons (e.g. using scatterplot and correlation). The use of containers will guarantee high reproducibility and will easily allow to process multiple datasets, even locally or on cloud systems. Given the high number of approaches proposed so far, a potential direction could be to open a \"call for workflows\", for a larger comparison.\r\n\r\n**Data to use:**\r\n- MICRA dataset;\r\n- datasets from OpenNeuro/Datalad;\r\n\r\n**Link to project repository/sources:**\r\nI will open a repo on my Github account.\r\n\r\n**Goals for Brainhack Global 2020:**\r\n- a collection of reproducible microstructural workflow;\r\n- preliminary results for inter-workflow comparisons;\r\n- a plan of action to follow up the hackathon;\r\n\r\n**Good first issues:**\r\n\r\n1. identify good datasets to use;\r\n2. implement a NODDI workflow (using AMICO) in a container;\r\n3. implement a CHARMED workflow (using MDT) in a container;\r\n4. implement an SMT workflow in a container;\r\n5. formulate an efficient way to compare (potentially) many approaches;\r\n\r\n**Skills:**\r\nDesirable:\r\n- Experience with any tool for microstructural MRI (e.g. [MDT](https://github.com/robbert-harms/MDT));\r\n- Experience with Docker;\r\n\r\n**Tools/Software/Methods to Use:**\r\nSome methods to start with:\r\n- NODDI;\r\n- CHARMED;\r\n- SMT;\r\n- WMTI;\r\n- Ball and Sticks;\r\nSome potential tools to use:\r\n- AMICO;\r\n- MDT;\r\n- DIPY;\r\n- FSL;\r\n\r\n**Communication channels:**\r\nI'll open the channel #microstructural-variations in Mattermost\r\nA Zoom meeting will be set up and the link will be privately shared with interested participants.\r\n\r\n**Project labels**\r\n- Type of project:\r\ncoding_methods, data_management, documentation, method_development,\r\n#pipeline_development, tutorial_recording, #visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\n#diffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, #MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, #reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, #Datalad, #DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\n#FSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, #containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, #shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, #DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, 2_branches_PRs, 3_continuous_integration\r\n\r\n\r\n- [*] I added all of the labels I want to associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}