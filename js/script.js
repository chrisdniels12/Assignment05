let formInfo = {};
window.addEventListener("load", () => {
    const processForm = () => {
        // turn the form turn it into an object
        const formData = new FormData(form);
        // Iterate through the FormData object and populate formInfo
        for (const [key, value] of formData.entries()) {
                formInfo[key] = value;}
        // Display formInfo in the console
        for (const key in formInfo) {
            console.log(key + ": " + formInfo[key]);
    }}
        // Listen for the form submission, Block form default behavior and call the helper function
    let form = document.getElementById("empForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        processForm();
    });
});