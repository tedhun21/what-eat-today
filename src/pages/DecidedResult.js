import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { foods } from "../data/Data";

const DecidedResult = () => {
  const { section } = useParams();
  const filteredFood = foods.filter((food) => food.section === section)[0].subclass;

  return (
    <main>
      <div className="Container">
        <div className="Outline">
          <div className="Inline">
            <div className="DecidedWrap">
              <Link to="/decided">
                <div className="BackBtn" />
              </Link>
              <ul className="ResultWrap">
                {filteredFood.map((food,index) => (
                  <li key={index}>
                    <Link to={`/result/${food}`} >
                      <Button variant="danger">{food}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DecidedResult;
