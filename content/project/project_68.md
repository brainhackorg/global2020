{
  "Title": "macapype: segmentation to mesh pipeline",
  "issue_number": 68,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/68",
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
      "name": "topic:MR_methodologies",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "modality:MRI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "tools:SPM",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:FSL",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Freesurfer",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:AFNI",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:ANTs",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Nipype",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:BIDS",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:CPAC",
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
      "name": "programming:workflows",
      "description": "nextflow",
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
      "name": "git_skills:2_branches_PRs",
      "description": "",
      "color": "bfdadc"
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
  "content": "## Project info\r\n\r\n**Title:**\r\nmacapype: segmentation to mesh pipeline.\r\n\r\n**Project lead and collaborators:**\r\nDavid Meunier @davidmeunier79 \r\nBastien Cagna @BastienCagna\r\nKep Kee Loh @kepkeeloh\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nBrainHack Marseille 2-4 Dec 2020: \r\n<!-- https://mattermost.brainhack.org/brainhack/channels/bhg20-marseille-->\r\nhttps://brainhack-marseille.github.io/\r\n\r\n**Description:**\r\nMacapype is an open source python package based on the nipype framework. Dedicated to the processing of NHP MRI data, Macapype brings together existing tools from popular neuroimaging softwares (e.g. FSL, ANTs, SPM, AFNI etc), and the wraps of specialised scripts for NHP MRI data processing. Currently, Macapype also provides predefined pipelines for the preprocessing, brain extraction, and segmentation of NHP MRI data that are easy to use, and customizable to various input file types (T1w or T1w/T2w). These segmentation pipelines have been successfully adapted to MR images from various NHP species, including the macaques, baboons and marmosets.\r\n\r\n**External links** :\r\ngithub : https://github.com/Macatools/macapype\r\ndocumentation : https://macatools.github.io/macapype/index.html\r\n<!-- mattermost user forum: https://framateam.org/macapype-users/channels/town-square (requires a framateam account)-->\r\n\r\n**Goals for Brainhack Marseille**\r\nIn this brainhack, we would like to expand the existing pipelines of Macapype to allow the generation of surface meshes following the segmentation of the MR images. So far, macapype users have been performing the above process (i.e. surface mesh generation) by first, using a set of customised scripts to import Macapype-generated segmentations into Brainvisa, and second, to manually (point-and-click) generate surface meshes via the Morphologist Toolbox in Brainvisa. We aim to incorporate these two steps as an additional module in Macapype, which will enable the generation of surface meshes directly from the segmentations produced by Macapype. The final result would be a powerful pipeline that takes raw NHP structural MR scans as input, and generating tissue segmentation masks and surface meshes as outputs.\r\n\r\n**Skills:**\r\n-  python programming (20-100%)\r\n- nipype coding and wrapping (0-100%)\r\n- MRI data processing (50-100%)\r\n- anyone that has NHP data to process (0-100%)\r\n\r\n\r\n**Tools/Software/Methods to Use:**\r\nRelated softwares : brainvisa, freesurfer, nipype\r\n\r\n![macapype_illus](https://user-images.githubusercontent.com/7290245/100080647-5eeb4f00-2e46-11eb-902c-78acef2b6c55.jpg)\r\n\r\n**Project labels**\r\n\r\n- Type of project:\r\ncoding_methods, data_management, #documentation, method_development,\r\n#pipeline_development, tutorial_recording, visualization\r\n\r\n- Project development status:\r\n0_concept_no_content, 1_basic structure, #2_releases_existing\r\n\r\n- Topic of the projet:\r\nBayesian_approaches, causality, connectome, data_visualisation, deep_learning,\r\ndiffusion, diversity_inclusivity_equality, EEG_EventRelatedResponseModelling,\r\nEEG_source_modelling, Granger_causality, hypothesis_testing, ICA, information_theory,\r\nmachine_learning, #MR_methodologies, neural_decoding, neural_encoding, neural_networks,\r\nPCA, physiology, reinforcement_learning, reproducible_scientific_methods, single_neuron_models,\r\nstatistical_modelling, systems_neuroscience, tractography\r\n\r\n- Tools used in the project:\r\n#AFNI, #ANTs, #BIDS, Brainstorm, #CPAC, Datalad, DIPY, FieldTrip, fMRIPrep, #Freesurfer,\r\n#FSL, Jupyter, MNE, MRtrix, #Nipype, NWB, #SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\nno_programming_involved, C++, #containerization, #documentation, Java, Julia, #Matlab,\r\n#Python, R, shell_scripting, #Unix_command_line, Web, #workflows\r\n\r\n- Modalities involved in the project (if any):\r\nbehavioral, DWI, ECG, ECOG, EEG, eye_tracking, fMRI, fNIRS, MEG, #MRI, PET, TDCS, TMS\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n0_no_git_skills, 1_commit_push, #2_branches_PRs, 3_continuous_integration\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n<!-- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [x] Twitter-sized summary of your project pitch.\r\nNeuroDesk - A flexible, scalable, and easy to use data analysis environment for reproducible neuroimaging\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [x] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\ncontribution page + paper co-authorship once in a publishable state\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}