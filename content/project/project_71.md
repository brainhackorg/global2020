{
  "project_url": "\r\nGitHub: https://github.com/brainets/frites",
  "project_description": "\r\nFrites is a recent pure Python package (https://github.com/brainets/frites) to analyse neurophysiological data within the Information Theoretical framework and to perform group-level statistics on information-based measures. The aim of the software is to extract brain networks that are modulated according to the task (model-based and model-free analysis). To this end, Frites contains several CPU-based functions to estimate the directed information flow between brain areas. While those methods estimate the directed connectivity in a reasonable amount of time on small networks, the complexity of larger networks are too demanding for the current CPU implementation. Therefore, the ultimate goal of this project would be to have both a CPU and a GPU implementations of our recent multivariate information flow measure.\r\n\r\n**Data to use:**\r\nNo data are needed, Frites includes functions to generate simulated data.\r\n\r\n**Link to project repository/sources:**\r\nGitHub: https://github.com/brainets/frites\r\n\r\n**Goals for Brainhack Global 2020:**\r\nThe following points are going to be addressed in this project:\r\n- Code a GPU implementation of the conditional mutual-information\r\n- Include a switch for the user to specify if a CPU or a GPU implementations are going to be used when computing the univariate information flow\r\n- GPU porting of the multivariate information flow measure (which is also going to use the GPU version of scikit-learn)\r\n\r\n**Good first issues:**\r\nTranslate the core functions to be executed on GPU devices\r\nBenchmark those functions against CPU implementations and decide whether it's better in the future to have two implementations (CPU / GPU) or to have system-agnostic functions\r\n**Skills:**\r\nGood knowledge of python is needed. We will mostly use basic libraries used in computer science, especially numpy. No needing about specific knowledge of GPU programming.\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, Jupyter, GitHub, and Nextjournal or Colab.\r\n\r\n**Project labels**\r\n- Type of project:\r\ncoding_methods, data_management, documentation, #method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, 1_basic structure, #2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, #causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, #information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography, #connectivity\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, #MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, #expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, shell_scripting, Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n<!--[ ] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Optimization and GPU porting of information flow implementation",
  "issue_number": 71,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/71",
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
      "name": "topic:causality",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:information_theory",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:physiology",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "tools:MNE",
      "description": "",
      "color": "0052cc"
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
      "name": "project_tools_skills:familiar",
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
      "name": "project_type:method_development",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_development_status:2_releases_existing",
      "description": "",
      "color": "bfd4f2"
    },
    {
      "name": "bhg:marseille_fra_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "<!-- Guidelines\r\n\r\nWe are very excited to meet you at Brainhack Global 2020 \ud83c\udf89. To submit a project, you need to be an attendee to one of the Brainhack Global 2020 events listed on the [Brainhack Global 2020 webpage](https://brainhack.org/global2020/events/). Please, register for the event that is most suitable to your location, time zone, interest, and/or project prior to submitting one. Thank you!\r\n\r\nWe have prepared a checklist to help with your project submission. Here is how to proceed:\r\n\r\nBefore filling in any part please check items in the checklist below as you go through them.\r\nOnce you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section, submit your issue and add a comment saying 'Hi @Brainhack-Global/project-monitors: my project is ready!'\r\nThank you!\r\n\r\nAfter the issue is submitted, we will assign a 'project monitor' from the event location that you are registered with to review your submission. Once the submission is approved by the 'project monitor', they will add the label 'Project is ready' and it will appear on [Brainhack Global 2020 Projects](https://brainhack.org/global2020/projects) page with a separate project dedicated webpage. \r\n\r\nNote that you can always update your issue which will also change your page on the website accordingly.\r\n\r\nIf at any time you need help from us or anything is unclear, please add a comment and ping your project monitor. Our team is here to help! -->\r\n\r\n## Project info\r\n\r\n**Title:**\r\n Optimization and GPU porting of information flow implementation\r\n\r\n**Project lead and collaborators:**\r\nEtienne Combrisson & Ruggero Basanisi\r\n\r\n**Image of the project:**\r\n![project1](https://user-images.githubusercontent.com/26648765/100776157-7dcc8100-3404-11eb-805d-f8d458f46a3d.png)\r\n\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nBrainHack Marseille \r\n\r\n**Project Description:**\r\nFrites is a recent pure Python package (https://github.com/brainets/frites) to analyse neurophysiological data within the Information Theoretical framework and to perform group-level statistics on information-based measures. The aim of the software is to extract brain networks that are modulated according to the task (model-based and model-free analysis). To this end, Frites contains several CPU-based functions to estimate the directed information flow between brain areas. While those methods estimate the directed connectivity in a reasonable amount of time on small networks, the complexity of larger networks are too demanding for the current CPU implementation. Therefore, the ultimate goal of this project would be to have both a CPU and a GPU implementations of our recent multivariate information flow measure.\r\n\r\n**Data to use:**\r\nNo data are needed, Frites includes functions to generate simulated data.\r\n\r\n**Link to project repository/sources:**\r\nGitHub: https://github.com/brainets/frites\r\n\r\n**Goals for Brainhack Global 2020:**\r\nThe following points are going to be addressed in this project:\r\n- Code a GPU implementation of the conditional mutual-information\r\n- Include a switch for the user to specify if a CPU or a GPU implementations are going to be used when computing the univariate information flow\r\n- GPU porting of the multivariate information flow measure (which is also going to use the GPU version of scikit-learn)\r\n\r\n**Good first issues:**\r\nTranslate the core functions to be executed on GPU devices\r\nBenchmark those functions against CPU implementations and decide whether it's better in the future to have two implementations (CPU / GPU) or to have system-agnostic functions\r\n**Skills:**\r\nGood knowledge of python is needed. We will mostly use basic libraries used in computer science, especially numpy. No needing about specific knowledge of GPU programming.\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, Jupyter, GitHub, and Nextjournal or Colab.\r\n\r\n**Project labels**\r\n- Type of project:\r\ncoding_methods, data_management, documentation, #method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, 1_basic structure, #2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, #causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, #information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, #physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography, #connectivity\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, #MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\ncomfortable, #expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, shell_scripting, Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n<!--[ ] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}