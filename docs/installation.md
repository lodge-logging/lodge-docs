---
id: installation
title: Installing Lodge
slug: "/installation"
hide_table_of_contents: true
---

## Installing Lodge

```sh
npm i -g lodge-cli
```

## Lodge CLI Commands

| Command                 | Description                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lodge init`         | Gathers project information and provision necessary project folders and template files.                                                                                |
| `lodge deploy`       | Deploys a full data pipeline including Airbyte for ingestion and Grouparoo for syncing, both provisioned on AWS resources and connected to a Snowflake data warehouse. |
| `lodge destroy`    | Deploys the same pipeline as `deploy`, but also includes configuration for Zoom and Salesforce as Airbyte sources and Mailchimp as a Grouparoo destination.            |
| `lodge connect` | Launches Tapestry UI dashboard locally on port 7777.    
