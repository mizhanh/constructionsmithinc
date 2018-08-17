var gapikey = 'AIzaSyBoQiw1Pr-LoMT3OPR-PcqZ44NO3kXF3TY';

$(function() {
    $('#search-form').submit( function(e) {
        e.preventDefault();
        $('#seeded-videos').hide();
    });
});

function searchYoutube() {
    $('#results').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>');
    $('#buttons').html('');
    
    // get form input
    q = $('#search').val(); 
    
    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            maxResults: 4,
            key: gapikey
        }, function(data) {
            console.log(data);
            $('#results').html(''); // hide loading

            for (var i=0; i<data.items.length; i++) {
            console.log(data.items.length);
            var v = data.items[i];
            console.log(v);
            var output = getOutput(v);
            $('#results').append(output);
            }
            
    });
}

// Build output
function getOutput(item) {
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    
    var output = '<iframe width="450" height="375" src="https://www.youtube.com/embed/' + videoID + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen position position="relative"></iframe>';

    return output;
}






