const generateCards = employees => {
    const generateManager = (managerAnswers) => {
        return `
            <div class="tile is-child is-4 has-text-centered employeeCard">
                <h2>${managerAnswers.getName()}</h2>
                <h3><i class="fas fa-tasks" style="color: #ffffff;"></i>${managerAnswers.getRole()}</h3>
                <p>ID: ${managerAnswers.getID()}</p>
                <p>Email: <a href="mailto:${managerAnswers.getEmail()}">${managerAnswers.getEmail()}</a></p>
                <p>Office Number: ${managerAnswers.getOfficeNumber()}</p>
            </div>    
        `
    }

    const generateEngineer = (engineerAnswers) => {
        return `
            <div class="tile is-child is-4 has-text-centered">
                <h2>${engineerAnswers.getName()}</h2>
                <h3><i class="fas fa-user-cog" style="color: #ffffff;"></i>${engineerAnswers.getRole()}</h3>
                <p>ID: ${engineerAnswers.getID()}</p>
                <p>Email: <a href="mailto:${engineerAnswers.getEmail()}">${engineerAnswers.getEmail()}</a></p>
                <p>GitHub: <a href="https://www.github.com/${engineerAnswers.getGitHub()}" target="_blank">${engineerAnswers.getGitHub()}</a></p>
            </div>        
        `
    }

    const generateIntern = (internAnswers) => {
        return`
            <div class="tile is-child is-4 has-text-centered">
                <h2>${internAnswers.getName()}</h2>
                <h3><i class="fas fa-user-graduate" style="color: #ffffff;"></i>${internAnswers.getRole()}</h3>
                <p>ID: ${internAnswers.getID()}</p>
                <p>Email: <a href="mailto:${internAnswers.getEmail()}">${internAnswers.getEmail()}</a></p>
                <p>School: ${internAnswers.getSchool()}</p>
            </div>        
        `
    }
}