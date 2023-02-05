
let managerGen = function (manager) {  // function that populates html file with user input to make Manager employee card
    return `
     <div class="row justify-content-center" id="team-cards">
                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${manager.getName()}</h3>
                            <h4>${manager.getRole()}</h4><i class="balance scale icon"></i>
                        </div>
                            <div class="card-body">
                            <div class="ui segment">
                                <p class="id">Id: ${manager.getId()}</p>
                            </div>
                            <div class="ui segment">
                                <p class="id">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                            </div>
                            <div class="ui segment">
                                <p class="id">Office Number:${manager.getofficeNumb()}</p>
                            </div>
                    </div>
                </div>
     </div>
                            

`;
}





let engineerGen = function (engine) {  // function that populates html file with user input to make Engineer employee cards
    return `
    
<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
                <h3> ${engine.getName()}</h3>
                <h4>${engine.getRole()}</h4><i class="chess icon"></i>
                </div> 
                <div class="card-body">
                <div class="ui segment">
                <p class="id">Id: ${engine.getId()}</p>
                </div>
                <div class="ui segment">
                <p class="id">Email: <a href="mailto:${engine.getEmail()}">${engine.getEmail()}</a> </p>
                </div>
                <div class="ui segment">
                <p class="id">GitHub: <a href="https://github.com/${engine.getGitHub()}">${engine.getGitHub()}</a> </p>
            </div>
        </div>
    </div>
</div>

`;                                            
}


let internGen = function (intern) {  // function that populates html file with user input to make Intern employee cards
    return `

<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
                <h3>${intern.getName()}</h3>
            <h4>${intern.getRole()}</h4><i class="chess pawn icon"></i>
            </div>
                <div class="card-body">
            <div class="ui segment">
                <p class="id">Id: ${intern.getId()} </p>
            </div>
            <div class="ui segment">
                <p class="id">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            </div>
            <div class="ui segment">
                <p class="id">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>
</div>
                                           
`;
}

createHTMLteamfile = (data) => {  // this pushes the array to help generate/create the html team file with the user input

pageArray = [];

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const title = employee.getRole();
    if (title === 'Manager') {
        const managerInfoCard = managerGen(employee);
        pageArray.push(managerInfoCard);
    }
    if (title === 'Engineer') {
        const enginInfoCard = engineerGen(employee);
        pageArray.push(enginInfoCard);
    }
    if (title === 'Intern') {
        const internInfoCard = internGen(employee);
        pageArray.push(internInfoCard);
    }
    }
    const employeeInfoCards = pageArray.join('')
    const teamGen = genHTML(employeeInfoCards);
    return teamGen;
}

const genHTML = function (employeeInfoCards) { // this is the const/functions has the formatting for the styling(bootstrap link & cemantic link & css file)header format. And where to place the new eployee cards
    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
    <link rel="stylesheet" href="../dist/styles.css">
    <body>
    <header>MY TEAM</header>
    <main>
        <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeInfoCards}
                </div>
        </div>
    </main>
    </body>
    </html>

`;
}


module.exports = createHTMLteamfile; // this exports the module to work with the function that writes the html file in the index.js file 
