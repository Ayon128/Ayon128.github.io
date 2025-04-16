## Essential Files

* `_config.yml` - Controls sidebar info and site settings
  * Update personal details (name, bio, links)
  * Set site-wide configurations

* `_data/navigation.yml` - Manages header navigation
  ```yaml
  main:
    - title: "Publications"
      url: /publications/
    - title: "Projects"
      url: /projects/
    - title: "Experience"
      url: /experience/
    - title: "Skills"
      url: /skills/
    - title: "CV"
      url: /files/Ayon_CV_Updated_v1.pdf
  ```

* `_pages/about.md` - Homepage content
  * Update bio and research interests
  * First impression for visitors

* `_pages/publications.html` - Research publications
  * Add new papers with YAML frontmatter
  * Format: title, venue, date, citation

* `_pages/experience.html` - Professional experience
  * Work history, research positions
  * Competition achievements

* `_pages/projects.html` - Project portfolio
  * Showcase technical work with descriptions
  * Include links to repositories or demos

* `_pages/skills.html` - Technical skills
  * Programming languages, frameworks, tools
  * Categorize by proficiency level

## File Locations

* CV and other documents: `files/` directory
* Images: `images/` directory