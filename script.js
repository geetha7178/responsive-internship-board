
const internships = [
    {
        title: "Frontend Developer Intern",
        company: "Tech Solutions",
        domain: "Web Development",
        duration: "3 Months"
    },
    {
        title: "Python Developer Intern",
        company: "Code Labs",
        domain: "Python",
        duration: "2 Months"
    },
    {
        title: "Java Developer Intern",
        company: "Digital Works",
        domain: "Java",
        duration: "3 Months"
    },
    {
        title: "Web Developer Intern",
        company: "Web Creators",
        domain: "Web Development",
        duration: "4 Months"
    }
];

const list = document.getElementById("internship-list");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const message = document.getElementById("message");

function displayInternships() {
    const keyword = search.value.toLowerCase();
    const domain = filter.value;

    const results = internships.filter(internship =>
        (internship.title.toLowerCase().includes(keyword) ||
         internship.company.toLowerCase().includes(keyword)) &&
        (domain === "all" || internship.domain === domain)
    );

    list.innerHTML = "";

    if (results.length === 0) {
        message.textContent = "No internships found!";
        return;
    }

    message.textContent = "";

    results.forEach(internship => {
        list.innerHTML += `
            <div class="card">
                <h2>${internship.title}</h2>
                <p>Company: ${internship.company}</p>
                <p>Domain: ${internship.domain}</p>
                <p>Duration: ${internship.duration}</p>
                <button type="button"
                    onclick="alert('Application feature coming soon!')">
                    Apply Now
                </button>
            </div>
        `;
    });
}

search.addEventListener("input", displayInternships);
filter.addEventListener("change", displayInternships);

displayInternships();
