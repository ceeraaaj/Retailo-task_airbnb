# Retailo-task_airbnb

This repo contains sample test scenarios executed on AirBnB using Cypress.

## Prerequisite
Node should be installed on your system, if it is not already installed then,

Install Nodejs using:

```bash
sudo apt install nodejs
```
If you’re using Linux, you’ll want to have the required dependencies installed on your system:
```bash
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

## Testing Steps:
  1. Install Cypress via npm:
```
cd /your/project/path
```
```
npm install cypress --save-dev
```

  2. Clone this repository to your project path
  3. Launch Cypress
```
npx cypress open
```
  4. Choose your cloned directory from the Cypress UI.
  5. You will find Test-sets for both the tasks in Integrations. 
Under Integrations/Retailo-airbnb/ both the Test-sets are present. Click on any of them and automation tests will start running.
