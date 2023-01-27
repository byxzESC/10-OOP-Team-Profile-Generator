function memberSection(member) {
    console.log(member);
    if (member.getRole() === 'Manager') {
        return `<div class="card">
<h3 class="name">${member.getName()}</h3>
<h3 class="id">Manager</h3>
<div class="id">${member.getId()}</div>
<div class="email">${member.getEmail()}</div>
<div class="special">${member.officeNumber}</div>
</div>`;     

    } else if (member.getRole() === 'Engineer') {
        return `<div class="card">        
<h3 class="name">${member.getName()}</h3>
<h3 class="id">Engineer</h3>
<div class="id">${member.getId()}</div>
<div class="email">${member.getEmail()}</div>
<div class="special">${member.github}</div>
</div>`;

    } else if (member.getRole() === 'Intern') {
        return `<div class="card">
    <h3 class="name">${member.getName()}</h3>
    <h3 class="id">Intern</h3>
    <div class="id">${member.getId()}</div>
    <div class="email">${member.getEmail()}</div>
    <div class="special">${member.school}</div>
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


module.exports = { generateTeamPortfolio };
