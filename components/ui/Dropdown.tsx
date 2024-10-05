import React, { useState } from "react";
import { AiFillCaretUp, AiOutlineMenu } from "react-icons/ai";
import { Button } from "@/components/ui/button"



function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  //meter logica para el render de contenido.        
  return (
    <div className="relative flex flex-col items-center rounded-lg hidden-web">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-200 p-4 w-full flex items-center justify-items-center font-bold text-lg rounded-lg tracking-wider border-4 border-transparent duration-300"
      >
        {!isOpen ? (
          <AiOutlineMenu className="h-8" />
        ) : (
          <AiFillCaretUp className="h-8" />
        )}
      </Button>



      {isOpen && (
        <div className="absolute top-20 flex flex-col items-start rounded-lg w-full dropdown bg-blue-50 shadow-md">

          <span className="text-sm">Inicio</span>

          <span className="text-sm">Devocionales</span>

          <span className="text-sm">Eventos</span>

          <span className="text-sm">Versículo</span>

          <span className="text-sm">Oraciones</span>

          <span className="text-sm">Busqueda</span>

          <span className="text-sm">Menu</span>

        </div>
      )}
    </div>
  );
}
export default Dropdown;
