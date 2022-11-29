{
  "project_url": "\r\nhttp://dsi-studio.labsolver.org/download-images/local-connectome-fingerprints-of-hcp-1062-subjects-for-neofac-prediction",
  "project_description": "\r\nLocal connectome fingerprints (LCF) are voxel-based metrics derived from diffusion MRI to provide a subject-specific quantification of brain connections. The task of this project is to predict personality using LCF.\r\n\r\n**Good first issues:**\r\n1. Build a regression or classification model to predict the first answer to the personality question.\r\n2. Estimating predicting accuracy using 10-fold cross-validation\r\n\r\n**Data to use:**\r\nhttps://pitt.box.com/v/HCP1062-NEOFAC\r\n\r\n\r\nThere are a total of 1062 subjects included in this data set. Each LCF of a subject has a total of 128894 brain fingerprint features. Each feature has an associated location (mni_location) and fiber orientation (fiber_direction) to allow plotting the spatial distribution of the feature. Please note that each voxel may have more than one feature (because there could be multiple fiber populations within the same voxel).\r\n\r\n![image](https://user-images.githubusercontent.com/275569/101423880-fd0bfa00-38c7-11eb-8cc4-8f3aa7986f06.png)\r\n\r\n- number of samples: 1062\r\n- input data: _subjects_\r\n- variables to predict: _NEOFAC_\r\n\r\ndimension: the image dimension of the original MRI data\r\nfiber_direction: the axonal fiber direction for each feature\r\nmni_location: the spatial location for each feature\r\nnames: HCP serial number for each subject\r\nsubjects: The LCFs of 1062 subjects (features)\r\nNEOFAC: subjects answers to 60 questions (variable to be predicted). The NEO-FFI variable can be 0.3: strongly disagree, 0.4 disagree, 0.5 neutral, 0.6: agree, 0.7: strongly agree. \r\n\r\n\r\n**Link to project repository/sources:**\r\nhttp://dsi-studio.labsolver.org/download-images/local-connectome-fingerprints-of-hcp-1062-subjects-for-neofac-prediction\r\n\r\n**Goals for Brainhack Global 2020**\r\nThe goal is to test whether fixed behaviors could be predicted from LCF.\r\n\r\n**Skills:**\r\nData regression using statistics or machine learning methods.\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, Matlab, or R\r\nAny data analysis packages.\r\n\r\n**Communication channels:**\r\nTwitter account:  @FangChengYeh\r\n\r\n**Project labels**\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, #data_management, #method_development\r\n\r\n- Project development status:\r\n#releases_existing\r\n\r\n- Topic of the projet:\r\n#connectome, #deep_learning, #diffusion, #machine_learning, #MR_methodologies, #neural_decoding, #statistical_modelling, \r\n\r\n- Tools used in the project:\r\n#DSIStudio\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar\r\n\r\n- Programming language used in the project:\r\n#Matlab, #Python, #R\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, #DWI, #MRI\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n#0_no_git_skills\r\n\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\n\r\n",
  "Title": "Prediction of Personality using Diffusion MRI Local Connectome Fingerprints",
  "issue_number": 85,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/85",
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
      "name": "topic:connectome",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:deep_learning",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:diffusion",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:machine_learning",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:MR_methodologies",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "topic:neural_decoding",
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
      "name": "programming:R",
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
      "name": "project_type:coding_methods",
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
      "name": "bhg:pittsburgh_usa_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "## Project info\r\n![lcf](https://user-images.githubusercontent.com/275569/101425870-d949b380-38c9-11eb-8aeb-0d4dbad47bd2.png)\r\n**Title:**\r\nPrediction of Personality using Diffusion MRI Local Connectome Fingerprints\r\n\r\n**Project lead:**\r\nFang-Cheng Yeh\r\n\r\n**Project collaborators:**\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nThe Pittsburgh Brainhack: DeBurghing 2020, Pittsburgh, PA,\r\n\r\n**Project Description:**\r\nLocal connectome fingerprints (LCF) are voxel-based metrics derived from diffusion MRI to provide a subject-specific quantification of brain connections. The task of this project is to predict personality using LCF.\r\n\r\n**Good first issues:**\r\n1. Build a regression or classification model to predict the first answer to the personality question.\r\n2. Estimating predicting accuracy using 10-fold cross-validation\r\n\r\n**Data to use:**\r\nhttps://pitt.box.com/v/HCP1062-NEOFAC\r\n\r\n\r\nThere are a total of 1062 subjects included in this data set. Each LCF of a subject has a total of 128894 brain fingerprint features. Each feature has an associated location (mni_location) and fiber orientation (fiber_direction) to allow plotting the spatial distribution of the feature. Please note that each voxel may have more than one feature (because there could be multiple fiber populations within the same voxel).\r\n\r\n![image](https://user-images.githubusercontent.com/275569/101423880-fd0bfa00-38c7-11eb-8cc4-8f3aa7986f06.png)\r\n\r\n- number of samples: 1062\r\n- input data: _subjects_\r\n- variables to predict: _NEOFAC_\r\n\r\ndimension: the image dimension of the original MRI data\r\nfiber_direction: the axonal fiber direction for each feature\r\nmni_location: the spatial location for each feature\r\nnames: HCP serial number for each subject\r\nsubjects: The LCFs of 1062 subjects (features)\r\nNEOFAC: subjects answers to 60 questions (variable to be predicted). The NEO-FFI variable can be 0.3: strongly disagree, 0.4 disagree, 0.5 neutral, 0.6: agree, 0.7: strongly agree. \r\n\r\n\r\n**Link to project repository/sources:**\r\nhttp://dsi-studio.labsolver.org/download-images/local-connectome-fingerprints-of-hcp-1062-subjects-for-neofac-prediction\r\n\r\n**Goals for Brainhack Global 2020**\r\nThe goal is to test whether fixed behaviors could be predicted from LCF.\r\n\r\n**Skills:**\r\nData regression using statistics or machine learning methods.\r\n\r\n**Tools/Software/Methods to Use:**\r\nPython, Matlab, or R\r\nAny data analysis packages.\r\n\r\n**Communication channels:**\r\nTwitter account:  @FangChengYeh\r\n\r\n**Project labels**\r\n\r\nNow the real list (please indicate all of the labels you'd like to add to your project):\r\n\r\n- Type of project:\r\n#coding_methods, #data_management, #method_development\r\n\r\n- Project development status:\r\n#releases_existing\r\n\r\n- Topic of the projet:\r\n#connectome, #deep_learning, #diffusion, #machine_learning, #MR_methodologies, #neural_decoding, #statistical_modelling, \r\n\r\n- Tools used in the project:\r\n#DSIStudio\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#comfortable, #expert, #familiar\r\n\r\n- Programming language used in the project:\r\n#Matlab, #Python, #R\r\n\r\n- Modalities involved in the project (if any):\r\n#behavioral, #DWI, #MRI\r\n\r\n- Git skills required to enter the project (more than one possible):\r\n#0_no_git_skills\r\n\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [ ] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n\r\n- [x] Provide an image of your project for the Brainhack Global 2020 website. \r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\n\r\n\r\n"
}