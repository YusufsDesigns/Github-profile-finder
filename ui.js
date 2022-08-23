class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="btn btn-primary btn-block my-2">
                            Public Repos: ${user.public_repos}
                        </span>
                        <span class="btn btn-secondary">
                            Public Gists: ${user.public_gists}
                        </span>
                        <span class="btn btn-success">
                            Followers: ${user.followers}
                        </span>
                        <span class="btn btn-info">
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: <a href="${user.blog}">${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }

    // Show user repos
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="btn btn-primary btn-block my-2">
                            Stars: ${repo.stargazers_count}
                        </span>
                        <span class="btn btn-secondary">
                            Watchers: ${repo.watchers_count}
                        </span>
                        <span class="btn btn-success">
                            Forks: ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
            `
        });
        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(msg, className){
        // Clear remaining alert messages
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get parent
        const parent = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        parent.insertBefore(div, search);
        // Timeout after 3 sec
        setTimeout(() => {
            div.remove();
        }, 3000)
    }

    // Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}