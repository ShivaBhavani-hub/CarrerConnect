/* =========================================
   LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (email && password) {

        alert("Login successful! Welcome to CareerConnect.");

        window.location.href = "dashboard.html";

    }

}


/* =========================================
   REGISTER
========================================= */

function registerUser(event) {

    event.preventDefault();

    alert(
        "Account created successfully! Welcome to CareerConnect."
    );

    window.location.href = "dashboard.html";

}


/* =========================================
   APPLY FOR JOB
========================================= */

function applyJob() {

    alert(
        "Your application has been submitted successfully!"
    );

}


/* =========================================
   SEARCH JOBS
========================================= */

function searchJobs() {

    const searchInput =
        document.getElementById("jobSearch");

    const searchValue =
        searchInput.value.toLowerCase();

    const jobs =
        document.querySelectorAll(".job-card-full");


    jobs.forEach(function(job) {

        const jobText =
            job.innerText.toLowerCase();

        if (jobText.includes(searchValue)) {

            job.style.display = "flex";

        } else {

            job.style.display = "none";

        }

    });

}