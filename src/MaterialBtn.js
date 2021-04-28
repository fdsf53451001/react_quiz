import Button from '@material-ui/core/Button';
const changeText = function(event){
    event.target.innerText = event.target.innerText + "被點了";
};

const MultiButton = function(){
    var output = [];
    for(var step=0;step<10;step++){
        output.push(<Button variant="contained" color="primary" onClick={changeText}>第{step+1}個按鍵</Button>);
    }
    return output;
};

function MaterialBtn(){
    return(
    <div className="Btn">
        {MultiButton()}
    </div>);
};

export default MaterialBtn;
