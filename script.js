
        function Try(event){
            event.preventDefault();
            let v = document.querySelector("#minutes");
        let y = document.querySelector("#year");
        let a = document.querySelector("#p");

        // Use .value to get the values from the textareas
        let minutesValue = v.value;
        let yearValue = y.value;

        let w = minutesValue * 365 * yearValue;
        console.log(w);
        let ws = w / 60;
        if (ws >= 24) {
            let d = ws / 24;
            a.innerText = d;
        }
        }
   