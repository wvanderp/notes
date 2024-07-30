Convert the given vCard to markdown format

Don't let the handlebars confuse you. They are just placeholders for the actual data
fill in the actual data in place of the handlebars

Parse the vCard carefully and make sure you understand the structure of the vCard before filling in the markdown template.

Make sure to make any entity links in the obsidian style (with square brackets), like people and categories.

if the data is not available, replace it with N/A

```markdown

# {{ contact.N }}

{% if contact.PHOTO %}
![Photo]({{ contact.PHOTO }})
{% endif %}

## Personal Details
- **First Name:** {{ contact.FN }}
- **Middle Name:** {{ contact.MN }}
- **Last Name:** {{ contact.LN }}
- **Nickname:** {{ contact.NICKNAME }}

- **Birthday:** {{ contact.BDAY }} (YYYY-MM-DD)

## Contact Information
- **Cell Phone:** {{ contact.TEL }} ({{type of number}})
- **Email:** {{ contact.EMAIL }} ({{type of email}})

## Address
- **Street Address:** {{ contact.ADR.street }}
- **City:** {{ contact.ADR.city }}
- **State:** {{ contact.ADR.state }}
- **Postal Code:** {{ contact.ADR.postal_code }}
- **Country:** {{ contact.ADR.country }}

## Organization
- **Organization:** {{ contact.ORG }}
- **Title:** {{ contact.TITLE }}

## Relationships status

{{ contact.RELATIONSHIP_STATUS }} (think married, single, etc)
with [[{{ contact.RELATIONSHIP_NAME }}]]
since {{ contact.RELATIONSHIP_DATE }} (YYYY-MM-DD)

## Social Media
- **{{ Name of social media }}:** {{ contact.SOCIALMEDIA }}
- continue for other social media

## Relatives
{% if contact.RELATEDNAMES %}
- **Related Names:**
  {% for relation in contact.RELATEDNAMES %}
  - **{{ relation.label }}:** [[{{ relation.name }}]]
  {% endfor %}
{% else %}
- **Related Names:** N/A
{% endif %}

## Hobbies and Interests
- **Hobbies:** {{ contact.HOBBIES }}
- **Interests:** {{ contact.INTERESTS }}
- **Sports:** {{ contact.SPORTS }}

## How We Met
- **How I Know Them:** {{ contact.HOW_I_KNOW_THEM }}
- **Where I First Met Them:** {{ contact.WHERE_FIRST_MET }}

## Notes
{{ contact.NOTE }}

## Categories
#{{ contact.CATEGORIES }}

```

only markdown please, no extra text before or after the markdown template
