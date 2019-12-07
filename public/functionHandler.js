//var server = require("server.js");
//var posts = server.postsArray
console.log('loading index.js');
var contentArray= [];

function grabData(){
    contentArray = document.getElementsByClassName("user-post");
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
    if (filters.year){
        var filter_year = filters.year.toLowerCase();
        var post_year = post.year.toLowerCase();
        if (post_year.indexOf(filter_year)<0){
            return false;
        }
    }

    //if passes all tests...
    return true;
}

function delete_posts(){
    var postsArray = document.querySelectorAll("post-container");
    console.log("posts array lastchild:",postsArray.lastChild);
    while (postsArray.lastChild){
        //contentArray.push(postsArray.lastChild);
        postsArray.removeChild(postsArray.lastChild);
    }
}

function updatePosts(event){
    //delete all posts in dom
    delete_posts();
    //re-create all posts from original content array, and
    //update posts to match search parameters
    var new_filters = {
    class: document.getElementById('class-search').value,
    professor: document.getElementById('professor-search').value,
    text: document.getElementById('search-bar-text').value,
    term: document.getElementById("select-term").value,
    year: document.getElementById("year-input").value
    }
    var original_posts = contentArray;
    //console.log(post_info.length);
    for (var i =original_posts.length-1; i>=0;i--){ 
        var individual_post = {
        professor: original_posts[i].getAttribute('data-professor'),
        class: original_posts[i].getAttribute('data-class'),
        term: original_posts[i].getAttribute('data-term'),
        title: original_posts[i].getElementsByClassName('post-title')[0].textContent
        //year: original_posts[i].getAttribute('data-year')
        }
        if (!checkFilters(individual_post,new_filters)){
            console.log("failed test");
        }else{
            console.log("passed test");
        }
    }
}

//allow functionality of search button
var update_button = document.getElementById('search-button');
console.log('found search button:\n',update_button);
update_button.addEventListener('click',updatePosts);
window.addEventListener('load',grabData());
console.log(contentArray);
