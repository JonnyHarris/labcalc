var calc = (function () {

    // Private stuff up here
    // Public methods here
    return {
        add: function (numb1, numb2) {
            var firstop = parseInt(numb1);
            var secondop = parseInt(numb2);

            if (isNaN(firstop) == true) {
                throw new Error("Not a number");
            }
            answer = firstop + secondop;
            return answer;
        },

        multiply: function (numb1, numb2) {
            var firstop = parseInt(numb1);
            var secondop = parseInt(numb2);

            if (isNaN(firstop) == true) {
                throw new Error("Not a number");
            }
            answer = firstop * secondop;
            return answer;
        },

        divide: function (numb1, numb2) {
            var firstop = parseInt(numb1);
            var secondop = parseInt(numb2);

            if (isNaN(firstop) == true) {
                throw new Error("Not a number");
            }
            answer = firstop / secondop;
            return answer;
        },
        subtract: function (numb1, numb2) {
            var firstop = parseInt(numb1);
            var secondop = parseInt(numb2);

            if (isNaN(firstop) == true) {
                throw new Error("Not a number");
            }
            answer = firstop - secondop;
            return answer;
        }
    }
}())
  