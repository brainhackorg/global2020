{
  "project_url": " https://github.com/nipype/pydra",
  "project_description": "\r\n[Nipype](https://nipype.readthedocs.io) is a Python library that provides a uniform interface to existing neuroimaging software and facilitates interaction between these packages within a single workflow. It forms the basis of widely-used pipelines such as C-PAC and fMRIPrep.\r\n\r\n<!-- Nipype can be considered four separate components: 1) the workflow *engine*; 2) interfaces to specific tools; 3) pre-written workflows for use in larger workflows; 4) execution models to allow workflows to be run in different environments.\r\n\r\nIn Nipype 2, the\r\n-->\r\n\r\nPydra is a new workflow engine, written from scratch for Nipype 2. Pydra is reaching the maturity needed to justify upgrading workflows from Nipype 1, and it is time to build out the remainder of the ecosystem.\r\n\r\nIn this hackathon, we will focus on building tasks (interfaces) for neuroimaging tools that can be coordinated by Pydra, and workflows, sequences of tasks that meet real needs in neuroimaging.\r\n\r\nIf you're familiar with Nipype 1 and would like to flesh out a set of tasks (e.g., AFNI), we have a [tasks template](https://github.com/nipype/pydra-tasks-template) that you can use. If you would rather focus on a workflow, we encourage you to use the [niflow manager](https://github.com/niflows/niflow-manager/) to begin to create a workflow.\r\n\r\nPlease read the [contribution guide](https://github.com/nipype/pydra/blob/master/CONTRIBUTING.md) for tips on getting started and our policies on acknowledging contributions.\r\n\r\n\r\n**Data to use:** This project is not focused on any specific dataset, but participants are welcome to bring their own data or public data for testing and demonstrations. For MRI-based workflows, we can recommend [OpenNeuro ds000114](https://openneuro.org/datasets/ds000114) for different tasks and modalities.\r\n\r\n**Link to project repository/sources:** https://github.com/nipype/pydra\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\n* New tasks giving Pydra users access to common neuroimaging functions\r\n* Example workflows that can be run independently or included in larger workflows\r\n* Improved documentation for new users\r\n  * Migration guide for users of other tools, including Nipype 1\r\n* Creating a dashboard for Pydra \r\n* Improving Slurm execution of the workflows \r\n* Datalad-aware data fetching and export\r\n* Creating Pydra command-line interface (CLI)\r\n* Dask integration\r\n\r\n**Good first issues:**\r\n\r\n1. [Running and improving tutorial](https://github.com/nipype/pydra/issues/277) \r\n2. [Improving Documentation](https://github.com/nipype/pydra/issues/278) \r\n3. [Helper functions to promote Python functions to Pydra tasks](https://github.com/nipype/pydra/issues/275)\r\n4. Cli for reading the results\r\n5. [Good first issues](https://github.com/nipype/pydra/labels/good%20first%20issue) (to see live)\r\n\r\n**Skills:**\r\n\r\n* Required: Some Python\r\n* Nice to have: experience with writing workflows, e.g. with Nipype 1, [Bash](https://tldp.org/LDP/abs/html/), [Snakemake](https://snakemake.readthedocs.io/en/stable/), [Makefiles](https://www.gnu.org/software/make/), [CWL](https://www.commonwl.org/)\r\n* Recommended: Reasonable comfort with git\r\n\r\n**Tools/Software/Methods to Use:**\r\n* Python 3.7+ (we recommend [Anaconda](https://www.anaconda.com/products/individual) to manage Python environments)\r\n* Whatever tools you want to coordinate (FreeSurfer, AFNI, Julia, etc)\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\n\r\n* Chat: https://mattermost.brainhack.org/brainhack/channels/nipype\r\n* Video: (See channel header)\r\n\r\n**Project labels**\r\n- Type of project:\r\n#documentation, #method_development, #pipeline_development\r\n\r\n- Project development status:\r\n#2_releases_existing\r\n\r\n- Topic of the projet:\r\n#reproducible_scientific_methods, #workflows\r\n\r\n- Tools used in the project:\r\n#Nipype, #AFNI, #ANTs, #BIDS, #Brainstorm, #Datalad, #DIPY, #FieldTrip, #Freesurfer,\r\n#FSL, #MNE, #MRtrix, #SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar\r\n\r\n- Programming language used in the project:\r\n#Python, #containerization, #documentation, #shell_scripting, #Unix_command_line,\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, #DWI, #ECG, #ECOG, #EEG, #eye_tracking, #fMRI, #fNIRS, #MEG, #MRI, #PET, #TDCS, #TMS\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n#1_commit_push, #2_branches_PRs, #3_continuous_integration\r\n\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:",
  "Title": "Pydesperate times call for Pydrastic measures",
  "issue_number": 122,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/122",
  "labels": [
    {
      "name": "bhg:mtl_can_1",
      "description": "",
      "color": "d4c5f9"
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
      "name": "git_skills:3_continuous_integration",
      "description": "",
      "color": "bfdadc"
    },
    {
      "name": "modality:DWI",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:ECG",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:ECOG",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:EEG",
      "description": "",
      "color": "1d76db"
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
      "name": "modality:PET",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:TDCS",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:TMS",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:behavioral",
      "description": "",
      "color": "1d76db"
    },
    {
      "name": "modality:eye_tracking",
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
      "name": "programming:Unix_command_line",
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
      "name": "project",
      "description": "",
      "color": "f9bc70"
    },
    {
      "name": "project_development_status:2_releases_existing",
      "description": "",
      "color": "bfd4f2"
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
      "name": "project_tools_skills:familiar",
      "description": "",
      "color": "c2e0c6"
    },
    {
      "name": "project_type:documentation",
      "description": "",
      "color": "c5def5"
    },
    {
      "name": "project_type:method_development",
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
      "name": "tools:BIDS",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Brainstorm",
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
      "name": "tools:FSL",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:FieldTrip",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Freesurfer",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:MNE",
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
      "name": "topic:reproducible_scientific_methods",
      "description": "",
      "color": "006b75"
    }
  ],
  "content": "## Project info\r\n\r\n**Title:** Pydesperate times call for **Pydra**stic measures\r\n\r\n![](https://raw.githubusercontent.com/nipype/pydra/master/docs/logo/pydra_logo.jpg)\r\n\r\n\r\n**Project lead:** Dorota Jarecka (MM: @dorota) and Chris Markiewicz (T: @effigies, MM: @markiewicz)\r\n\r\n**Project collaborators:**\r\n\r\n\r\n**Registered Brainhack Global 2020 Event:** Montreal\r\n\r\n**Project Description:**\r\n[Nipype](https://nipype.readthedocs.io) is a Python library that provides a uniform interface to existing neuroimaging software and facilitates interaction between these packages within a single workflow. It forms the basis of widely-used pipelines such as C-PAC and fMRIPrep.\r\n\r\n<!-- Nipype can be considered four separate components: 1) the workflow *engine*; 2) interfaces to specific tools; 3) pre-written workflows for use in larger workflows; 4) execution models to allow workflows to be run in different environments.\r\n\r\nIn Nipype 2, the\r\n-->\r\n\r\nPydra is a new workflow engine, written from scratch for Nipype 2. Pydra is reaching the maturity needed to justify upgrading workflows from Nipype 1, and it is time to build out the remainder of the ecosystem.\r\n\r\nIn this hackathon, we will focus on building tasks (interfaces) for neuroimaging tools that can be coordinated by Pydra, and workflows, sequences of tasks that meet real needs in neuroimaging.\r\n\r\nIf you're familiar with Nipype 1 and would like to flesh out a set of tasks (e.g., AFNI), we have a [tasks template](https://github.com/nipype/pydra-tasks-template) that you can use. If you would rather focus on a workflow, we encourage you to use the [niflow manager](https://github.com/niflows/niflow-manager/) to begin to create a workflow.\r\n\r\nPlease read the [contribution guide](https://github.com/nipype/pydra/blob/master/CONTRIBUTING.md) for tips on getting started and our policies on acknowledging contributions.\r\n\r\n\r\n**Data to use:** This project is not focused on any specific dataset, but participants are welcome to bring their own data or public data for testing and demonstrations. For MRI-based workflows, we can recommend [OpenNeuro ds000114](https://openneuro.org/datasets/ds000114) for different tasks and modalities.\r\n\r\n**Link to project repository/sources:** https://github.com/nipype/pydra\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\n* New tasks giving Pydra users access to common neuroimaging functions\r\n* Example workflows that can be run independently or included in larger workflows\r\n* Improved documentation for new users\r\n  * Migration guide for users of other tools, including Nipype 1\r\n* Creating a dashboard for Pydra \r\n* Improving Slurm execution of the workflows \r\n* Datalad-aware data fetching and export\r\n* Creating Pydra command-line interface (CLI)\r\n* Dask integration\r\n\r\n**Good first issues:**\r\n\r\n1. [Running and improving tutorial](https://github.com/nipype/pydra/issues/277) \r\n2. [Improving Documentation](https://github.com/nipype/pydra/issues/278) \r\n3. [Helper functions to promote Python functions to Pydra tasks](https://github.com/nipype/pydra/issues/275)\r\n4. Cli for reading the results\r\n5. [Good first issues](https://github.com/nipype/pydra/labels/good%20first%20issue) (to see live)\r\n\r\n**Skills:**\r\n\r\n* Required: Some Python\r\n* Nice to have: experience with writing workflows, e.g. with Nipype 1, [Bash](https://tldp.org/LDP/abs/html/), [Snakemake](https://snakemake.readthedocs.io/en/stable/), [Makefiles](https://www.gnu.org/software/make/), [CWL](https://www.commonwl.org/)\r\n* Recommended: Reasonable comfort with git\r\n\r\n**Tools/Software/Methods to Use:**\r\n* Python 3.7+ (we recommend [Anaconda](https://www.anaconda.com/products/individual) to manage Python environments)\r\n* Whatever tools you want to coordinate (FreeSurfer, AFNI, Julia, etc)\r\n<!-- Add a list of tools/software/methods that are advised to be installed/reviewed ahead of the event to gain a bit of time with the installation of the software, preparation of the environments or describing the methods that will be needed to contribute to this project. Try to think of both coding and non-coding details regarding such to be listed. -->\r\n\r\n**Communication channels:**\r\n\r\n* Chat: https://mattermost.brainhack.org/brainhack/channels/nipype\r\n* Video: (See channel header)\r\n\r\n**Project labels**\r\n- Type of project:\r\n#documentation, #method_development, #pipeline_development\r\n\r\n- Project development status:\r\n#2_releases_existing\r\n\r\n- Topic of the projet:\r\n#reproducible_scientific_methods, #workflows\r\n\r\n- Tools used in the project:\r\n#Nipype, #AFNI, #ANTs, #BIDS, #Brainstorm, #Datalad, #DIPY, #FieldTrip, #Freesurfer,\r\n#FSL, #MNE, #MRtrix, #SPM\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar\r\n\r\n- Programming language used in the project:\r\n#Python, #containerization, #documentation, #shell_scripting, #Unix_command_line,\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, #DWI, #ECG, #ECOG, #EEG, #eye_tracking, #fMRI, #fNIRS, #MEG, #MRI, #PET, #TDCS, #TMS\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n#1_commit_push, #2_branches_PRs, #3_continuous_integration\r\n\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it..-->\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n"
}