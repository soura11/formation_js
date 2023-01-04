var empManager = {

    showEmployees: function (){
        $.ajax({
            type: "GET",
            url: 'http://localhost:5558/employees',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $.each(data, function (index, emp) {
                    $('<tr>')
                        .append("<td>" + emp.id + "</td>")
                        .append("<td>" + emp.firstName + "</td>")
                        .append("<td>" + emp.lastName + "</td>")
                        .append("</tr>")
                        .appendTo($('#employees'));
                    ;
                });
            }
        });
    } 
}

$(document).ready(function () {
    empManager.showEmployees();
});