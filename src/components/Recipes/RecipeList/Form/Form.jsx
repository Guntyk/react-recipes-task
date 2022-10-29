import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Form({ modal, toggleModal, save }) {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const recipeObj = {
      name: recipeName,
      description: description
    };
    save(recipeObj);
    setRecipeName('');
    setDescription('');
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <form onSubmit={handleSave}>
        <ModalHeader toggle={toggleModal}>Create New Recipe</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="d-block">
              <span>Recipe Name</span>
              <input
                type="text"
                className="form-control"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                name="recipeName"
                required
              />
            </label>
          </div>
          <div className="form-group mt-3">
            <label className="d-block">
              <span>How To Cook</span>{' '}
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                required></textarea>
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Create
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}