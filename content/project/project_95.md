{
  "project_url": "\r\n\r\n* Fork the datalad repository here --> https://github.com/datalad/datalad",
  "project_description": "\r\nA substantial barrier to open science practice is the sharing and accessibility of datasets. Often datasets are stored in a centralized location such as a lab's server or in costly enterprise cloud systems. \r\n\r\nThere are multiple problems associated with centralized data storage: 1) outages may make data temporarily unavailable, 2) data can disappear forever if the central location suffers failure, 3) centralized data storage enables censorship and can limit accessibility.\r\n\r\nThe datalad version control software takes steps to address this by including git annex in the back-end to support multiple types of \"special remotes\" for downloading and publishing datasets. However, there has been no attempt to bridge a decentralized file storage protocol into the datalad suite of supported remotes. \r\n\r\nThe interplanetary file system allows peer-to-peer sharing of data and storage on distributed networks such as bittorrent, filecoin and cloudflare. \r\n\r\nData storage on these distributed networks also enables tokenization of individual datasets on the Ethereum blockchain and is an important first step for establishing data marketplaces for the peer-to-peer exchange of data and models. \r\n\r\nThe current project aims to explore the requirements and feasibility of upgrading datalad to support ipfs by including wrapper code for the definition of an ipfs special remote. Once implemented, the project will satisfy requirements for tools needed to automate the tokenization of datasets on the ethereum blockchain.\r\n\r\n*What we are Doing*\r\nIncluding IPFS special remote capability to datalad\r\n\r\n*For Who?*\r\nFor Decentralized Science!\r\n\r\n*Why?*\r\nCentralized data storage is not sustainable in the era of web 3.0\r\n\r\n*Resources*\r\n[Git Annex IPFS](https://git-annex.branchable.com/special_remotes/ipfs/)\r\n[Datalad FAQ](http://handbook.datalad.org/en/latest/basics/101-180-FAQ.html)\r\n[IPFS](https://ipfs.io/)\r\n[Infura (IPFS API)](https://infura.io/)\r\n[A tokenized brain](https://opensea.io/assets/0x60f80121c31a0d46b5279700f9df786054aa5ee5/13071)\r\n\r\n**Data to use:**\r\n[Open Neuro](https://openneuro.org/)\r\n\r\n**Link to project repository/sources:**\r\n\r\n* Fork the datalad repository here --> https://github.com/datalad/datalad\r\n* Project Repository here --> https://github.com/seldamat/brainhack2020_DeSci\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\n- [x] Create test IPFS repository with git annex\r\n\r\n- [ ] Research datlad CLI and outline strategy for modifying special remotes. Open well-documented and clear issue on datalad github repository.\r\n\r\n- [ ] Implement modification to datalad for special remotes with ipfs\r\n\r\n- [ ] Test modification with open source data and host on IPFS\r\n\r\n- [ ] Tokenize an example dataset on the ethereum blockchain\r\n\r\n**Good first issues:**\r\n\r\n1. How does datalad work with special remotes under the hood? Can you set up your own ftp/ssh special remote?\r\n2. Demonstrate git annex special remote with IPFS.\r\n3. Add special remote wrapper/plugin to datalad core\r\n4. Test on multiple machines/environments\r\n5. Pull request on datalad repository\r\n6. Create tokenized dataset on ethereum blockchain \r\n\r\n**Skills:**\r\nYou don't require much background besides familiarity with the terminal and working with the command line in a unix-y environment. We will work together and research how to add the special remote. Familiarity with git highly recommended.\r\n\r\n**Tools/Software/Methods to Use:**\r\ngit\r\ngit annex\r\ndatalad\r\npython\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/bhg-washingtondc\r\n\r\n**Project labels**\r\n\r\n- Type of project:\r\n#coding_methods, #data_management\r\n\r\n- Project development status:\r\n#0_concept_no_content\r\n\r\n- Topic of the project:\r\n#reproducible_scientific_methods\r\n\r\n- Tools used in the project:\r\n#BIDS, #Datalad, #Jupyter\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\n#Python, R, #shell_scripting, #Unix_command_line, #Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nnone\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#2_branches_PRs\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it.\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n\r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n",
  "Title": "Baby Steps Towards De-Sci (Decentralized Science) with Datalad + git annex + IPFS (Interplanetary File Storage System)",
  "issue_number": 95,
  "link_to_issue": "https://github.com/brainhackorg/global2020/issues/95",
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
      "name": "topic:reproducible_scientific_methods",
      "description": "",
      "color": "006b75"
    },
    {
      "name": "tools:BIDS",
      "description": "",
      "color": "0052cc"
    },
    {
      "name": "tools:Datalad",
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
      "name": "programming:Web",
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
      "name": "bhg:washingtondc_usa_1",
      "description": "",
      "color": "d4c5f9"
    }
  ],
  "content": "## Project info\r\n\r\n**Title:**\r\n# Baby Steps Towards a Decentralized Science (De-Sci) with Datalad + git annex + Interplanetary File Storage System and a Dash of Ethereum\r\n\r\n![image](https://user-images.githubusercontent.com/1558845/101986235-ced94200-3c5a-11eb-9ddb-9dc896b34c47.png)\r\n\r\n**Project lead:**\r\nShady El Damaty - @hebbianloop\r\n\r\n**Project collaborators:**\r\n@nkhalsa\r\n\r\n**Registered Brainhack Global 2020 Event:**\r\nBrainhack DC\r\n\r\n**Project Description:**\r\nA substantial barrier to open science practice is the sharing and accessibility of datasets. Often datasets are stored in a centralized location such as a lab's server or in costly enterprise cloud systems. \r\n\r\nThere are multiple problems associated with centralized data storage: 1) outages may make data temporarily unavailable, 2) data can disappear forever if the central location suffers failure, 3) centralized data storage enables censorship and can limit accessibility.\r\n\r\nThe datalad version control software takes steps to address this by including git annex in the back-end to support multiple types of \"special remotes\" for downloading and publishing datasets. However, there has been no attempt to bridge a decentralized file storage protocol into the datalad suite of supported remotes. \r\n\r\nThe interplanetary file system allows peer-to-peer sharing of data and storage on distributed networks such as bittorrent, filecoin and cloudflare. \r\n\r\nData storage on these distributed networks also enables tokenization of individual datasets on the Ethereum blockchain and is an important first step for establishing data marketplaces for the peer-to-peer exchange of data and models. \r\n\r\nThe current project aims to explore the requirements and feasibility of upgrading datalad to support ipfs by including wrapper code for the definition of an ipfs special remote. Once implemented, the project will satisfy requirements for tools needed to automate the tokenization of datasets on the ethereum blockchain.\r\n\r\n*What we are Doing*\r\nIncluding IPFS special remote capability to datalad\r\n\r\n*For Who?*\r\nFor Decentralized Science!\r\n\r\n*Why?*\r\nCentralized data storage is not sustainable in the era of web 3.0\r\n\r\n*Resources*\r\n[Git Annex IPFS](https://git-annex.branchable.com/special_remotes/ipfs/)\r\n[Datalad FAQ](http://handbook.datalad.org/en/latest/basics/101-180-FAQ.html)\r\n[IPFS](https://ipfs.io/)\r\n[Infura (IPFS API)](https://infura.io/)\r\n[A tokenized brain](https://opensea.io/assets/0x60f80121c31a0d46b5279700f9df786054aa5ee5/13071)\r\n\r\n**Data to use:**\r\n[Open Neuro](https://openneuro.org/)\r\n\r\n**Link to project repository/sources:**\r\n\r\n* Fork the datalad repository here --> https://github.com/datalad/datalad\r\n* Project Repository here --> https://github.com/seldamat/brainhack2020_DeSci\r\n\r\n**Goals for Brainhack Global 2020:**\r\n\r\n- [x] Create test IPFS repository with git annex\r\n\r\n- [ ] Research datlad CLI and outline strategy for modifying special remotes. Open well-documented and clear issue on datalad github repository.\r\n\r\n- [ ] Implement modification to datalad for special remotes with ipfs\r\n\r\n- [ ] Test modification with open source data and host on IPFS\r\n\r\n- [ ] Tokenize an example dataset on the ethereum blockchain\r\n\r\n**Good first issues:**\r\n\r\n1. How does datalad work with special remotes under the hood? Can you set up your own ftp/ssh special remote?\r\n2. Demonstrate git annex special remote with IPFS.\r\n3. Add special remote wrapper/plugin to datalad core\r\n4. Test on multiple machines/environments\r\n5. Pull request on datalad repository\r\n6. Create tokenized dataset on ethereum blockchain \r\n\r\n**Skills:**\r\nYou don't require much background besides familiarity with the terminal and working with the command line in a unix-y environment. We will work together and research how to add the special remote. Familiarity with git highly recommended.\r\n\r\n**Tools/Software/Methods to Use:**\r\ngit\r\ngit annex\r\ndatalad\r\npython\r\n\r\n**Communication channels:**\r\nhttps://mattermost.brainhack.org/brainhack/channels/bhg-washingtondc\r\n\r\n**Project labels**\r\n\r\n- Type of project:\r\n#coding_methods, #data_management\r\n\r\n- Project development status:\r\n#0_concept_no_content\r\n\r\n- Topic of the project:\r\n#reproducible_scientific_methods\r\n\r\n- Tools used in the project:\r\n#BIDS, #Datalad, #Jupyter\r\n\r\n- Tools skill level required to enter the project (more than one possible):\r\n#familiar, #no_skills_required\r\n\r\n- Programming language used in the project:\r\n#Python, R, #shell_scripting, #Unix_command_line, #Web, workflows\r\n\r\n- Modalities involved in the project (if any):\r\nnone\r\n\r\n- Git skills reuired to enter the project (more than one possible):\r\n#2_branches_PRs\r\n\r\n- [x] I added all of the labels I want an associate to my project\r\n\r\n## Project Submission\r\n\r\n### Submission checklist\r\n\r\n*Once the issue is submitted, please check items in this list as you add under \u2018Additional project info\u2019*\r\n\r\n- [x] Link to your project: could be a code repository, a shared document, etc.\r\n- [x] Goals for Brainhack Global 2020: describe what you want to achieve during this brainhack.\r\n- [x] Flesh out at least 2 \u201cgood first issues\u201d: those are tasks that do not require any prior knowledge about your project, could be defined as issues in a GitHub repository, or in a shared document.\r\n- [x] Skills: list skills that would be particularly suitable for your project. We ask you to include at least one non-coding skill. Use the issue labels for this purpose.\r\n- [x] Chat channel: A link to a chat channel that will be used during the Brainhack Global 2020 event. This can be an existing channel or a new one. We recommend using the [Brainhack space on Mattermost](https://mattermost.brainhack.org/).\r\n<!-- [ ] Video channel: A link to a video channel that will be used during the Brainhack Global 2020 Brainhack. This can be an existing channel or a new one. For instance a [Jitsi meet room](https://meet.jit.si/). **Please, do not make the video channel public in here**: post a message in your chat channel and pin it so that it remains private, you do not get undesired content, and contributors can still have access to it.\r\n\r\nOptionally, you can also include information about:\r\n\r\n- [ ] Number of participants required.\r\n- [ ] Twitter-sized summary of your project pitch.\r\n- [ ] Provide an image of your project for the Brainhack Global 2020 website. \r\n\r\n<!-- You can put an image anywhere in this issue and it will be used to build your project page on the website. -->\r\n\r\nWe would like to think about how you will credit and onboard new members to your project. If you\u2019d like to share your thoughts with future project participants, you can include information about:\r\n\r\n- [ ] Specify how you will acknowledge contributions (e.g. listing members on a contributing page).\r\n- [ ] Provide links to onboarding documents if you have some:\r\n\r\n"
}