---
title: Project DESTINY - Enhancing Data Management and User Experience
description: Hello Everyone! I would like to share some annoucements regarding Project DESTINY.
date: '3-7-2024'
categories:
    - sveltekit
    - svelte
published: true

---

It's time for some exciting updates regarding our beloved platform. As the sole developer behind Project DESTINY, I am continuously seeking ways to enhance its functionality, performance, and user experience. Today, I am thrilled to share two significant announcements that will shape the future of our platform.
<br>
<h2 class="text-3xl font-bold">Migrating to a Pure JSON Backend </h2>
<br>

I'm happy to announce that the migration from Pocketbase to a pure JSON format for our backend data management has been a resounding success. While this transition may not sound glamorous, it is pivotal for enhancing the platform's performance and streamlining operations.

## Contributing to Project DESTINY

In our continued efforts to enhance Project DESTINY, we have introduced an updated way to contribute following our recent migration from Pocketbase to JSON for managing school data. 

This new process aims to streamline contributions and make it easier for users to contribute to the platform's growth. Here's how you can get involved:

<br>

1. **Fork the Repository:** Start by forking the Project DESTINY repository. You can do this by navigating to https://github.com/jeoooo/hcdctruesite/fork.

<br>

2. **Create a New Branch:** Once you've forked the repository, create a new branch for your feature. Use a descriptive name to reflect the purpose of your contribution. You can do this with the following command: `git checkout -b my-new-feature.`

<br>

3. **Add a New School Entry:** Open the static/schools.json file in the repository. Here, you'll add a new entry for the school you want to contribute. Follow the format provided below:
   
<br>

```json
{
    "name": "Mock School",
    "acronym": "MS",
    "logo": "mock_school_logo.png",
    "websites": [
        {
            "type": "official_website",
            "url": "https://www.mockschool.edu.ph/",
            "display_url": "mockschool.edu.ph",
            "website_description": "The official website of Mock School"
        },
        {
            "type": "student_portal",
            "url": "https://studentportal.mockschool.edu.ph/login",
            "display_url": "studentportal.mockschool.edu.ph",
            "website_description": "The official student portal of Mock School"
        },
        {
            "type": "lms",
            "url": "http://lms.mockschool.edu.ph/",
            "display_url": "lms.mockschool.edu.ph",
            "website_description": "The official Learning Management System (LMS) of Mock School"
        }
    ],
    "description": "Mock School is a fictional educational institution providing high-quality education.",
    "hex_code": "#336699"
}
```

<br>

<h3 class="text-2xl font-bold">Description of JSON Keys:</h3>

<br>

- **name:** The name of the school.

- **acronym:** (Optional) The acronym or abbreviation of the school's name.

- **logo:** The filename of the school's logo image.

- **websites:** An array containing information about the school's websites.

- **description:**  A brief description of the school.

- **hex_code:**  The hexadecimal color code representing the school's branding color.

<br>

4. **Commit and Push Changes:** Save your changes and commit them with a descriptive message using the command `git commit -am 'Add Mock School'`. Then, push your changes to your forked repository with `git push origin my-new-school`.
5. **Create a Pull Request:** Visit https://github.com/jeoooo/hcdctruesite/compare to create a new Pull Request. Select your branch and provide a clear title and description summarizing your changes.
6. **Review and Approval:** Your Pull Request will undergo review, and once approved, your changes will be merged into the main repository.


<br>
<h2 class="text-3xl font-bold">Recent Challenges to this Project</h2>

<br>
In addition to the exciting updates, I'd like to shed light on some of the current challenges I'm facing in maintaining and improving Project DESTINY:
<br>
<br>

1. **CORS Issues**: **CORS (Cross-Origin Resource Sharing)** remains a persistent challenge, especially when dealing with HTTP sites. While I've managed to resolve this issue through the use of a CORS proxy, it's an ongoing concern that requires attention to ensure seamless access to website data.
    
2. **Port Exposure**: One particular challenge revolves around the PWC (Philippine Women's College) portal, which is accessible through the URL [http://sa.pwc.edu.ph:8339/](http://sa.pwc.edu.ph:8339/). The inclusion of the port number 8339 raises questions about potential security vulnerabilities and requires further investigation to ensure the safety and integrity of the platform.
    
3. **Balancing Priorities**: As a sole developer, balancing Project DESTINY with other side projects and work commitments presents its own set of challenges. While I've addressed this in a previous blog post, it remains an ongoing struggle to allocate time and resources effectively while ensuring the continued growth and success of Project DESTINY.
    
<br>
These challenges serve as opportunities for growth and improvement, and I'm committed to overcoming them to deliver the best possible experience for users of Project DESTINY. Your continued support and understanding are greatly appreciated as I navigate these obstacles and work towards achieving our shared goals.
<br>
<br>
<h2 class="text-3xl font-bold"> Closing Remarks </h2>
<br>
We appreciate your contributions to Project DESTINY. Your efforts play a crucial role in making the platform more comprehensive and valuable for educators and students alike.

<br>
<br>

If you have any questions or need assistance, feel free to reach out. Together, let's continue to improve Project DESTINY and empower our community.
