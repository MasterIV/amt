FindPath = function(startPos, endPos) {
    var openList = [];
    var closedList = [];

    queueObj = function(pPos, pPrio) {
        this.pos = pPos;
        this.prio = pPrio;
    };


    (function() {
        openList.push(startPos);
    })();
}