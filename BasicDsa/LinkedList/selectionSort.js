// function to find the smallest element in an array
const main = () =>  {
    
    let array = [0,1,5,3,2];
    let elementNum = array.length
    const findSmallest = () =>  {
        let smallest = array[0];
        let smallest_index = 0;
        for(let i = 0; i <= elementNum-1; i++)    {
            if(smallest > array[i])  {
                smallest = array[i];
                smallest_index = i;
            }   
        }

        return smallest_index;
    }

    const sort = () =>  {
        let sortedArray = [];
        for(let i = 0; i <= elementNum-1; i++)    {
            let smallNum = findSmallest(array)
            sortedArray.push(array.splice(smallNum,1));
        }
        return sortedArray
    }
    console.log(sort(array));
}
main();