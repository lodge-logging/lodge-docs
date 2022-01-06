---
id: deployment
title: Deploying Lodge
slug: "/deployment"
hide_table_of_contents: true
---

To deploy Lodge, run `lodge deploy`.

![lodge deploy](/img/deploy.gif)

### `lodge deploy`

This command will start an interactive wizard for configuring the deployment. The prompts include:
- Selecting an existing or creating a new AWS Virtual Private Cloud (VPC)
- If using an existing VPC
  - Choose the VPC from the list fetched from your AWS account
  - Choose the public subnet you wish to use to deploy the dashboard
  - Choose the private subnets you wish to use to deploy the rest of the pipeline
- If using a new VPC
  - Enter the CIDR block of the network you will be shipping logs from

Once the wizard is complete, the CDK application will generate a series of CloudFormation templates that will take up to an hour to finish deploying on your account. You will see status updates in the terminal as well as in the CloudFormation console in AWS.
