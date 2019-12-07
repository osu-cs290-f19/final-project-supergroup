var contentArray= [];

function create_posts(){
    //nada for now
}

function checkFilters(post, filters){
    //check title
    if (filters.text){
        var post_title = post.title.toLowerCase();
        var filter_text = filters.text.toLowerCase();
        if (post_title.indexOf(filter_text)<0){
            return false;
        }
    }
    //check class
    if (filters.class){
        var filter_class = filters.class.toLowerCase();
        var post_class = post.class.toLowerCase()
        if(post_class.indexOf(filter_class)<0){
            return false;
        }
    }
    //check term
    if (filters.term){
        var filter_term = filters.term.toLowerCase();
        var post_term = post.term.toLowerCase();
        if(post_term.indexOf(filter_term)<0){
            return false;
        }
    }
    //check professor
    if (filters.professor){
        var filter_prof = filters.professor.toLowerCase();
        var post_prof = post.professor.toLowerCase();
        if(post_prof.indexOf(filter_prof)<0){
            return false;
        }
    }

    //if passes all tests...
    return true;
}

function delete_posts(){
    var postsArray = document.getElementsByClassName("userPost");
    console.log(postsArray);
    while (postsArray.lastChild){
        postsArray.removeChild(postsArray.lastChild);
    }
}

function updatePosts(event){
    //delete all posts in dom
    delete_posts();
    //re-create all posts from back end data.
    create_posts();
    //update posts to match search parameters
    var new_filters = {
    class: document.getElementById('class-search').value,
    professor: document.getElementById('professor-search').value,
    text: document.getElementById('search-bar-text').value,
    term: document.getElementById("select-term").value
    }
    post_info = document.querySelectorAll(".user-post");
    //console.log(post_info.length);
    for (var i =post_info.length-1; i>=0;i--){ 
        var individual_post = {
        professor: post_info[i].getAttribute('data-professor'),
        class: post_info[i].getAttribute('data-class'),
        term: post_info[i].getAttribute('data-term'),
        title: post_info[i].getElementsByClassName('post-title')[0].textContent
        }
        if (!checkFilters(individual_post,new_filters)){
            console.log("failed test");
        }else{
            console.log("passed test");
        }
        //console.log(post_class,post_prof);
        //var post_year = post_info[i].getAttribute('data-year');
        //var post_term = post_info[i].getAttribute('data-term');

        //check all variables
    }
}

//allow functionality of search button

function addNewPost(postNum, postTitle, postClass, postTerm, postYear, postProfessor, postDate, postBody, postResource) {


    var postData = {
        postNum: postNum,
        title: postTitle,
        class: postClass,
        term: postTerm,
        year: postYear,
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
            location.assign(window.location.origin + "/browse");
        }
    });

    request.send(requestData);
}

function addPostClick() {
    var postTitle = document.getElementById("post-title-input").value;
    var postClass = document.getElementById("post-class-input").value;
    var postTerm = document.getElementById("post-term-input").value;
    var postYear = document.getElementById("post-year-input").value;
    var postProfessor = document.getElementById("post-pf-input").value;
    var now = new Date()
    var postDate = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();
    var postBody = document.getElementById("post-body-input").value;
    var postResource = document.getElementById("post-resource-input").value;

    if (postTitle && postClass && postTerm && postYear && postProfessor && postBody && postResource) {
        var request = new XMLHttpRequest();
        request.open('POST', '/get-post-num');
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('load', function (event) {
            var postNum = event.target.response;
            addNewPost(postNum, postTitle, postClass, postTerm, postYear, postProfessor, postDate, postBody, postResource);
        });
        request.send(JSON.stringify({}));
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

window.addEventListener('DOMContentLoaded', function () {

    var updateButton = document.getElementById('search-button');
    if (updateButton) {
        updateButton.addEventListener('click',updatePosts);
    }

    var addPostButton = document.getElementById("add-post-button");
    if (addPostButton) {
        addPostButton.addEventListener('click', addPostClick);
    }

});