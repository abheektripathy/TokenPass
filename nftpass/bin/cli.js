#!/usr/bin/env node



const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}` , {stdio: 'inherit'});
    }
    catch(e) {
        console.error(`Failed to execute ${command}` , e)
        return false
    }
    return true

}

const reponame = process.argv[2];
const gitCheckoutCommand = `git clone  --depth 1 https://github.com/abheektripathy/TokenPass.git ${reponame}` ;
const installDepsCommand = `cd ${reponame} && npm install `;

console.log(`Cloning the template with repo name ${reponame}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(1);

console.log(`Installing dependencies for ${reponame}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(1);

console.log(`Successfully created ${reponame}!`);
console.log(`Run the following commands to get started:`);
console.log(`cd ${reponame}`);
console.log(`npm start`);