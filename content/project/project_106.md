{
  "project_url": " Code resources will be shared here https://github.com/vilsaira/brainhack2021. Notably, the dataset is too large for GitHub.",
  "project_description": "\r\n\r\n**1 Aim:** Modify existing brain structure modeling algorithms and estimators to adjust for outliers in the measurements to enable their usage in clinical neuroresearch. The aim is to publish the results as a journal article.\r\n\r\n**2 Reason:** Clinical data is often corrupted by outliers and artifacts from various sources (e.g. subject motion shown if **Fig.1**).\r\n![image](https://user-images.githubusercontent.com/28725251/105063033-8db72780-5a7b-11eb-802b-f84c1e3a5e06.png)\r\n**Fig. 1** _Visualization of the differences between the cutting-edge research data of the Human Connectome Project and clinical patient data of a neonatal subject. A) A sagittal slice of a DW-MRI data from an HCP subject and B) an axial slice from the same HCP subject are only slightly affected by noise thus being easy to process with any modeling algorithm. C) A sagittal slice of a DW-MRI data from a clinical neonatal subject with the red arrow pointing to two adjacent axial slices in D) showing a good quality slice and E) showing missing data error due to subject motion. This clinical example is a very common case of suboptimal image quality in neonatal imaging projects or other projects with uncooperative patients and subjects. Therefore, processing steps developed using data primarily from sources with excellent quality could result in highly inaccurate connectome models when applied to clinical data._\r\n\r\n**3 How:** A highly realistic ground-truth simulation of diffusion-weighted image (DWI) set of the human brain structures is shared with the participants. Simulation is based on the Human Connectome Project data and is generated using MRTrix3 and COMMIT framework. A Python script is provided to introduce the outliers and realistic noise distribution to the ground-truth dataset for algorithm evaluation purposes. The simulated dataset will be sent directly to the participants as the HCP data (which this quite directly is) should not be hosted outside their original repository.\r\n\r\nParticipants can either propose their own algorithms to be evaluated with this data or completely new estimation algorithms can be proposed. Finally, the best algorithms will be compared with real human data acquired from neonatal subjects that contain typical motion artefacts. This data cannot be shared with the participants due to the sensitive nature of data. The acquisition consists of multiple reference b0 images and two shells on (60 DWIs with b-value of 750 and 74 with b-value of 1800).\r\n\r\n**Data to use:**  A highly realistic synthetic diffusion-weighted MRI dataset is shared with the participants here:  [GoogleDrive](https://drive.google.com/drive/folders/1jfCtpOKieFBSQeQwnymmZkVd3Y7fA1vO?usp=sharing)\r\n\r\n**Link to project repository/sources:** Code resources will be shared here https://github.com/vilsaira/brainhack2021. Notably, the dataset is too large for GitHub.\r\n\r\n\r\n**Goals for Brainhack Global 2020:** Evaluation of multiple robust microstructural models or DWI signal representations with the provided data. Results would be published in a peer-review journal and as a conference abstract (if suitable).\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\n\r\n**Good first issues:**\r\n 1. Selecting which model estimators will be used in this project (tensors, csd, noddi, etc.).\r\n 2. Implementing the robust augmentations in each estimator.\r\n 3. Comparing both the original and the robust estimator with the synthetic dataset.\r\n 4. Optional comparison with the clinical neonatal data.\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n**Skills:** \r\nOS: Any\r\nProbably necessary: Python or Matlab, understanding of NIFTI or other neuroimage formats\r\nLikely useful: shell scripting, MRTrix3, COMMIT\r\nDefinitely appreciated: consistent writing skills both in code and manuscript\r\n\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n**Tools/Software/Methods to Use:** Visual Studio Code, Python, Matlab, MRTrix3, COMMIT\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/brainhack-micro2macro-2020\r\n\r\n\r\nZoom\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\n\r\n\r\n<!-- [ ] Video channel: Please write here the communication channel (Zoom, Jitsi, Twitch, or any other platform) you will be using to work collaboratively however please keep them as commented to avoid any public sharing. Once you set up your project Mattermost communication channel, make sure you write the link of the video channel at the header of the Mattermost channel for your attendees to know --> \r\n\r\n**Project labels**\r\n#bhg:micro2macro_gbr_1\r\n\r\n- Type of project:\r\n#coding_methods, #method_development\r\n\r\n- Project development status:\r\n#1_basic structure, #2_releases_existing\r\n\r\n- Topic of the projet:\r\n#diffusion, #MR_methodologies, #reproducible_scientific_methods, #statistical_modelling, #tractography\r\n\r\n- Tools used in the project:\r\n#DIPY, #Freesurfer, #MRtrix, #Nipype, #SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\n#Matlab, #Python, #R, #shell_scripting, #Unix_command_line\r\n\r\n- Modalities involved in the project (if any):\r\n#DWI, #MRI\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, #2_branches_PRs\r\n\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\ncoding_methods, data_management, documentation, method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, expert, familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\nPython, R, shell_scripting, Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, 1_commit_push, 2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "What to do with sh***y (clinical) data? How to apply your perfect estimator/model/method to data that contains outliers?",
  "issue_number": 106,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/106",
  "labels": [
    {
      "name": "bhg:micro2macro_gbr_1",
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
      "name": "modality:DWI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:MRI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "programming:Matlab",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:Python",
      "description": "",
      "color": "5319e7"
    },
    {
      "name": "programming:R",
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
      "name": "project_development_status:2_releases_existing",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "project_tools_skills:familiar",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_tools_skills:none",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_type:coding_methods",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:method_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "status:published",
      "description": "",
      "color": "0e8a16"
    },
    {
      "name": "tools:DIPY",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Freesurfer",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:MRtrix",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Nipype",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:SPM",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "topic:MR_methodologies",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:diffusion",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:reproducible_scientific_methods",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:statistical_modelling",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:tractography",
      "description": "",
      "color": "006b75"
    }
  ],
  "content": "<!-- Guidelines\r\n\r\nWe are very excited to meet you at Brainhack Global 2020 \ud83c\udf89. To submit a project, you need to be an attendee to one of the Brainhack Global 2020 events listed on the [Brainhack Global 2020 webpage](https://brainhack.org/global2020/events/). Please, register for the event that is most suitable to your location, time zone, interest, and/or project prior to submitting one. Thank you!\r\n\r\nWe have prepared a checklist to help with your project submission. Here is how to proceed:\r\n\r\nBefore filling in any part please check items in the checklist below as you go through them.\r\nOnce you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section, submit your issue and add a comment saying 'Hi @Brainhack-Global/project-monitors: my project is ready!'\r\nThank you!\r\n\r\nAfter the issue is submitted, we will assign a 'project monitor' from the event location that you are registered with to review your submission. Once the submission is approved by the 'project monitor', they will add the label 'Project is ready' and it will appear on [Brainhack Global 2020 Projects](https://brainhack.org/global2020/projects) page with a separate project dedicated webpage. \r\n\r\nNote that you can always update your issue which will also change your page on the website accordingly.\r\n\r\nIf at any time you need help from us or anything is unclear, please add a comment and ping your project monitor. Our team is here to help! -->\r\n\r\n## Project info\r\n\r\n**Title:** What to do when (clinical) Diffusion Weighted Image data quality is sh***y: How to adjust for it in modeling and estimate the confidence of your model afterward?\r\n\r\n\r\n**Project lead:** Viljami Sairanen [Twitter @ViljamiSairanen](https://twitter.com/viljamisairanen)\r\n\r\n\r\n**Project collaborators:** DICE Lab (PI: Alessandro Daducci, University of Verona, Italy), [BABA Center](http://www.babacenter.fi/) (PI: Sampsa Vanhatalo, University of Helsinki, Finland)\r\n\r\n\r\n**Registered Brainhack Global 2021 Event:** Brainhack Atlantis The Atlantic Ocean - Micro2Macro\r\n\r\n\r\n**Project Description:**\r\n\r\n**1 Aim:** Modify existing brain structure modeling algorithms and estimators to adjust for outliers in the measurements to enable their usage in clinical neuroresearch. The aim is to publish the results as a journal article.\r\n\r\n**2 Reason:** Clinical data is often corrupted by outliers and artifacts from various sources (e.g. subject motion shown if **Fig.1**).\r\n![image](https://user-images.githubusercontent.com/28725251/105063033-8db72780-5a7b-11eb-802b-f84c1e3a5e06.png)\r\n**Fig. 1** _Visualization of the differences between the cutting-edge research data of the Human Connectome Project and clinical patient data of a neonatal subject. A) A sagittal slice of a DW-MRI data from an HCP subject and B) an axial slice from the same HCP subject are only slightly affected by noise thus being easy to process with any modeling algorithm. C) A sagittal slice of a DW-MRI data from a clinical neonatal subject with the red arrow pointing to two adjacent axial slices in D) showing a good quality slice and E) showing missing data error due to subject motion. This clinical example is a very common case of suboptimal image quality in neonatal imaging projects or other projects with uncooperative patients and subjects. Therefore, processing steps developed using data primarily from sources with excellent quality could result in highly inaccurate connectome models when applied to clinical data._\r\n\r\n**3 How:** A highly realistic ground-truth simulation of diffusion-weighted image (DWI) set of the human brain structures is shared with the participants. Simulation is based on the Human Connectome Project data and is generated using MRTrix3 and COMMIT framework. A Python script is provided to introduce the outliers and realistic noise distribution to the ground-truth dataset for algorithm evaluation purposes. The simulated dataset will be sent directly to the participants as the HCP data (which this quite directly is) should not be hosted outside their original repository.\r\n\r\nParticipants can either propose their own algorithms to be evaluated with this data or completely new estimation algorithms can be proposed. Finally, the best algorithms will be compared with real human data acquired from neonatal subjects that contain typical motion artefacts. This data cannot be shared with the participants due to the sensitive nature of data. The acquisition consists of multiple reference b0 images and two shells on (60 DWIs with b-value of 750 and 74 with b-value of 1800).\r\n\r\n**Data to use:**  A highly realistic synthetic diffusion-weighted MRI dataset is shared with the participants here:  [GoogleDrive](https://drive.google.com/drive/folders/1jfCtpOKieFBSQeQwnymmZkVd3Y7fA1vO?usp=sharing)\r\n\r\n**Link to project repository/sources:** Code resources will be shared here https://github.com/vilsaira/brainhack2021. Notably, the dataset is too large for GitHub.\r\n\r\n\r\n**Goals for Brainhack Global 2020:** Evaluation of multiple robust microstructural models or DWI signal representations with the provided data. Results would be published in a peer-review journal and as a conference abstract (if suitable).\r\n<!-- Add a list of milestones or deliverables that you expect to achieve during the event. Try to provide goals of varying complexity for contributors with different sets of skills. -->\r\n\r\n**Good first issues:**\r\n 1. Selecting which model estimators will be used in this project (tensors, csd, noddi, etc.).\r\n 2. Implementing the robust augmentations in each estimator.\r\n 3. Comparing both the original and the robust estimator with the synthetic dataset.\r\n 4. Optional comparison with the clinical neonatal data.\r\n<!-- Add a list of tasks to help new contributors find easy gateways into open source projects. -->\r\n\r\n**Skills:** \r\nOS: Any\r\nProbably necessary: Python or Matlab, understanding of NIFTI or other neuroimage formats\r\nLikely useful: shell scripting, MRTrix3, COMMIT\r\nDefinitely appreciated: consistent writing skills both in code and manuscript\r\n\r\n<!-- Add a list of skills needed to contribute to this project. Try to think of both coding and non-coding skills. You can provide predefined skill levels, but it\u2019s better if you give concrete examples of the type of task contributors will be facing. Please make sure you create equal opportunities to accommodate the newcomers in your project to learn from each other and share the experiences. -->\r\n\r\n**Tools/Software/Methods to Use:** Visual Studio Code, Python, Matlab, MRTrix3, COMMIT\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/brainhack-micro2macro-2020\r\n\r\n\r\nZoom\r\n<!-- Add links to chat channels in Slack or Mattermost -->\r\n\r\n\r\n<!-- [ ] Video channel: Please write here the communication channel (Zoom, Jitsi, Twitch, or any other platform) you will be using to work collaboratively however please keep them as commented to avoid any public sharing. Once you set up your project Mattermost communication channel, make sure you write the link of the video channel at the header of the Mattermost channel for your attendees to know --> \r\n\r\n**Project labels**\r\n#bhg:micro2macro_gbr_1\r\n\r\n- Type of project:\r\n#coding_methods, #method_development\r\n\r\n- Project development status:\r\n#1_basic structure, #2_releases_existing\r\n\r\n- Topic of the projet:\r\n#diffusion, #MR_methodologies, #reproducible_scientific_methods, #statistical_modelling, #tractography\r\n\r\n- Tools used in the project:\r\n#DIPY, #Freesurfer, #MRtrix, #Nipype, #SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\n#Matlab, #Python, #R, #shell_scripting, #Unix_command_line\r\n\r\n- Modalities involved in the project (if any):\r\n#DWI, #MRI\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, #2_branches_PRs\r\n\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\ncoding_methods, data_management, documentation, method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, expert, familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\nPython, R, shell_scripting, Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, 1_commit_push, 2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}