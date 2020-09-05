
// this is for watch java script code 
function clock(){
    var date= new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var season = "PM"

    if (h==0){
        h=12
    }
    if(h>12){
        h= h-12;
        season ="PM"
    }

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+ m : m;
    s = (s<10)? "0"+ s : s;
    var time = h + ":" + m + ":" + s + " " + season;
    document.getElementById("time").innerHTML= time;
    document.getElementById("time").textContent= time;
    setTimeout(clock, 1000)

}clock();

var dt = new Date();
    document.getElementById("date").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/ "+ (("0"+dt.getDate()).slice(-2)) +"/ "+ (dt.getFullYear());



    // calender
    var dt = new Date();
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()];
            document.getElementById("date_str").innerHTML = dt.toDateString();
            var cells = "";
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            for (i = 1; i <= endDate; i++) {
                if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else
                    cells += "<div>" + i + "</div>";
            }
            document.getElementsByClassName("days")[0].innerHTML = cells;

        }

        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }
