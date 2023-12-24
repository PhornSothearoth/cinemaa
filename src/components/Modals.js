import { Button, Modal } from "flowbite-react";
import React from "react";

export default function Modals({ openModal, onCloseModal, data }) {
  return (
    <Modal show={openModal} onClose={onCloseModal} className="bg-black">
      <Modal.Header className="bg-black "><span className="text-white">Spider-Man: No Way Home</span></Modal.Header>
      <Modal.Body className="bg-black">
        <div className="bg-black">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A mentally disturbed man takes residence in a halfway house. His
            mind gradually slips back into the realm created by his illness,
            where he replays a key part of his childhood.
          </p>
          <p className="mb-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            13 Dec 2002
          </p>

          {/* show category name */}
        </div>
        <div >
          {
            <div>
              <img
                className="h-auto" style={{width:200}}
                src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
                alt=""
              />
            </div>
          }
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-black">
        <Button onClick={() => onCloseModal} className="bg-red-700 hover:bg-red-800"> Trailer</Button>
      </Modal.Footer>
    </Modal>
  );
}
