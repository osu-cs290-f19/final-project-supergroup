
function addNewPost(postTitle, postClass, postTerm, postProfessor, postDate, postBody, postResource) {
    var postData = {
        title: postTitle,
        class: postClass,
        term: postTerm,
        professor: postProfessor,
        uploadDate: postDate,
        body: postBody,
        resource: postResource
    };

    var requestData = JSON.stringify(postData);

    var request = new XMLHttpRequest();
    request.open('POST', '/add-post');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            alert("Something went wrong adding your post.");
        } else {
            window.location.assign("localhost:3000/browse");
        }
    });

    request.send(requestData);
}

function addPostClick() {
    var postTitle = document.getElementById("post-title-input").value;
    var postClass = document.getElementById("post-class-input").value;
    var postTerm = document.getElementById("post-term-input").value;
    var postProfessor = document.getElementById("post-pf-input").value;
    var now = new Date();
    var postDate = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();
    var postBody = document.getElementById("post-body-input").value;
    var postResource = document.getElementById("post-resource-input").value;

    if (postTitle && postClass && postTerm && postProfessor && postBody && postResource) {
        addNewPost(postTitle, postClass, postTerm, postProfessor, postDate, postBody, postResource);
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

window.addEventListener('DOMContentLoaded', function () {

    var addPostButton = document.getElementById("add-post-button");
    if (addPostButton) {
        addPostButton.addEventListener('click', addPostClick);
    }

});