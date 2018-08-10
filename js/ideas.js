// $(document).ready(function () {
//     $('#search-term').submit(function (event) {
//         event.preventDefault();
//         var searchTerm = $('#query').val().trim();
//         getRequest(searchTerm);
//     });
// });

// function getRequest(searchTerm) {
//     url = 'https://www.googleapis.com/youtube/v3/search?';
//     var params = {
//         part: 'snippet',
//         key: 'AIzaSyBoQiw1Pr-LoMT3OPR-PcqZ44NO3kXF3TY',
//         q: searchTerm
//     };
  
//     $.getJSON(url, params, function (searchTerm) {
//         showResults(searchTerm);

//     });
// }

// function showResults(results) {
//     var html = "";
//     var entries = results.items;
    
//     $.each(entries, function (index, value) {
//         var title = value.snippet.title;
//         var thumbnail = value.snippet.thumbnails.default.url;
//         html += '<p>' + title + '</p>';
//         html += '<img src="' + thumbnail + '">';
//     }); 
    
//     $('#search-results').html(html);
// }



// AIzaSyBoQiw1Pr-LoMT3OPR-PcqZ44NO3kXF3TY


$(function() {
    var searchField = $('#query');
    var icon = $('#search-btn');

    $(searchField).on('focus', function() {
        $(this).animate({
            width: '100%'
        }, 400);
        $(icon).animate({
            right: '10px'   
        }, 400);
    });
    
    $(searchField).on('blur', function() {
        if (searchField.val() == '') {
            $(searchField).animate({
                width: '45%'
            }, 400, function(){});
            $(icon).animate({
                right: '360px'
            }, 400, function(){});
        }
    });

    $('#search-form').submit(function(e){
        e.preventDefault;
        search();
    });

})

function search () {
    // clear results
    $('#results').html('');
    $('#buttons').html('');

    // get form input
    q = $('#query').val();

    // run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyBoQiw1Pr-LoMT3OPR-PcqZ44NO3kXF3TY'},
            function(data) {
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
                console.log(data);

                $.each(data.items, function(i, item) {
                    //Get output
                    var output = getOutput(item);

                    // display results
                    $('#results').append(output);
                });

            }
        );
}

//Build output
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var thumbnails = item.snippet.thumbnails.high.url;

    // Build output string
    var output = '<li>' +
        '<div class="list-left">' +
        '<img src="'+thumbnails+'">' +
        '</div>' +
        '<div class="list-right">' + 
        '<h3>'+ title +'</h3>'; 

}









