function memberSection(member) {
    console.log(member);
    if (member.getRole() === 'Manager') {
        return `<div class="card">
    <div class="card-title">
        <h3 class="name">${member.getName()}</h3>
        <h3 class="role">Manager</h3>
    </div>
    <div class="card-body">
        <div class="id">ID: ${member.getId()}</div>
        <div class="email">Email: ${member.getEmail()}</div>
        <div class="special">Office number: ${member.officeNumber}</div>
    </div>
</div>`;     

    } else if (member.getRole() === 'Engineer') {
        return `<div class="card">
    <div class="card-title">        
        <h3 class="name">${member.getName()}</h3>
        <h3 class="role">Engineer</h3>
    </div>
    <div class="card-body">
        <div class="id">ID: ${member.getId()}</div>
        <div class="email">Email: ${member.getEmail()}</div>
        <div class="special">GitHub: <a href="https://github.com/${member.getGithub()}">${member.github}</a></div>
    </div>
</div>`;

    } else if (member.getRole() === 'Intern') {
        return `<div class="card">
    <div class="card-title">
        <h3 class="name">${member.getName()}</h3>
        <h3 class="role">Intern</h3>
    </div>
    <div class="card-body">
        <div class="id">ID: ${member.getId()}</div>
        <div class="email">Email: ${member.getEmail()}</div>
        <div class="special">School: ${member.school}</div>
    </div>
</div>`;
    }
}

function generateTeamPortfolio(data) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header id="header">
        <h1 class="title">My Team</h1>
    </header>

    <section id="member-info-section">
        ${data.reduce((acc, member) => acc += memberSection(member), ``)}
    </section>
</body>

</html>`
}

function generateCSS () {
    return `body {
    font-family: monospace;
    font-size: 16px;
}

#header {
    background-color: #E6425E;
    color: white;
    height: 15vh;
    width: 100vw;
    text-align: center;
    margin-top: 0;
}

#header h1 {
    margin: 0;
    font-size: 3rem;
    padding-top: 2.5rem;
}

#member-info-section {
    display: flex;
    flex-wrap: wrap;
    height: 75vh;
    padding-top: 2rem;
    margin: 1.5rem 15%;
}

.card {
    min-width: 245px;
    max-width: 245px;
    max-height: 310px;
    box-shadow: 3px 2px 2px black;
    border-radius: 25px;
    margin: 1rem;
    background-color: #CAD5E2;
    
}

.card-title {
    background-color: #1B98F5;
    border-radius: 25px 25px 0 0;
    color: white;
    font-size: 1.15rem;
    padding: 5px 16px 3px 16px;
}

.card-body {    
    padding: 3px 7px;
}

.card-body div {
    line-height: 1.5rem;
    padding: 2px 3px;
}

.card-body .email {
    min-height: 80px;
    overflow-wrap: break-word;
}

`}


module.exports = { generateTeamPortfolio, generateCSS};
