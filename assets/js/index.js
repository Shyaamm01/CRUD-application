
$("#add-user").submit(function(event){
    alert("Submit Successfully!");
})


/*

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array =$("update_user").serializeArray();
    var data={}

    console.log(unindexed_array);
})
*/





// for delete button

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do You Really Delete Thiis Record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully");
                location.reload;
            })
        }
    })
}