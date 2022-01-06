---
id: lodge-restore
title: Lodge Restore
slug: "/lodge-restore"
hide_table_of_contents: true
---

![using-lodge-restore](https://github.com/lodge-logging/Lodge-Dashboard/blob/main/img/using-lodge-restore.gif)

Lodge Restore is a service that allows you to retrieve archival log data from Amazon S3 given a specific date range and to reindex the log data back into Elasticsearch to be visualized in Kibana. 

First, the user defines the start and end date to retrieve the archived logs from S3. A list of all the log files that are inserted into S3 during that time frame will be fetched and listed under log files. Once we see the success message, it indicates that the logs are re-indexed into Elasticsearch and are ready to be visualized in Kibana. 

You can also download the log files and here is the raw log text file that is downloaded. 