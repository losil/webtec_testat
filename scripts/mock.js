/* Mocks up JSON responses to AJAX call */
var aResponse = { d: { results: [ {id: 1, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test A", Content: "Test Text AAAAAA"}, 
                                    {id: 2, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test B", Content: "Test Text BBBBBB"}, 
                                    {id: 3, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test C", Content: "Test Text CCCCCC"}, 
                                    {id: 4, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test D", Content: "Test Text DDDDDD"}, 
                                    {id: 5, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test E", Content: "Test Text EEEEEE"}, 
                                    {id: 6, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test F", Content: "Test Text FFFFFF"}, 
                                    {id: 7, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test G", Content: "Test Text GGGGGG"}, 
                                    {id: 8, Image_x0020_URL: "http://lorempixel.com/g/640/480/", Title: "Test H", Content: "Test Text HHHHHH"} 
                                  ] 
                        } 
};

$.mockjax({
    url:  '/carousel',
    dataType: 'json',
    responseText: aResponse
});

