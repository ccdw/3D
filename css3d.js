
        
        var items;
   
         // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        
        var cats = $.getJSON( "/categories.json", function() {
          console.log( "success" );
           // console.dir( cats.responseJSON);
            
            $.each( cats.responseJSON.category_list.categories, function( index, cat ){
                console.log(cat.name);
                
               $.each( cat.subcategory_ids, function( index, catID ){
                    console.log( Discourse.Category.findById(catID).name );
                     
                    var topics = $.getJSON( "/c/" + cat.slug+"/" + Discourse.Category.findById(catID).slug + ".json", function() {
                  
                          $.each( topics.responseJSON.topic_list.topics , function( index, topic ){
                   
                                console.dir( topic.title); 
                            }) ;  
                    
                    });
                
        
                      
                });   
                
                
            });
 
 
        
        })
          .done(function(data) {
            console.log( "second success" );
            console.dir(data);
          })
          .fail(function() {
              alert("FAIL!");
            //console.log( "error" );
          })
          .always(function() {
            //console.log( "complete" );
          });
         
        // Perform other work here ...
         
        // Set another completion function for the request above
        cats.complete(function() {
        //  console.log( "second complete" );
        });
        
        
