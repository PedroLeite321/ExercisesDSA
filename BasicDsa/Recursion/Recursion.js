// Recursion is a fairly simple concept to understand. Its a function that call itself until a goal is reached.
// All recursion should have two steps, the base step where you'll see if the goal was reached and the recursion one, where, as the name implies, recursion happen. If any of those steps are skipped an error will happen, the most harmfull though has to be skipping the base step, as it will cause an infinite loop.

let recursionEx = (() =>    {
    let recursion = (i) =>   {
        console.log(i)
        if(i < 1)   {
            return i;
        }else{
            recursion(i-1);
        }
    }
    recursion(5)
})();
