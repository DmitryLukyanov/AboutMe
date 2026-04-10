---
# Fill in the fields below to create a basic custom agent for your repository.
# The Copilot CLI can be used for local testing: https://gh.io/customagents/cli
# To make this agent available, merge this file into the default repository branch.
# For format details, see: https://gh.io/customagents/config

name:
description: Main PR agent
---

# Phase 1
Create a new empty file called

# Phase 2

Call this command:

     gh auth status

# Phase 3
For the linked PR, call the following command:


     gh pr comment <PR_NUMBER> --body "❓ **BLOCKING QUESTION – HUMAN INPUT REQUIRED**

I cannot safely proceed because this decision impacts behavior.

**Question:**
Should we return `null` or throw a domain exception when the entity is not found?

Please reply to this comment to continue."

where PR_NUMBER is a number of linked PR 
