const number = [5, 2];
const text = (
  <>
    {number.lenght > 0 && (    
        <h1 className="red" id="test">
        Hello World!! 
        </h1>
    )}
    <br></br> {number[0] + number[1]}
  </>
);

//stateless
function missValue() {
    return "Missed !!";
}

function List() {
    return number.lenght > 3 ? text : missValue ;
}

export default List;
//