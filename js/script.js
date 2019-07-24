(function () {

    var idTable = document.querySelector("#idTable"),
        ths = document.querySelectorAll("thead th"),
        thr = document.querySelectorAll("tbody tr");

    function makeArray(nodeList) {

        var array = [];
        for(var i = 0; i < nodeList.length; i++){
            array.push(nodeList[i]);
        }
        return array;
    }

    function sortBy(e) {
        var target = e.target,
            thsArray = makeArray(ths),
            thrArray = makeArray(thr),
            index = thsArray.indexOf(target),
            df = document.createDocumentFragment(),
            order = (target.className === "" || target.className === "desc") ? "asc" : "desc";

        console.log(order);

        thrArray.sort(function (a, b) {
            var tdA = a.children[index].textContent,
                tdB = b.children[index].textContent;

            if(tdA < tdB){
                return order === "asc" ? -1 : 1;
            } else if(tdA > tdB){
                return order === "asc" ? 1 : -1;
            } else {
                return 0;
            }
        });

        thrArray.forEach(function (value) {
           df.appendChild(value);
        });

        target.className = order;

        idTable.querySelector("tbody").appendChild(df);
    }

    for(var i = 0; i < ths.length; i++) {
        ths[i].addEventListener("click", sortBy);
    }

})();
