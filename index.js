
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateProfile = require('./src/generateProfile');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];
// welcome message
console.log('Welcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n\nPlease build your team');

inquirer
    // get manager info
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern', 'no more members']
        }
    ])
    // add team members
    .then(answer => {
        team.push(new Manager(answer.name, answer.id, answer.email, answer.officeNumber));
        addMembers(answer.addMember);
    })

addMembers = (member) => {
    // console.log(team);
    if (member === 'engineer') {
        engineerMemberPrompt();
    } else if (member === 'intern') {
        internMemberPrompt();
    } else {
        // Acceptance --- WHEN I am prompted for my team members and their information
        // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
        let currentProfile = generateProfile.generateTeamProfile(team);

        fs.appendFile('./dist/exampleProfile.html', currentProfile, (err) => {
            if(err) throw err;
            console.log('the err is ', err);
        })
        
        let currentCSS = generateProfile.generateCSS();
        fs.appendFile('./dist/style.css', currentCSS, (err) => {
            if(err) {
            console.log('the err is ', err)
            };
        })
    }
}

engineerMemberPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineer\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your engineer\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your engineer\'s email?'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is your engineer\'s github?'
            },            
            {
                type: 'list',
                name: 'addMember',
                message: 'Which type of team member would you like to add?',
                choices: ['engineer', 'intern', 'no more members']
            }
        ])
        .then(answer => {
            // const engineer = new Engineer(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(new Engineer(answer.name, answer.id, answer.email, answer.gitHub));
            addMembers(answer.addMember);
        })
}

internMemberPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your intern\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your intern\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your intern\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is your intern\'s school?'
            },            
            {
                type: 'list',
                name: 'addMember',
                message: 'Which type of team member would you like to add?',
                choices: ['engineer', 'intern', 'no more members']
            }
        ])
        .then(answer => {
            // const intern = new Intern(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(new Intern(answer.name, answer.id, answer.email, answer.school));
            addMembers(answer.addMember);
        })
}