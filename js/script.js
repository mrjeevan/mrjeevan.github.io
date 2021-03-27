function more(){
    alert("\nstep 1 : Get a ideia \nstep 2 : Implement it \nstep 3 : Get it working \nStuck @ step 3;\n \n  Will be avilable soon ;)");
}
function dark()
{
    var b = document.getElementsByTagName('body')[0];
    b.style.backgroundColor = 'black';
    b.style.backgroundImage = "url('resource/dark-background-wallpaper.jpg')";
    b.style.color = 'azure';
    b.style.backgroundAttachment = 'fixed';
    b.style.backgroundSize = 'cover';
    // invert button part 
    $("#mode").html('<i class="fas fa-sun"></i> light mode!');
    $("#mode").attr("onclick","light();");
    $("#mode").attr("class","mode btn btn-light ");
    $("a").css("color","orange");
    $(".block").css("background-color","rgba(225, 0, 0, 0.5)");
    // Nav-Hover-Fix
    $(".nav-link").hover(function(){
        $(this).css("color","red");
    },function(){
        $(this).css("color","orange");
    });
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
    // test
    b.style.backgroundColor = 'thistle';
    b.style.backgroundImage = "url('resource/White-Wallpaper-For-Pc.jpg')";
    b.style.color = 'black';
    b.style.backgroundAttachment = 'fixed';
    b.style.backgroundSize = 'cover';
    // invert button part 
    $("#mode").html('<i class="fas fa-moon"></i> Dark mode!');
    $("#mode").attr("onclick","dark();");
    $("#mode").attr("class","mode btn btn-dark ");
    $("a").css("color","royalblue");
    $(".block").css("background-color","rgba(5, 2, 200, 0.5)");
    // Nav-Hover-Fix
    $(".nav-link").hover(function(){
        $(this).css("color","red");
    },function(){
        $(this).css("color","royalblue");
    });
}
//   background-image: url('https://www.fg-a.com/wallpapers/white-wave-pattern.jpg');
//   background-attachment: fixed;
//   background-size: cover;

// TESTING //
