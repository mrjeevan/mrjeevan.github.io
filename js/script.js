function more(){
    alert("\nstep 1 : Get a ideia \nstep 2 : Implement it \nstep 3 : Get it working \nStuck @ step 3;\n \n  Will be avilable soon ;)");
}






function dark()
{
    // alert('Debug : Dark');
    var b = document.getElementsByTagName('body')[0];
    b.style.backgroundImage = "url('https://www.teahub.io/photos/full/137-1371882_flatzero-by-articted-data-src-low-poly-wallpaper.jpg')";

    b.style.color = 'azure';
    b.style.backgroundAttachment = 'fixed';
    b.style.backgroundSize = 'cover';
    
    
    // var c = document.getElementsByClassName('pre-border');
    

    // invert button part 
    $("#mode").html("light mode!");
    $("#mode").attr("onclick","light();");
    $("#mode").attr("class","mode btn btn-light ");
    $("a").css("color","orange");
}


// Dark Mode Settings
// body
// {
//   background-image: url('https://www.teahub.io/photos/full/137-1371882_flatzero-by-articted-data-src-low-poly-wallpaper.jpg');
//   color: azure;
//   background-attachment: fixed ;
//   background-size: cover;
// }

function light()
{
    // alert('Debug : Light Mode!')

    var b = document.getElementsByTagName('body')[0];
    b.style.backgroundImage = "url('https://www.fg-a.com/wallpapers/white-wave-pattern.jpg')";

    b.style.color = 'black';
    b.style.backgroundAttachment = 'fixed';
    b.style.backgroundSize = 'cover';


    // invert button part 
    $("#mode").html("Dark mode!");
    $("#mode").attr("onclick","dark();");
    $("#mode").attr("class","mode btn btn-dark ");
    $("a").css("color","rebeccapurple");


}


//   background-image: url('https://www.fg-a.com/wallpapers/white-wave-pattern.jpg');
//   background-attachment: fixed;
//   background-size: cover;

