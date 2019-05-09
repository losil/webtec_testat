// Code goes here
$(document).ready(function() {
    $.ajax( {
        url: '/carousel',
        dataType: 'json',
        success: function(data) {
         var response = '',
             indicator = '';
         for (var i = 0; i < data.d.results.length; i++) {
             response += '<div class="item"><img src="' + data.d.results[i].Image_x0020_URL + '"><div class="carousel-caption"><h3>' + data.d.results[i].Title + '</h3><p>' + data.d.results[i].Content + '</p><p><a class="btn btn-info btn-sm">Read More</a></p></div></div>';
             indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
         }
         $('#homepageItems').append(response);
         $('#indicators').append(indicator);
         $('.item').first().addClass('active');
         $('.carousel-indicators > li').first().addClass('active');
         $("#myCarousel").carousel();
        }
    });
 });