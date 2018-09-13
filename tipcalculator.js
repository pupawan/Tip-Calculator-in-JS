function calculateTip() {
    var billamt=document.getElementById("billamount").value;
    var srvqual=document.getElementById("servicequality").value;
    var nopeople=document.getElementById("peopleamt").value;

    if(billamt===""||srvqual== 0||nopeople=="")
    {
        alert("Plz enter Value");
        return 0;
    }

    if(nopeople== 1){
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.dipslay="block";
    }

    var total=(billamt*srvqual)/nopeople;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);
  //  document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;

   // document.getElementById("totaltip").style.display="none";
    document.getElementById("each").style.display="none";


    //document.getElementById("calculate").onclick = function(){calculateTip();}
}
