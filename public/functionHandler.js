var server = require("server.js");
//var posts = server.postsArray;

console.log('loading index.js');
var contentArray= [];

function insertPost(){
    
}

function checkFilters(post, filters){
    //check title
    //check class
    //check term
    //check upload date
    //check professor
    //check body
}

function updatePosts(event){
    console.log('updating\n');
    //delete all posts in dom
    //re-create all posts from back end data.
    create_posts();
    //update posts to match search parameters
    var new_filters = {
    classSearch: document.getElementById('classSearch');
    professorSearch: document.getElementById('professorSearch');
    search_bar_text: document.getElementById('search-bar-text');
    }
    post_list = document.querySelectorAll(".post");
    for (var i =post_info.length; i>0;i--){ 
        var individual_post = {
        post_prof: post_info[i].getAttribute('data-professor');
        post_class: post_info[i].getAttribute('data-class');
        }
        if (!checkFilters(individual_post,new_filters)){

        }
        console.log(post_class,post_prof);
        //var post_year = post_info[i].getAttribute('data-year');
        //var post_term = post_info[i].getAttribute('data-term');

        //check all variables
    }
}

//allow functionality of search button
var update_button = document.getElementById('search-button');
console.log('found search button:\n',update_button);
update_button.addEventListener('click',updatePosts);

function create_posts(json_data){
    userPosts.forEach(element => {
        console.log(element);
    });
}