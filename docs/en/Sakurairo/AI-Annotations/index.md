---
title: Article Annotations
---

# Article Annotations <Badge type="tip" text="v3.0" />

You can access this page from `Dashboard → Posts → Article Annotations Management`.

## System Info

This section displays basic configuration info for the GPT API.

## Basic Usage

In the article annotation section, you can select one of your published posts.

- **Generate Annotations**  
  Use AI to generate annotations for the selected article.
- **Delete Annotations**  
  Remove annotations for the selected article.
- **Create Empty Data**  
  Create an empty annotation set for manual editing.

Once the GPT API is properly configured, you can use AI to generate annotations for articles.  
For longer posts, the system will automatically split the content and make parallel requests.  
You can configure the token limit per request in  
`Dashboard Options → Other Options → ChatGPT Options → ChatGPT Tokens Limit` (default: 7000 characters).

If no API is configured, you can still create an empty annotation set and manually edit it.  
Annotations generated by AI can also be manually modified.

## Edit Annotations

After generating or creating empty annotations, the article will appear in the "Articles with Annotations" section.

![](/ai_annotations/annotations.png)  
Click "View Annotations" to display the current article’s annotation details. All content is editable.

- **Term**: A keyword in the article to be annotated.
- **Explanation**: The annotation or explanation of the keyword.
- Click **Add Annotation** to add a new entry.
- Click **Delete** next to an entry to remove it.
- Click **Save** to store your edits.

![](/ai_annotations/anno-demo.png)  
On the article page, annotated keywords will appear with superscript markers. Clicking the marker will display the annotation content.
