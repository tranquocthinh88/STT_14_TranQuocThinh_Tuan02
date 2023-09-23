const usrlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function() {
    $.ajax({
            method: "GET",
            url: usrlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
        
})()      