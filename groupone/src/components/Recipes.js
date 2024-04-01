import React from 'react';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//a modal that displays recipe information 
function RecipeModal(props) {
    // Destructure props to get the necessary values
    const { show, onHide, label, ingredientLines } = props;

    // Return a Modal component from react-bootstrap
    return (
        <Modal
            show={show} //Show or hide the modal based on the 'show' prop
            onHide={onHide} //Function to hide the modal
            size="lg" //Set the size of the modal to large
            aria-labelledby="contained-modal-title-vcenter"
            centered //Center the modal vertically
        >
            <Modal.Header closeButton> {/* Header with a close button */}
                <Modal.Title id="contained-modal-title-vcenter">{label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Ingredients</h4>
                <ul className="list-group">
                    {ingredientLines.map((ingredient, index) => (
                        <li key={index} className="list-group-item">{ingredient}</li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                {/* Button to close the modal */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

//represents an item in the recipe list
function RecipeItem(props) {
    const { name, image, ingredientLines } = props;
    // Use React.useState to manage the state of the modal
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="col-md-3">
            {/* Render the RecipeModal component */}
            <RecipeModal
                show={modalShow} // Pass the show state to the modal
                onHide={() => setModalShow(false)} // Function to hide the modal
                label={name} // Name of the recipe for the modal title
                ingredientLines={ingredientLines} // List of ingredients for the modal
            />
            <div className="card py-1 my-2 text-center h-100">
                <img
                    src={image}
                    className="img-fluid w-100 card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                    alt="recipe"
                />
                <div className="card-body">
                    {/* Button to show the modal when clicked */}
                    <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => {
                            setModalShow(true); //Show the modal
                        }}
                    >
                        <h5 className="card-title">{name}</h5> {/* Display the name of the recipe */}
                    </button>
                </div>
            </div>
        </div>
    );
};

//represents a list of recipes
function Recipes(props) {
    const { recipes } = props;

    return (
        <>
            <div className="row">
                {/* Map over the recipes array to render each recipe item */}
                {recipes.map((recipe, idx) => (
                    <RecipeItem
                        key={idx}
                        name={recipe.recipe.label} // Name of the recipe
                        image={recipe.recipe.image} // Image of the recipe
                        ingredientLines={recipe.recipe.ingredientLines} // List of ingredients
                    />
                ))}
            </div>
        </>
    );
};

export default Recipes;