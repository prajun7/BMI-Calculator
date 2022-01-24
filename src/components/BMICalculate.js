import React, {useState} from 'react'

function BMICalculate(){
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const[result, setResult] = useState(0);

    function calculateBMI(e){
        e.preventDefault();
       // console.log(typeof (weight));  //This will give string
       // console.log({weight})  //This will give object

       let weightNum = parseInt(weight);
       let heightNum = parseInt(height);
       setResult((weightNum/(heightNum*heightNum)).toFixed(3));
       
       
    //    result = weightNum/(heightNum*heightNum);
       console.log(result);
    }

    return (
        <div className = "form">
            <h2>BMI Calculator</h2>
            <form onSubmit={calculateBMI}>
                <label>Weight in Kg:</label>
                <input 
                    type = "Number" 
                    required
                    // value = {weight}
                    onChange = {(e) => setWeight(e.target.value)}>
                </input>

                <label>Height in meter:</label>
                <input 
                    type = "Number" 
                    required
                    // value = {height}
                    onChange = {(e) => setHeight(e.target.value)}>
                </input>

                <button> Calculte </button>

            </form>

            <p> Your Body Mass Index is :{result} </p>
        </div>
    )

}

export default BMICalculate