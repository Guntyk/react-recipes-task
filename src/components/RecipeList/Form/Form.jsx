import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Form({ modal, toggle, save }) {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    if (name === "recipeName") {
      setRecipeName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let recipeObj = {};
    recipeObj["Name"] = recipeName;
    recipeObj["Description"] = description;
    save(recipeObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Recipe</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                type="text"
                className="form-control"
                value={recipeName}
                onChange={handleSubmit}
                name="recipeName"
              />
            </div>
            <div className="form-group mt-3">
              <label>How To Cook</label>
              <textarea
                className="form-control"
                value={description}
                onChange={handleSubmit}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
