$(document).ready(function() {
    var max_fields      = 5;
    var wrapper         = $(".container1");
    var add_button      = $(".add_form_field");

    var x = 1;
    $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            x++;
            $(wrapper).append('<div>' +
                '' +
                '<div class="form-group">\n' +
                '                        <label>Upload Image</label>\n' +
                '                    </div>\n' +
                '\n' +
                '                    <div class="form-group">\n' +
                '                        <!-- The fileinput-button span is used to style the file input field as button -->\n' +
                '                        <span class="btn btn-success fileinput-button">\n' +
                '                                                <i class="glyphicon glyphicon-plus"></i>\n' +
                '                                                <span>Select file...</span>\n' +
                '                            <!-- The file input field used as target for the file upload widget -->\n' +
                '                                                <input id="fileupload" class="fileupload" type="file" name="files" accept="image/x-png, image/gif, image/jpeg" >\n' +
                '                                            </span>\n' +
                '                        <br>\n' +
                '                        <br>\n' +
                '                        <!-- The global progress bar -->\n' +
                '                        <div id="progress" class="progress">\n' +
                '                            <div class="progress-bar progress-bar-success"></div>\n' +
                '                        </div>\n' +
                '                        <!-- The container for the uploaded files -->\n' +
                '                        <div id="files" class="files"></div>\n' +
                '                        <input type="text" name="uploaded_file_name" id="uploaded_file_name" hidden>\n' +
                '                        <br>\n' +
                '                    </div><a href="#" class="delete">Delete</a></div>'); //add input box

            if(x == 5){
                $(add_button).hide();
            }

        }

    });

    $(wrapper).on("click",".delete", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
        if(x < 5){
            $(add_button).show();
        }
    })
});