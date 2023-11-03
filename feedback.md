# FEEDBACK

## Gin Admin Theme

- great personalisation
    - darkmode
    - 'secondary'-color
    - focus-color
    - spacing between elements
    - 3 possible display of the toolbar (on the side, on top, claro like)
    - logo
    - favicon
- allow user to personalize it theme ~~~
- toolbar work with other theme (module)
- gin login form module (personalisation of the background image and the logo)

## Paragraph Layout

- quite complicated to understand from scratch
- steps:
    - create paragraph types (text, media, ...)
    - create a special paragraph with the option "Layout Paragraphs" enabled
    - create a content type with paragraph field reference (with all the paragraphs wanted into the layout paragraph checked into "Reference type" )
    - change the value of the field widget to "Layout Paragraphs" (Manage fields) and enabled "Require paragraphs to be added inside a layout" into the option of the widget
    - change the value of the field widget to "Layout Paragraphs" (Manage from display)

## Custom Layout
- quite complicated to understand from scratch but a good documentation is available
- steps:
    - create a custom module (with info.yml file)
    - create a layouts.yml file with the following infos
```yaml
# layout_fourcol
layout_<layout_name>:
    # Four columns
    label: 'Label'
    # The path of the template file into your module
    # layouts/fourcol
    path: templates/<layout_name>
    # layout--fourcol
    template: layout--<layout_name>
    # custom_layout/fourcol
    library: <module_name>/<library_name>
    # Columns: 4
    category: 'Category'
    default_region: first
    # Build the icon with region (a region can be repeated to create a bigger one)
    icon_map:
        - [top]
        - [first, second, third, fourth]
        - [bottom]
    # Define the regions with a label
    regions:
        top:
        label: Top
        first:
        label: First
        second:
        label: Second
        third:
        label: Third
        fourth:
        label: Fourth
        bottom:
        label: Bottom
```
-   - create the libraries.yml file with the following infos:
```yaml
    <library_name>:
        css:
            theme:
                # css/style.css
                <path_to_yout_css>: {}
```
-   - create the twig template
    - create the style for the template
    
**Enjoy**
 