$(document).ready(function () {
    $('#search-btn').submit(function (event) {
        event.preventDefault();
        var q = $('#query').val().trim();
        search(q);
    });


function search(q) {
    URL = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet, id',
        q: q,
        type: video,
        key: 'AIzaSyBoQiw1Pr-LoMT3OPR-PcqZ44NO3kXF3TY'};

    $.get(URL, params, function (data) {
        $.each(data.items, function(i, item) {
            console.log(data);
            var output = getOutput(item);
            $('#search-results').append(output);
        });
    });
}

function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var thumbnails = item.snippet.thumbnails.high.url;

    var output = '<li>' +
        '<div class="list-left">' +
        '<img src="'+thumbnails+'">' +
        '</div>' +
        '<div class="list-right">' + 
        '<h3>'+ title +'</h3>'; 
}

});





