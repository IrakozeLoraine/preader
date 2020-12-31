var viewer = $('#canvas_container');
//get the book contents
function loadBook(filename){
        let url = './Books/'+filename;
        PDFObject.embed(url, viewer);
}