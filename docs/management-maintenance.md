---
id: connect
title: Connecting to Lodge
slug: "/connect"
hide_table_of_contents: true
---

To connect to the Lodge pipeline, run `lodge connect`

### `lodge connect`

This command will begin an AWS System Manager (SSM) session with the bastion host. From there, you can run `./lodge-connect <component>` to SSH directly to Lodge components. Host names include:
- zookeeper1
- zookeeper2
- zookeeper3
- kafka1
- kafka2
- kafka3
- es1
- es2
- es3
- kibana
- webTools
