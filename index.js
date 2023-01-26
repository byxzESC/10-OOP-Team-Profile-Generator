
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const whileLoop = true;

const constructTeam = () => {
    while (whileLoop) {
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
        .then(response => {
            if (response.addMember === 'no more members') {
                console.log('Generating team portfolio');
                whileLoop = false;
            } else if (response.addMember === 'engineer') {
                engineerMemberInfo();
            } else if (response.addMember === 'intern') {
                
            }
        })
    
    
    }
}

const engineerMemberInfo = () => {
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
                name: 'github',
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
            console.log(answer);
        })
}

const internMemberInfo = () => {
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
            console.log(answer);
        })
}