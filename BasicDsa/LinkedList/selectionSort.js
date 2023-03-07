// function to find the smallest element in an array
const main = () =>  {
    //First find the smallest index by comparing the first index to the entire array, if the first index is bigger than another index, return that index. By the end, one should have the smallest. It is also good to keep track of the index you are in, so just return the iterator to a variable.
    let array = [7,5,3,2,0];
    const findSmallest = () =>  {
        let smallest = array[0];
        let smallest_index = 0;
        for(let i = 0; i <= array.length; i++)    {
            if(smallest > array[i])  {
                smallest = array[i];
                smallest_index = i;
            }   
        }

        return {smallest_index};
    }

    const sort = () =>  {
        let sortedArray = [];
        for(let i = 0; i <= array.length; i++)    {
            let smallNum = findSmallest(array)
            sortedArray.push(array.splice(smallNum.smallest_index,1[0]));
        }
        console.log(sortedArray)
    }
    sort(array);
}
main();