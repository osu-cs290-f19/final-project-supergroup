//var server = require("server.js");
//var posts = server.postsArray
console.log('loading index.js');
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
var update_button = document.getElementById('search-button');
console.log('found search button:\n',update_button);
update_button.addEventListener('click',updatePosts);