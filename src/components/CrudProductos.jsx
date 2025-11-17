import React, {useEffect, useState} from "react";
import { Table, Button, Form, Modal } from "react-bootstrap+";


const API_URL="https://6916591fa7a34288a27d1c76.mockapi.io/Productos";


const CrudProductos =()=> {
    const [productos, setProductos] = useState ([]);
    const [show, setShow] = useState (false);
    const [form, setForm] = useState ({
        title: "",
        description:"",
        price:"",
        stock:"",
        image:"",
    
    });
    const [editId, setEditId] = useState (null);

    const getProductos =()=> {
        fetch(API_URL)
        .then((res) => res.json())
        .then ((data) => setProductos(data))
        .catch ((error) => console.error ("Error Al Obtener Productos:", error));
    };

    const handleClose = () => {
        setShow (false);
        setForm ({title:"",
            description:"",
            price:"",
            stock:"",
            image:"",});
            setEditId(null);
    };
    const handleShow =(producto) => {
        setShow(true);
        if (producto){
            setForm ({
                ...producto,
                price: Number(producto.price),
                stock:Number(producto.stock),
             });
             setEditId(producto.id);
        }
    }
;
    const handleSubmit =(e) =>{
        e.preventDefault();
         
         const productData={
            ...form,
            price: Number (form.price),
            stock: Number (form.stock),
         };
     const method= editId ? "PUT" : "POST";
     const url = editId ? `${API_URL}/${editId}` : API_URL;
     
     fetch (url, {
        method: method,
        headers: {"Content-Type" :"application/json"},
        body: JSON.stringify(productData),
     })
     .then ((res) =>{
        if (!res.ok) throw new Error ("Error Al Guardar El Producto");
        return res.json();
     })
     .then (() =>{
        handleClose();
        getProductos ();
     })
     .catch ((error) => console.error ("Error:", error));
    
    };
    const eliminarProducto =(id) => {
        if (!window.confirm("Seguro Que Deseas Realizar Esta Accion?")) 
            return;
        fetch (`${API_URL}/${id}`,{method: "DELETE"})
         .then((res)=> {
            if (!res.ok) throw new Error ("Error Al Eliminar El Producto");
            getProductos();
         })
         .catch((error) => console.error("Error:", error));
        };
        useEffect(()=> {
        getProductos();
        },[]);

    return (
        <div className="container mt-4">
            <h2>Crud De Productos</h2>
            <Button className="mb-3" onClick={() => handleShow}>
                Agregar Productos
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.title}</td>
                            <td>{prod.description}</td>
                            <td>${Number(prod.price).toFixed(2)}</td>
                            <td>{prod.stock}</td>
                            <td>
                                {prod.image?.startsWith("htpp") ? (
                                    <img
                                    src={prod.image}
                                    alt ={prod.title}
                                    width ={50}
                                    height={50}
                                    style ={{objectFit: "cover"}}
                                    />
                                ) : (
                                    <span>{prod.image}</span>
                                )}
                            </td>
                            <td>
                                <Button
                                size="sm"
                                variant="warning" 
                                onClick ={() => eliminarProducto(prod.id)}>
                                    Eliminar                                
                                </Button>
                            </td>
                            </tr>
                    ))}
                </tbody>
            </Table >


            <Modal show ={show} onHide ={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
                </Modal.Header>  
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )   
    }
export default CrudProductos;