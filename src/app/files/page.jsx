"use client"
import React, { useState } from 'react'
import axios from 'axios'

const Files = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [nombreProducto, setNombreProducto] = useState(null)
    const [descripcionProducto, setdescripcionProducto] = useState(null)
    const [precioProducto, setPrecioProducto] = useState(null)
    const [stockProducto, setStockProducto] = useState(null)
    const [productData, setProductData] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
        imagenes: [],
        stock: 0,
        categoriaId: 1
      });
    const [imagen1, setImagen1] = useState(null)
    // const [imagen2, setImagen2] = useState(null)
    // const [imagen3, setImagen3] = useState(null)

    const handleUpload = () => {
        setProductData({
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio:precioProducto,
            imagenes:[""],
            stock:stockProducto,
            categoriaId:0
        })
        axios.post('http://127.0.0.1:5000/productos', productData)
          .then((response) => {
            console.log(response.data); // Aquí puedes manejar la respuesta del servidor
            alert('Producto agregado con éxito');
          })
          .catch((error) => {
            console.error(error);
            alert('Error al agregar el producto');
          });
      };



    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload1 = () => {
        if (selectedFile) {
            const formData1 = new FormData();
            formData1.append('imagen', selectedFile);
            axios.post('http://127.0.0.1:5000/subir-imagen', formData1)
                .then((response) => {
                    setImagen1(response.data.content.imagen)
                })
                .catch((error) => {
                    alert('Error al subir el archivo');
                });
        } else {
            alert('Por favor, seleccione un archivo.');
        }

    };
    // const handleUpload2 = () => {
    //     if (selectedFile) {
    //         const formData2 = new FormData();
    //         formData2.append('imagen', selectedFile);
    //         axios.post('http://127.0.0.1:5000/subir-imagen', formData2)
    //             .then((response) => {
    //                 setImagen2(response.data.content.imagen)
    //             })
    //             .catch((error) => {
    //                 alert('Error al subir el archivo');
    //             });
    //     } else {
    //         alert('Por favor, seleccione un archivo.');
    //     }

    // };
    // const handleUpload3 = () => {
    //     if (selectedFile) {
    //         const formData3 = new FormData();
    //         formData3.append('imagen', selectedFile);
    //         axios.post('http://127.0.0.1:5000/subir-imagen', formData3)
    //             .then((response) => {
    //                 setImagen3(response.data.content.imagen)
    //             })
    //             .catch((error) => {
    //                 alert('Error al subir el archivo');
    //             });
    //     } else {
    //         alert('Por favor, seleccione un archivo.');
    //     }

    // };

    return (
        < >
        
                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setNombreProducto(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"  />
                    </div>
                    {/* <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div> */}
                    {/* <div>
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                    </div> */}
                    <div>
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input onChange={(e) => setPrecioProducto(e.target.value)} type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999"  />
                    </div>
                    <div>
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                        <input  onChange={(e) => setStockProducto(e.target.value)} type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Insertar el Stock"  />
                    </div>
                    {/* <div class="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                        <div>
                            <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item weight (kg)</label>
                            <input type="number" name="weight" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
                        </div>
                        <div>
                            <label for="length" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lenght (cm)</label>
                            <input type="number" name="length" id="length" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="105" required=""/>
                        </div>
                        <div>
                            <label for="breadth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breadth (cm)</label>
                            <input type="number" name="breadth" id="breadth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="15" required=""/>
                        </div>
                        <div>
                            <label for="width" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width (cm)</label>
                            <input type="number" name="width" id="width" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="23" required=""/>
                        </div>
                    </div> */}
                    <div class="sm:col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea onChange={(e) => setdescripcionProducto(e.target.value)}id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here">
                        </textarea>
                    </div>
                </div>

                {/* <div class="mb-4 space-y-4 sm:flex sm:space-y-0">
                    <div class="flex items-center mr-4">
                        <input id="inline-checkbox" type="checkbox" value="" name="sellingType" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In-store only</label>
                    </div>
                    <div class="flex items-center mr-4">
                        <input id="inline-2-checkbox" type="checkbox" value="" name="sellingType" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online selling only</label>
                    </div>
                    <div class="flex items-center mr-4">
                        <input checked="" id="inline-checked-checkbox" type="checkbox" value="" name="sellingType" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Both in-store and online</label>
                    </div>
                </div> */}
                <div class="mb-4">
                    <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Images</span>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <button className='bg-red-100' onClick={handleUpload1}>Subir</button>
                    </div>
                    {/* <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">Click to upload</span>
                                    or drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden"/>
                        </label>
                    </div> */}
                </div>
                <div class="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    {/* producto añadir boton */}
                    {/* <button type="submit" class="w-full sm:w-auto justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add product</button> */}
                    <button onClick={()=>handleUpload()} data-modal-toggle="createProductModal" type="button" class="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        {/* <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg> */}
                        <p>Agregar Producto</p>
                    </button>
                </div>

            {/* XD */}
            {/* <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload1}>Subir</button>
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload2}>Subir</button>
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload3}>Subir</button>
            // // </div> */}
        </>
    );
}

export default Files