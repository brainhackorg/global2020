{
  "project_url": "\r\n\r\nhttps://github.com/PaddySlator/dmipy ",
  "project_description": "\r\n\r\nAIM: Implement a hierarchical Bayesian fitting procedure for a range of brain microstructural models. \r\n\r\nTypically microstructural models are fitted \u201cvoxel-by-voxel\u201d to diffusion MRI (dMRI) data, with the implicit assumption that each image voxel is an independent measurement. Some recent techniques break this assumption, exploiting data redundancy to improve model fits and subsequent mappings.\r\n\r\nOne such method is the Bayesian hierarchical intravoxel incoherent motion model (IVIM) introduced by Orton et al. (https://doi.org/10.1002/mrm.24649). Here the posterior distribution encodes voxelwise microstructural parameter estimates, and the prior distribution encodes parameter means and covariance across a larger ROI. By applying Bayes\u2019 Rule and inferring the model with a Markov chain Monte Carlo (MCMC) algorithm, they improve IVIM parameter mappings of liver dMRI compared to standard methods.\r\n\r\nThis project will adapt this approach to brain microstructure modelling. \r\n\r\n\r\n**Data to use:**\r\n\r\nWe will test the method on a (to be chosen later) Human connectome project (HCP) dMRI scan (https://www.humanconnectome.org/study/hcp-young-adult/data-releases).\r\n\r\n**Link to project repository/sources:**\r\n\r\nhttps://github.com/PaddySlator/dmipy \r\nThis is a fork of the dmipy (Diffusion Microstructure Imaging in Python) repository. The project will utilise and adapt this code, with the ultimate goal of integrating the developed tools with dmipy.\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\nDeliverable 1: Implement MCMC algorithm for Bayesian hierarchical brain microstructure modelling\r\nDeliverable 2: Test MCMC algorithm on an HCP dMRI scan\r\n\r\n**Good first issues:**\r\n\r\n\r\n1. Discuss and choose which brain microstructure models to focus on (e.g. ball-stick, NODDI, SMT,...)\r\n2. Simulate simple test datasets for the microstructural models (dmipy)\r\n3. Implement MCMC algorithm for inference of the Bayesian hierarchical microstructure model on simulations (adapt dmipy) \r\n4. Download a suitable preprocessed HCP dMRI scan.\r\n5. Segment HCP dMRI scan into WM/GM/CSF ROIs (SPM or FSL)\r\n6. Apply MCMC algorithm to HCP dMRI scan (adapt dmipy) \r\n7. Baseline least squares fitting for microstructure models (dmipy)\r\n8. Baseline MCMC fitting for microstructure models (MDT or cuDIMOT)\r\n9. Write the MCMC algorithm as pseudocode \r\n\r\n\r\n**Skills:**\r\n\r\n\r\n- Python programming\r\n- Jupyter Notebook\r\n- Familiarity with brain dMRI data processing (e.g. NIFTI/DICOM format, dMRI protocols etc.)\r\n- Familiarity with HCP data\r\n- Basic understanding of model fitting methods (least squares method)\r\n- Basic understanding of Bayesian statistics\r\n\r\n\r\n**Tools/Software/Methods to Use:**\r\n\r\n- Python\r\n- Dmipy software package (installation instructions and main repo at https://github.com/AthenaEPI/dmipy, although we will work on my forked repo at https://github.com/PaddySlator/dmipy)\r\n\r\n**Not required** (don't worry about installing beforehand) but could be useful if you already have them installed:\r\n- MDT toolbox (https://github.com/robbert-harms/MDT)\r\n- cuDIMOT toolbox (https://users.fmrib.ox.ac.uk/~moisesf/cudimot/index.html)\r\n- SPM (https://www.fil.ion.ucl.ac.uk/spm/software/spm12/) \r\n- FSL (https://fsl.fmrib.ox.ac.uk/fsl/fslwiki) \r\n\r\n\r\n**Communication channels:**\r\n\r\nhttps://mattermost.brainhack.org/brainhack/channels/micro2macro-bayesian-fitting\r\n\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, data_management, documentation, #method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\n#Bayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\n#diffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\n#statistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, #DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, #MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Bayesian Hierarchical Microstructure Modelling in the Brain",
  "issue_number": 112,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/112",
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
      "name": "topic:Bayesian_approaches",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:diffusion",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:statistical_modelling",
      "description": "",
      "color": "006b75"
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
      "name": "programming:Unix_command_line",
      "description": "",
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
      "name": "project_tools_skills:expert",
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
      "name": "project_type:method_development",
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
  "content": "<!-- Guidelines\r\n\r\nWe are very excited to meet you at Brainhack Global 2020 \ud83c\udf89. To submit a project, you need to be an attendee to one of the Brainhack Global 2020 events listed on the [Brainhack Global 2020 webpage](https://brainhack.org/global2020/events/). Please, register for the event that is most suitable to your location, time zone, interest, and/or project prior to submitting one. Thank you!\r\n\r\nWe have prepared a checklist to help with your project submission. Here is how to proceed:\r\n\r\nBefore filling in any part please check items in the checklist below as you go through them.\r\nOnce you are done (at least all 'required' items must be provided), please delete the \"Guidelines\" section, submit your issue and add a comment saying 'Hi @Brainhack-Global/project-monitors: my project is ready!'\r\nThank you!\r\n\r\nAfter the issue is submitted, we will assign a 'project monitor' from the event location that you are registered with to review your submission. Once the submission is approved by the 'project monitor', they will add the label 'Project is ready' and it will appear on [Brainhack Global 2020 Projects](https://brainhack.org/global2020/projects) page with a separate project dedicated webpage. \r\n\r\nNote that you can always update your issue which will also change your page on the website accordingly.\r\n\r\nIf at any time you need help from us or anything is unclear, please add a comment and ping your project monitor. Our team is here to help! -->\r\n\r\n## Project info\r\n\r\n**Title:**\r\nSharing information across voxels with Bayesian hierarchical modelling to improve brain microstructure mapping \r\n\r\n<img width=\"400\" alt=\"Screenshot 2021-01-22 at 17 53 12\" src=\"https://user-images.githubusercontent.com/11181127/105526757-bc7f0900-5cda-11eb-9332-127efe193c21.png\">\r\n\r\n**Project lead:**\r\nPaddy Slator (email: p.slator@ucl.ac.uk, mattermost: paddyslator)\r\n\r\n**Project collaborators:**\r\nChris Parker\r\nLizzie Powell\r\nMatteo Battocchio\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nBrainhack Atlantis The Atlantic Ocean - Micro2Macro\r\n\r\n**Project Description:**\r\n\r\nAIM: Implement a hierarchical Bayesian fitting procedure for a range of brain microstructural models. \r\n\r\nTypically microstructural models are fitted \u201cvoxel-by-voxel\u201d to diffusion MRI (dMRI) data, with the implicit assumption that each image voxel is an independent measurement. Some recent techniques break this assumption, exploiting data redundancy to improve model fits and subsequent mappings.\r\n\r\nOne such method is the Bayesian hierarchical intravoxel incoherent motion model (IVIM) introduced by Orton et al. (https://doi.org/10.1002/mrm.24649). Here the posterior distribution encodes voxelwise microstructural parameter estimates, and the prior distribution encodes parameter means and covariance across a larger ROI. By applying Bayes\u2019 Rule and inferring the model with a Markov chain Monte Carlo (MCMC) algorithm, they improve IVIM parameter mappings of liver dMRI compared to standard methods.\r\n\r\nThis project will adapt this approach to brain microstructure modelling. \r\n\r\n\r\n**Data to use:**\r\n\r\nWe will test the method on a (to be chosen later) Human connectome project (HCP) dMRI scan (https://www.humanconnectome.org/study/hcp-young-adult/data-releases).\r\n\r\n**Link to project repository/sources:**\r\n\r\nhttps://github.com/PaddySlator/dmipy \r\nThis is a fork of the dmipy (Diffusion Microstructure Imaging in Python) repository. The project will utilise and adapt this code, with the ultimate goal of integrating the developed tools with dmipy.\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\nDeliverable 1: Implement MCMC algorithm for Bayesian hierarchical brain microstructure modelling\r\nDeliverable 2: Test MCMC algorithm on an HCP dMRI scan\r\n\r\n**Good first issues:**\r\n\r\n\r\n1. Discuss and choose which brain microstructure models to focus on (e.g. ball-stick, NODDI, SMT,...)\r\n2. Simulate simple test datasets for the microstructural models (dmipy)\r\n3. Implement MCMC algorithm for inference of the Bayesian hierarchical microstructure model on simulations (adapt dmipy) \r\n4. Download a suitable preprocessed HCP dMRI scan.\r\n5. Segment HCP dMRI scan into WM/GM/CSF ROIs (SPM or FSL)\r\n6. Apply MCMC algorithm to HCP dMRI scan (adapt dmipy) \r\n7. Baseline least squares fitting for microstructure models (dmipy)\r\n8. Baseline MCMC fitting for microstructure models (MDT or cuDIMOT)\r\n9. Write the MCMC algorithm as pseudocode \r\n\r\n\r\n**Skills:**\r\n\r\n\r\n- Python programming\r\n- Jupyter Notebook\r\n- Familiarity with brain dMRI data processing (e.g. NIFTI/DICOM format, dMRI protocols etc.)\r\n- Familiarity with HCP data\r\n- Basic understanding of model fitting methods (least squares method)\r\n- Basic understanding of Bayesian statistics\r\n\r\n\r\n**Tools/Software/Methods to Use:**\r\n\r\n- Python\r\n- Dmipy software package (installation instructions and main repo at https://github.com/AthenaEPI/dmipy, although we will work on my forked repo at https://github.com/PaddySlator/dmipy)\r\n\r\n**Not required** (don't worry about installing beforehand) but could be useful if you already have them installed:\r\n- MDT toolbox (https://github.com/robbert-harms/MDT)\r\n- cuDIMOT toolbox (https://users.fmrib.ox.ac.uk/~moisesf/cudimot/index.html)\r\n- SPM (https://www.fil.ion.ucl.ac.uk/spm/software/spm12/) \r\n- FSL (https://fsl.fmrib.ox.ac.uk/fsl/fslwiki) \r\n\r\n\r\n**Communication channels:**\r\n\r\nhttps://mattermost.brainhack.org/brainhack/channels/micro2macro-bayesian-fitting\r\n\r\n\r\n**Project labels**\r\n<!-- Please prepend a hashtag (#) to all of the labels that fit your project, then tick the box below to state you did so (either by adding an 'x' between square brackets or by ticking it after submission). Please make sure that you stick by the labels listed for each topic below, rather than adding any new one, for further actions to work properly on the issue labels.\r\n\r\nE.g. my project is about the modulatory effect of salmon mousse on British supper survival\r\nIn the following list:\r\n```\r\nmeal:\r\nbrunch, supper\r\ntype:\r\nmousse, salmon, squid\r\n```\r\nI'm going to hashtag all of the labels I need my project to be indexed in:\r\n```\r\nmeal:\r\nbrunch, #supper\r\ntype:\r\n#mousse, #salmon, squid\r\n```\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, data_management, documentation, #method_development,\r\npipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n#0_concept_no_content, 1_basic structure, 2_releases_existing\r\n\r\n- Topic of the projet:\r\n#Bayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\n#diffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\n#statistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\nAFNI, ANTs, BIDS, Brainstorm, CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, Freesurfer,\r\nFSL, #Jupyter, MNE, MRtrix, Nipype, NWB, SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar, no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, containerization, documentation, Java, Julia, Matlab,\r\n#Python, R, shell_scripting, #Unix_command_line, Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, #DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, #MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#0_no_git_skills, #1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n-->\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}