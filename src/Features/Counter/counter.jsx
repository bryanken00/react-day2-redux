import { useDispatch, useSelector } from "react-redux"
import { increment, dencrement, reset, incrementByAmount, storeOperator, computeValue } from "./counterSlice"
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const op = useSelector((state) => state.counter.operator)
    const finalValue = useSelector((state) => state.counter.sum)
    const dispatch = useDispatch();

    const [firstValue, setFirstValue] = useState(0);

    const equalFunc = (value) => {
        dispatch(storeOperator(value))
        setFirstValue(count)
        dispatch(reset())
    }

    const computeFinalValue = () => {
        if(op == "+")
            dispatch(computeValue((parseInt(firstValue) + parseInt(count))))
        if(op == "-")
            dispatch(computeValue((parseInt(firstValue) - parseInt(count))))
        if(op == "/")
            dispatch(computeValue((parseFloat(firstValue) / parseFloat(count))))
        if(op == "*")
            dispatch(computeValue((parseInt(firstValue) * parseInt(count))))
        
    }

    const resetAll = () => {
        dispatch(reset())
        setFirstValue(0)
        dispatch(storeOperator(""))
    }

    return(
        <section style={{display:'grid'}}>
            
            <input type="text" value={count} readOnly />
            <input type="text" value={op} readOnly />
            <input type="text" value={firstValue} readOnly />
            <input type="text" value={finalValue} readOnly />

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("7"))}>7</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("8"))}>8</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("9"))}>9</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => equalFunc("*")}>*</button>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("4"))}>4</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("5"))}>5</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("6"))}>6</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => equalFunc("/")}>/</button>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("1"))}>1</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("2"))}>2</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("3"))}>3</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => equalFunc("-")}>-</button>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => dispatch(incrementByAmount("0"))}>0</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={resetAll}>C</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={computeFinalValue}>=</button>
                    </div>
                    <div className="col">
                        <button className="col-4 btn btn-primary btn-lg" onClick={() => equalFunc("+")}>+</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Counter