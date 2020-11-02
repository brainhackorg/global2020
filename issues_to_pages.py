import requests
import re
import json

url = "https://api.github.com/repos/brainhackorg/global2020/issues?per_page=100"
response = requests.get(url)

if response.status_code == 200:
    issues = json.loads(response.content.decode('utf-8'))
    print("request accepted")
else:
    print("not working")

value = 'status:published'
projects = {}
i=0
for issue in issues:
    if issue['state'] == 'open':
        for label in issue['labels']:
            if label['name'] == value:
                i += 1
                print("Creating project_{0}".format(i))
                projects["project_{0}".format(i)] = {}
                title = {'Title': issue['title'].strip()}
                link_to_issue = {'link_to_issue': issue['html_url']}
                issue_number = {'issue_number': issue['number']}
                labels = {'labels': []}
                for label in issue['labels']:
                    # TODO: Implement some conditionals to filter out irrelevant labels that we created. For now, HUGO can discard them.
                    label_name = label['name']
                    label_description = label['description']
                    label_color = label['color']
                    label_dict = {'name': label_name,
                                    'description': label_description,
                                    'color': label_color}
                    labels['labels'].append(label_dict)
                content = {'content': issue['body']}
                # TODO: Grab other relevant terms such as Project leads, etc.
                proj_match = re.search('(?<=Link to project repository\\/sources:\*\*)[\\r\\n\s]*.*(http.*)(?=\\r\\n)', issue['body'])
                if proj_match:
                    project_url = {'project_url': proj_match.group()}
                    projects["project_{0}".format(i)].update(project_url) 
                proj_desc = re.search('(?<=Project Description:\*\*)[\\r\\n\s]*.*(?=\\r\\n)', issue['body'], flags=re.DOTALL)
                if proj_desc:
                    project_desc = {'project_description': proj_desc.group()}
                    projects["project_{0}".format(i)].update(project_desc)                     
                projects["project_{0}".format(i)].update(title)
                projects["project_{0}".format(i)].update(issue_number) 
                projects["project_{0}".format(i)].update(link_to_issue)            
                projects["project_{0}".format(i)].update(labels) 
                projects["project_{0}".format(i)].update(content)

               
for project in projects.items():
    with open(str('content/project/project_' + str(project[1]['issue_number']) + '.md'), 'w') as json_file:
        json.dump(project[1], json_file, indent=2)