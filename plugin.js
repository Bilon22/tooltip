let editorId;

CKEDITOR.plugins.add( 'tooltip', {
    icons: 'tooltip',
    init: function( editor ) {
        editor.addCommand( 'insertTooltip', {
            exec: function( editor ) {
                console.log(editor.name);
                editorId = editor.name;
                modal();
            }
        });
        editor.ui.addButton( 'Tooltip', {
            label: 'Insert tooltip',
            command: 'insertTooltip',
            toolbar: 'insert,1'
        });
    }
});

function modal(){
    $('#modal').modal('show');
}

$('.add-to-text').click(function () {

    const tooltipExternalId = $(this).data('tooltip');
    let text =  CKEDITOR.instances[editorId].getSelection().getSelectedText();
    let startText =  CKEDITOR.instances[editorId].getSelection().getRanges()[0].startOffset;
    let endText =  CKEDITOR.instances[editorId].getSelection().getRanges()[0].endOffset;
    let number = 1;

    let textContent =  "<b><span class = \""+tooltipExternalId+"\" data-tooltip-number= \""+number+"\">"+text+"</span></b>";
    console.log(text);
    console.log(startText);
    console.log(endText);
    console.log(textContent);

    CKEDITOR.instances[editorId].insertHtml(textContent);
})